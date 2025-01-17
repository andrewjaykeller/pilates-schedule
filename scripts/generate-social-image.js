const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");

async function generateSocialImage() {
  // Create canvas with social media image dimensions
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext("2d");

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, "#fce7f3");
  gradient.addColorStop(1, "#ccfbf1");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  // Add title
  ctx.font = "bold 72px system-ui, -apple-system";
  ctx.fillStyle = "#1f2937";
  ctx.textAlign = "center";
  ctx.fillText("Free Pilates with AJ", 600, 300);

  // Add subtitle
  ctx.font = "36px system-ui, -apple-system";
  ctx.fillStyle = "#4b5563";
  ctx.fillText("Join our mindful movement practice", 600, 380);

  // Save the image
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(__dirname, "../public/social-share.png"), buffer);
  console.log("Social share image generated successfully!");
}

generateSocialImage().catch(console.error);
