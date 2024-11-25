export const pixelToViewPortWidth = (size: number, maxWidth = 1440) =>
  `${(size / maxWidth) * 100}vw`;

const deviceSizes = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const devices = {
  mobile: `(max-width: ${deviceSizes.mobile})`,
  tablet: `(max-width: ${deviceSizes.tablet})`,
  desktop: `(min-width: ${deviceSizes.desktop})`,
};
