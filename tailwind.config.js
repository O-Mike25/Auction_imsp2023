import themeSwapper from "tailwindcss-theme-swapper";
import {
  orange,
  green,
  yellow,
  black,
  red,
  lime,
  emerald,
  neutral,
} from "tailwindcss/colors";

const lightTheme = {
  backgroundColor: {
    DEFAULT: "#F8F1ED", // Light beige background
    primary: "#E57250", // Coral primary color
    secondary: "#FFFFFF", // White secondary color
    accent: emerald[200], // Lighter shade of emerald as accent
    muted: "#e5e7eb", // Lighter shade of orange as muted

    input: "#F0F0F0", // Light gray for input backgrounds
    contrast: red[900], // Dark red for high contrast elements
  },
  textColor: {
    DEFAULT: "#201C1A", // Dark brown text color
    primary: "#201C1A", // Dark brown text color
    secondary: "#201C1A", // Dark brown text color
    accent: "#201C1A", // Dark brown text color
    muted: red[900], // Dark red text color for muted elements

    tooltip: "#000000", // Black text for tooltips
    contrast: yellow[300], // Lighter shade of yellow for contrast text
  },
  borderColor: {
    //DEFAULT: red[200],    // Red border color
    tab: red[100], // Red border color for tabs
    active: red[700], // Darker red for active elements
    inactive: yellow[300], // Lighter shade of yellow for inactive elements
  },
  ringColor: {
    DEFAULT: red[400], // Red ring color
  },
  boxShadowColor: {
    DEFAULT: orange[500], // Orange box shadow color
  },
};

const darkTheme = {
  backgroundColor: {
    DEFAULT: "#121212", // Dark gray background
    primary: "#E57250", // Coral primary color
    secondary: "#0D2A31", // Dark blue secondary color
    accent: "#70f5d6", // Light blue as accent
    muted: "#0D2A31", // Brownish muted color

    input: "#101010", // Dark gray for input backgrounds
    contrast: yellow[300], // Lighter shade of yellow for high contrast elements
  },
  textColor: {
    DEFAULT: "#FAFAFA", // Off-white text color
    primary: "#FAFAFA", // Off-white text color
    secondary: "#FAFAFA", // Off-white text color
    accent: "#FAFAFA", // Off-white text color
    tertiary: "#FAFAFA", // Off-white text color
    muted: "#FAFAFA", // Off-white text color for muted elements

    tooltip: "#000000", // Black text for tooltips
    contrast: red[900], // Dark red text color for contrast elements
  },
  borderColor: {
    //DEFAULT: red[900],    // Dark red border color
    tab: yellow[100], // Yellow border color for tabs
    active: yellow[300], // Lighter shade of yellow for active elements
    inactive: red[900], // Dark red border color for inactive elements
  },
  ringColor: {
    DEFAULT: yellow[400], // Yellow ring color
  },
  boxShadowColor: {
    DEFAULT: orange[500], // Orange box shadow color
  },
};

// const lightTheme = {
//   backgroundColor: {
//     DEFAULT: "#f6e9e4",
//     primary: "#d8572a",
//     secondary: "#FFFFFF",
//     accent: emerald[100],
//     muted: orange[100],

//     input: neutral[100],
//     contrast: red[900],
//   },
//   textColor: {
//     DEFAULT: "#0f0805",
//     primary: "#0f0805",
//     secondary: "#0f0805",
//     accent: "#0f0805",
//     muted: red[900],

//     tooltip: black,
//     contrast: yellow[200],
//   },
//   borderColor: {
//     DEFAULT: red[500],
//     tab: red[500],
//     active: red[700],
//     inactive: yellow[200],
//   },
//   ringColor: {
//     DEFAULT: red[400],
//   },
//   boxShadowColor: {
//     DEFAULT: orange[700],
//   },
// };

// const darkTheme = {
//   backgroundColor: {
//     DEFAULT: "#050505",
//     primary: "#d8572a",
//     secondary: "#061b23",
//     accent: "#70f5d6",
//     muted: "#D88D72",

//     input: neutral[900],
//     contrast: yellow[200],
//   },
//   textColor: {
//     DEFAULT: "fafafa",
//     primary: "fafafa",
//     secondary: "fafafa",
//     accent: "fafafa",
//     tertiary: "fafafa",
//     muted: "fafafa",

//     tooltip: black,
//     contrast: red[900],
//   },
//   boxShadowColor: {
//     DEFAULT: orange[300],
//   },
//   borderColor: {
//     DEFAULT: red[900],
//     tab: yellow[400],
//     active: yellow[200],
//     inactive: red[900],
//   },
//   ringColor: {
//     DEFAULT: yellow[400],
//   },
// };

/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
  "./index.html",
  "./ui/**/*.{ts,tsx}",
  "./feature/**/*.{ts,tsx}",
  "./layout/**/*.{ts,tsx}",
  "./demo/**/*.{ts,tsx}",
  "./form/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      "spin-slow": "spin 3s linear infinite",
    },
    boxShadow: {
      card: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    },
  },
};
export const plugins = [
  require("tailwindcss-animate"),
  require("tailwindcss-radix")(),
  themeSwapper({
    themes: [
      {
        name: "base",
        selectors: [".light"],
        mediaQuery: "@media (prefers-color-scheme: light)",
        theme: lightTheme,
      },
      {
        name: "dark",
        selectors: [".dark"],
        mediaQuery: "@media (prefers-color-scheme: dark)",
        theme: darkTheme,
      },
    ],
  }),
];
