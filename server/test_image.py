import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")
client = genai.Client(api_key=api_key)

try:
    print("Testing generate_content with nano-banana-pro-preview...")
    result = client.models.generate_content(
        model='nano-banana-pro-preview',
        contents='A cute cat in a cup'
    )
    print("Content generation successful:")
    print(result.text)
except Exception as e:
    print(f"Error: {e}")

try:
    print("\nTesting image generation with imagen-3.0-generate-001...")
    result = client.models.generate_images(
        model='imagen-3.0-generate-001',
        prompt='A cute cat in a cup',
        config=types.GenerateImagesConfig(
            number_of_images=1,
            output_mime_type="image/jpeg",
        )
    )
    print("Image generation successful with imagen 3.0!")
    for g in result.generated_images:
        print(len(g.image.image_bytes))
except Exception as e:
    print(f"Error: {e}")

