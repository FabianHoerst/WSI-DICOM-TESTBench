# helper functions
import os

def get_file_size_in_mb(file_path):
    # Get the size of the file in bytes
    file_size_bytes = os.path.getsize(file_path)

    # Convert bytes to megabytes
    file_size_mb = file_size_bytes / (1024 * 1024)

    return file_size_mb

def remove_file(file_path):
    try:
        os.remove(file_path)
        print(f"File removed: {file_path}")
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"Error removing file {file_path}: {str(e)}")

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