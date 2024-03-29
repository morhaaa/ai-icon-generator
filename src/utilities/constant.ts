export const colorList = [
  "#FFD700", // Yellow
  "#FFA500", // Orange
  "#FF1493", // Pink
  "#00FF00", // Green
  "#DDA0DD", // Purple
  "#00FFFF", // Cyan
  "#AFEEEE", // Light Blue
  "#FF4500", // Red-Orange
  "#800080", // Purple
  "#32CD32", // Lime Green
  "#1E90FF", // Dodger Blue
  "#FF69B4", // Hot Pink
  "#4682B4", // Steel Blue
];

export const colorListHome = [
  "#FFD700", // Yellow
  "#FF1493", // Pink
  "#00FF00", // Green
  "#00FFFF", // Cyan
];

export interface Icon {
  img: string;
  style: string;
}

export const icons: Icon[] = [
  { img: "metallic.jpg", style: "Metallic" },
  { img: "polygon.jpg", style: "Polygon" },
  { img: "pixelated.jpg", style: "Pixelated" },
  { img: "clay.jpg", style: "Clay" },
  { img: "neon.jpg", style: "Neon" },
  { img: "cartoonish.jpg", style: "Cartoonish" },
  { img: "3d.jpg", style: "3d" },
  { img: "doodle.jpg", style: "Doodle" },
  { img: "minimalistic.jpg", style: "Minimalistic" },
  { img: "sticker.jpg", style: "Sticker" },
  { img: "realistic.jpg", style: "Realistic" },
  { img: "origami.jpg", style: "Origami" },
  { img: "chalckboard.jpg", style: "Chalkboard" },
  { img: "woodcut.jpg", style: "Woodcut" },
];

export const iconsHome: Icon[] = [
  { img: "", style: "Metallic" },
  { img: "", style: "Polygon" },
  { img: "", style: "Pixelated" },
  { img: "", style: "Clay" },
  { img: "", style: "Gradient" },
];
export const imagesOptions = [1, 2, 3, 4, 5];

export const plans: Plan[] = [
  {
    price: 5,
    credits: 50,
    name: "50 credits",
    description: "0.10$ per image",
    id: "pr_50",
  },
  {
    price: 9,
    credits: 100,
    name: "100 credits",
    description: "0.09$ per image",
    id: "pr_100",
  },
  {
    price: 20,
    credits: 250,
    name: "250 credits",
    description: "0.08$ per image",
    id: "pr_250",
  },
];

export const footerLinks = [
  { href: "", text: "Terms & Conditions" },
  { href: "", text: "Privacy Policy" },
  { href: "", text: "Refound Policy" },
];
