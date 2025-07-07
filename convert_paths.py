import re
from pathlib import Path

# 処理の起点となるディレクトリ
BASE_DIR = Path('2011')
# 絶対パスのプレフィックス
ABS_PREFIX = '/2011/'

# href="...", src="..." and url(...) を見つけるための正規表現
# グループ1: 属性 (href, src) または "url"
# グループ2: パス本体 (クォートなし)
PATH_REGEX = re.compile(r'(href|src)=["\']([^"\']+)["\']|url\((["\']?)([^)]*)\3\)', re.IGNORECASE)

def convert_path(match, file_path: Path):
    """正規表現にマッチしたパスを絶対パスに変換するコールバック関数"""
    full_match = match.group(0)
    
    # href/src属性の場合
    if match.group(1):
        attr = match.group(1)
        path_str = match.group(2)
        quote = full_match[len(attr)+1]
    # url()の場合
    else:
        attr = 'url'
        path_str = match.group(4)
        quote = match.group(3)

    # パスが空、データURI、絶対URLの場合は変換しない
    if not path_str or path_str.startswith(('data:', 'http:', 'https:', '//')):
        return full_match

    # ルート相対パスの場合
    if path_str.startswith('/') and not path_str.startswith(ABS_PREFIX):
        # /2022/download/download.css のように年のプレフィックスを付ける
        web_path = f"/{BASE_DIR.name}{path_str}"
    # 通常の相対パスの場合
    else:
        # ファイルのディレクトリを基準に絶対パスを解決
        file_dir = file_path.parent
        resolved_path = (file_dir / path_str).resolve()

        try:
            # プロジェクトルートからの相対パスに変換
            relative_to_root = resolved_path.relative_to(Path.cwd())
            # Web用の絶対パスに変換
            web_path = '/' + relative_to_root.as_posix()
        except ValueError:
            # プロジェクトディレクトリ外のパスは変換しない
            return full_match

    # 新しいパスを構築して返す
    if attr == 'url':
        return f'url({quote}{web_path}{quote})'
    else:
        return f'{attr}={quote}{web_path}{quote}'

def process_file(file_path: Path):
    """単一のファイルを読み込み、パスを変換して書き込む"""
    print(f"Processing: {file_path}")
    try:
        # エンコーディングを試行
        try:
            content = file_path.read_text(encoding='utf-8')
        except UnicodeDecodeError:
            content = file_path.read_text(encoding='shift_jis')

        # functools.partialの代わりにlambdaを使用して追加の引数を渡す
        new_content = PATH_REGEX.sub(lambda m: convert_path(m, file_path), content)

        if new_content != content:
            print(f"  -> Updating paths in {file_path}")
            file_path.write_text(new_content, encoding='utf-8')
        else:
            print(f"  -> No paths to update in {file_path}")

    except Exception as e:
        print(f"  -> Error processing file {file_path}: {e}")

def main():
    """メイン関数: 対象ファイルを探索して処理を実行する"""
    print("Starting path conversion...")
    for file_path in BASE_DIR.rglob('*'):
        if file_path.is_file() and file_path.suffix.lower() in ['.html', '.css']:
            process_file(file_path)
    print("Path conversion finished.")

if __name__ == '__main__':
    main()
