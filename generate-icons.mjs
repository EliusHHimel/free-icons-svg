import { readdir, writeFile } from "fs/promises";
import { join, basename } from "path";

const ICONS_DIR = join(process.cwd(), "icons"); // Adjust to your icons directory
const OUTPUT_FILE = join("index.ts");

async function generateExports() {
  try {
    // Get all .svg files in the directory
    const files = (await readdir(ICONS_DIR)).filter((file) =>
      file.endsWith(".svg")
    );

    // Generate export statements for each file
    const exports = files
      .map((file) => {
        const iconName = basename(file, ".svg"); // Extract the base name (without extension)
        return `export { default as ${iconName} } from './icons/${file}';`;
      })
      .join("\n");

    // Write the exports to the index.ts file
    await writeFile(OUTPUT_FILE, exports);
    console.log(`Generated exports in ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("Error generating exports:", err);
  }
}

// Run the script
generateExports();
