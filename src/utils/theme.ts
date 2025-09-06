import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Normalize function for responsive sizing based on screen width
const normalize = (size: number): number => {
  const scale = SCREEN_WIDTH / 375; // Base width (iPhone X/11/12/13/14)
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Color palette for AstroCulture app
export const colors = {
  // Primary colors - Space/Astronomy theme
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9", // Main primary
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },

  // Secondary colors - Cosmic purple
  secondary: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7", // Main secondary
    600: "#9333ea",
    700: "#7c3aed",
    800: "#6b21a8",
    900: "#581c87",
  },

  // Accent colors - Stellar gold
  accent: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  // Neutral colors
  neutral: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },

  // Semantic colors
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },

  // Common colors
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",

  // Dark theme colors
  dark: {
    background: "#0f172a",
    surface: "#1e293b",
    card: "#334155",
    text: "#f8fafc",
    textSecondary: "#cbd5e1",
    border: "#475569",
  },

  // Light theme colors
  light: {
    background: "#ffffff",
    surface: "#f8fafc",
    card: "#ffffff",
    text: "#0f172a",
    textSecondary: "#64748b",
    border: "#e2e8f0",
  },
};

// Typography scale
export const typography = {
  // Font sizes using normalize function
  fontSize: {
    xs: normalize(12),
    sm: normalize(14),
    base: normalize(16),
    lg: normalize(18),
    xl: normalize(20),
    "2xl": normalize(24),
    "3xl": normalize(30),
    "4xl": normalize(36),
    "5xl": normalize(48),
    "6xl": normalize(60),
  },

  // Font weights
  fontWeight: {
    light: "300" as const,
    normal: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
    extrabold: "800" as const,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 3,
  },
};

// Spacing scale
export const spacing = {
  xs: normalize(4),
  sm: normalize(8),
  md: normalize(16),
  lg: normalize(24),
  xl: normalize(32),
  "2xl": normalize(48),
  "3xl": normalize(64),
  "4xl": normalize(96),
};

// Border radius
export const borderRadius = {
  none: 0,
  sm: normalize(4),
  md: normalize(8),
  lg: normalize(12),
  xl: normalize(16),
  "2xl": normalize(24),
  full: 9999,
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: colors.neutral[900],
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: colors.neutral[900],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  lg: {
    shadowColor: colors.neutral[900],
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  },
  xl: {
    shadowColor: colors.neutral[900],
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 8,
  },
};

// Theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  normalize,
};

// Export individual utilities
export { normalize };

// Default export
export default theme;
