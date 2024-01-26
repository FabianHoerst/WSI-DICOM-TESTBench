import argparse
import os
import subprocess
from pathlib import Path
from openslide import OpenSlide
import shutil

# check if metadata can be loaded
def slide_info(slide):
    print("Level count: %d" % slide.level_count)
    print("Level dimensions: " + str(slide.level_dimensions))
    print("Level downsamples: " + str(slide.level_downsamples))
    print("Dimensions: " + str(slide.dimensions))
    if "openslide.mpp-x" in slide.properties:
        slide_mpp = float(slide.properties.get("openslide.mpp-x"))
        print(f"MPP: {slide_mpp}")
    else:
        print("MPP not defined in metadata!")
    if "openslide.objective-power" in slide.properties:
        slide_mag = float(slide.properties.get("openslide.objective-power"))
        print(f"Magnification: {slide_mag}")
    else:
        print("Magnification not defined in metadata!")
    print("Associated images:")
    for ai_key in slide.associated_images.keys():
      print("  " + str(ai_key) + ": " + str(slide.associated_images.get(ai_key)))
    print("Properties:")
    for prop_key in slide.properties.keys():
        print("  Property: " + str(prop_key) + ", value: " + str(slide.properties.get(prop_key)))

def main():
    parser = argparse.ArgumentParser(description='CLI for input file path and preprocessing testing.')
    parser.add_argument('file_path', type=str, help='Path of the input file')
    parser.add_argument('--test_preprocessing', action='store_true', help='Whether to test preprocessing')

    args = parser.parse_args()

    input_file_path = Path(args.file_path).resolve()
    test_preprocessing = args.test_preprocessing

    print("\nTesting the file:")
    print(f"Input File Path: {input_file_path}")
    slide = OpenSlide(str(input_file_path.resolve()))
    slide_info(slide)
    
    if test_preprocessing:
        print("\n")
        print(60*"*")
        print("Starting file preprocessing to test if everything works fine")
        print("\n")
        print("\n")

        wsi_extraction_command = [
            'wsi_extraction',
            '--wsi_paths', str(input_file_path),
            '--output_path', './output_files/PathoPatcher/TMP-Test',
            '--wsi_extension', input_file_path.suffix[1:],
            '--patch_size', '1024',
            '--min_intersection_ratio', '0.05',
            '--target_mag', '5',
            '--overwrite',
            '--processes', '8',
            '--wsi_magnification', '40'
        ]
        try:
            subprocess.run(wsi_extraction_command, check=True)
        except subprocess.CalledProcessError as e:
            print(f"Error running wsi_extraction: {e}")


if __name__ == "__main__":
    main()
