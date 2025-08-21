import os
from PIL import Image, UnidentifiedImageError
import subprocess

Image.MAX_IMAGE_PIXELS = 1000000000

def process_year(year):
    root = str(year)
    if not os.path.isdir(root):
        return
    print(f"Processing year: {year}")
    for dirpath, _, files in os.walk(root):
        for fn in files:
            ext = os.path.splitext(fn.lower())[1]
            full = os.path.join(dirpath, fn)
            try:
                if ext == ".png":
                    with Image.open(full) as img:
                        img.save(full, optimize=True, quality=70)
                    print(f"Processed: {full}")
                if ext == ".jpg" or ext == ".jpeg":
                    with Image.open(full) as img:
                        img.save(full, optimize=True, quality=80)
                    print(f"Processed: {full}")
                if ext == ".webp":
                    with Image.open(full) as img:
                        img.save(full, optimize=True, quality=85)
                    print(f"Processed: {full}")
                if ext == ".svg":
                    subprocess.run("svgo --eol lf --multipass --precision 2 --quiet \"" + full + "\"", shell=True, check=True)
                    print(f"Processed: {full}")
            except UnidentifiedImageError:
                print(f"Skipping unrecognized file: {full}")


def main():
    for y in range(2011, 2025):
        process_year(y)

if __name__ == "__main__":
    main()
