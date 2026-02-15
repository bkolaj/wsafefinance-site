export const brandAssets = {
  light: {
    headerLogo: "/photos/light/logo_full_poziom_2000px (3).png",
    mark: "/photos/light/logo_sygnet_2000px (3).png",
    shortLogo: "/photos/light/logo_short_2000px (3).png",
    fullLogo: "/photos/light/logo_full_2000px (3).png",
  },
  dark: {
    headerLogo: "/photos/dark/logo_full_poziom_2000px (1).png",
    mark: "/photos/dark/logo_sygnet_2000px (1).png",
    shortLogo: "/photos/dark/logo_short_2000px (1).png",
    fullLogo: "/photos/dark/logo_full_2000px (1).png",
  },
} as const;

export function assetUrl(path: string) {
  return encodeURI(path);
}

