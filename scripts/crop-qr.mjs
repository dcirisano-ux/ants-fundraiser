import sharp from "sharp";

// The screenshot is 1290x2796 (3x iPhone resolution)
// QR code area is roughly: x=150, y=900, width=990, height=1100 (includes QR + venmo logo)
const input = "./public/images/venmo-qr.png";
const output = "./public/images/venmo-qr-cropped.png";

await sharp(input)
  .extract({ left: 130, top: 850, width: 1030, height: 1150 })
  .png()
  .toFile(output);

console.log("Cropped QR code saved to", output);
