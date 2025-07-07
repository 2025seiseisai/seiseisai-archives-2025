import os

def is_text_file(file_path, block_size=1024):
    """
    ファイルがテキストファイルである可能性が高いかを確認します。
    最初のblock_sizeバイト内にNULLバイトが含まれていれば、バイナリファイルと見なします。
    """
    if file_path.endswith('.pdf') or file_path.endswith('.ai'):
        return False
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(block_size)
            # NULLバイトが含まれているファイルはバイナリファイルと見なす
            if b'\x00' in chunk:
                return False
    except Exception:
        return False
    return True

def convert_crlf_to_lf(directory):
    for root, _, files in os.walk(directory):
        if root.replace("\\", "/").startswith("./.git/"):
            continue
        for file in files:
            file_path = os.path.join(root, file)
            # テキストファイルかどうかを判定
            if not is_text_file(file_path):
                continue

            try:
                with open(file_path, 'rb') as f:
                    content = f.read()
                
                # 変換が必要な場合のみ書き込む
                if b'\r\n' in content:
                    new_content = content.replace(b'\r\n', b'\n')
                    with open(file_path, 'wb') as f:
                        f.write(new_content)
                    print(f"Converted: {file_path}")
                else:
                    print(f"Skipped (no CRLF): {file_path}")

            except Exception as e:
                print(f"Failed to process {file_path}: {e}")

if __name__ == "__main__":
    target_directory = input("Enter the directory path to convert files: ").strip()
    if os.path.isdir(target_directory):
        convert_crlf_to_lf(target_directory)
    else:
        print("Invalid directory path.")