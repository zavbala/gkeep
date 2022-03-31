export const APP_NAME = "Kepp";

export const URI =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://kepp.vercel.app";

export const BUTTONS = [
  "notifications",
  "person_add",
  "palette",
  "image",
  "archive",
  "more_vert",
  "undo",
  "redo",
];

export const PALETTE = {
  light: {
    default: "bg-white",
    froly: "bg-froly",
    "selective-yellow": "bg-selective-yellow",
    "paris-daisy": "bg-paris-daisy",
    reef: "bg-reef",
    "aero-blue": "bg-aero-blue",
    "humming-bird": "bg-humming-bird",
    sail: "bg-sail",
    mauve: "bg-mauve",
    "ping-pink": "bg-ping-pink",
    cashmere: "bg-cashmere",
    "athens-gray": "bg-athens-gray",
  },
  dark: {
    default: "bg-shark",
    froly: "bg-buccaneer",
    "selective-yellow": "bg-west-coast",
    "paris-daisy": "bg-himalaya",
    reef: "bg-thatch-green",
    "aero-blue": "bg-green-pea",
    "humming-bird": "bg-casal",
    sail: "bg-cello",
    mauve: "bg-jacarta",
    "ping-pink": "bg-tawny-port",
    cashmere: "bg-metallic-bronze",
    "athens-gray": "bg-mako",
  },
};
