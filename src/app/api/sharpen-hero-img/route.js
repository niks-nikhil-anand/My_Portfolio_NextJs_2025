import sharp from "sharp";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  // Define image paths
  const images = [
    {
      input: path.resolve("./public/images/hero.jpg"),
      output: path.resolve(".//public/images/hero-sharp.jpg"),
    },
   
  ];

  try {
    // Log image paths for debugging
    console.log("Input and output paths for images:", images);

    // Process each image
    const results = await Promise.all(
      images.map(async ({ input, output }) => {
        try {
          console.log(`Processing image: ${input}`);
          await sharp(input).sharpen().toFile(output);
          console.log(`Image processed and saved to: ${output}`);

          // Return relative path for the output image
          return path.relative("./public", output);
        } catch (err) {
          console.error(`Error processing image: ${input}`, err);
          throw new Error(`Failed to process image: ${path.basename(input)}`);
        }
      })
    );

    console.log("All images processed successfully:", results);

    return NextResponse.json({
      message: "Images sharpened successfully!",
      images: results.map((result) => `/${result}`), // Format as relative URLs
    });
  } catch (error) {
    console.error("Error sharpening images:", error);
    return NextResponse.json(
      { error: error.message || "Failed to sharpen images" },
      { status: 500 }
    );
  }
}
