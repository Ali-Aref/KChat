export const breakpoints = {
  xs: 0, // Extra small devices (phones, etc.)
  sm: 480, // Small devices (larger phones)
  md: 768, // Medium devices (tablets, small laptops)
  lg: 1024, // Large devices (laptops, desktops)
  xl: 1280, // Extra large devices (large desktops, monitors)
  superLarge: 1600, // Ultra-wide monitors
  tvLike: 1920, // TV-like screens or very large monitors
} as const;

export type Breakpoints = typeof breakpoints;
