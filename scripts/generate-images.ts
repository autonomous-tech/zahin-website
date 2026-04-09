import fs from "fs";
import path from "path";

const API_KEY = process.env.GEMINI_API_KEY || "";
const IMAGES_DIR = path.join(__dirname, "../public/images");

const prompts = [
  { filename: "hero-pakistan-tech.png", prompt: "Aerial view of Islamabad with subtle glowing neural network pathways of light connecting the modernist buildings, warm golden hour lighting, cinematic composition, photorealistic, slight film grain, green and gold color palette" },
  { filename: "crisis-data-streams.png", prompt: "Abstract visualization of a map of Pakistan with data streams flowing outward to distant servers in other countries, dark moody atmosphere, data visualization aesthetic, deep navy and red color palette, digital art style" },
  { filename: "why-pakistan-engineers.png", prompt: "Young Pakistani software engineers collaborating in a modern tech office in Karachi, warm natural light through large windows, diverse team, documentary photography style, warm color grading" },
  { filename: "vision-languages.png", prompt: "Abstract visualization of Urdu Nastaliq script characters and Sindhi text transforming into neural network nodes and connections, warm green and gold palette on dark background, digital art, flowing and organic composition" },
  { filename: "join-karachi-skyline.png", prompt: "Karachi skyline at sunset with geometric Islamic patterns overlaid as translucent architectural elements, warm terracotta and green tones, cinematic wide angle, photorealistic with artistic overlay" },
];

async function generateImage(prompt: string): Promise<Buffer> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ instances: [{ prompt }], parameters: { sampleCount: 1, aspectRatio: "16:9", outputOptions: { mimeType: "image/png" } } }),
    }
  );
  if (!response.ok) throw new Error(`Imagen API error: ${response.status} — ${await response.text()}`);
  const data = await response.json();
  return Buffer.from(data.predictions[0].bytesBase64Encoded, "base64");
}

async function main() {
  if (!API_KEY) { console.error("Set GEMINI_API_KEY environment variable"); process.exit(1); }
  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
  for (const { filename, prompt } of prompts) {
    const filepath = path.join(IMAGES_DIR, filename);
    if (fs.existsSync(filepath)) { console.log(`Skip ${filename}`); continue; }
    console.log(`Generating ${filename}...`);
    try {
      const buffer = await generateImage(prompt);
      fs.writeFileSync(filepath, buffer);
      console.log(`Saved ${filename} (${(buffer.length / 1024).toFixed(0)}KB)`);
    } catch (err) { console.error(`Failed ${filename}:`, err); }
  }
}

main();
