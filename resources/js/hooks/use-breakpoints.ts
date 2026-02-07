import { useMediaQuery } from "react-responsive";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const useMinSm = () => useMediaQuery({ minWidth: breakpoints.sm });
const useMinMd = () => useMediaQuery({ minWidth: breakpoints.md });
const useMinLg = () => useMediaQuery({ minWidth: breakpoints.lg });
const useMinXl = () => useMediaQuery({ minWidth: breakpoints.xl });

const useMaxXs = () => useMediaQuery({ maxWidth: breakpoints.sm - 1 });
const useMaxSm = () => useMediaQuery({ maxWidth: breakpoints.md - 1 });
const useMaxMd = () => useMediaQuery({ maxWidth: breakpoints.lg - 1 });
const useMaxLg = () => useMediaQuery({ maxWidth: breakpoints.xl - 1 });

export {
  breakpoints,
  useMaxLg,
  useMaxMd,
  useMaxSm,
  useMaxXs,
  useMinLg,
  useMinMd,
  useMinSm,
  useMinXl,
};
