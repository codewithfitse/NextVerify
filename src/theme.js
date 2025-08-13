// Theme utility function to set colors at runtime
function hexToHsl(hex) {
  let clean = hex.replace("#", "");
  if (clean.length === 3)
    clean = clean
      .split("")
      .map((c) => c + c)
      .join("");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  const d = max - min;

  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = ((g - b) / d) % 6;
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export function setThemeColors(
  { primary, secondary, accent, accentDark },
  mode = "light"
) {
  const root = document.documentElement;

  // Convert hex colors to HSL
  const primaryHsl = hexToHsl(primary);
  const secondaryHsl = hexToHsl(secondary);
  const accentHsl = hexToHsl(accent);
  const accentDarkHsl = accentDark
    ? hexToHsl(accentDark)
    : {
        h: accentHsl.h,
        s: accentHsl.s,
        l: clamp(accentHsl.l - 15, 0, 100),
      };

  // Set the four main colors
  root.style.setProperty(
    "--primary",
    `${primaryHsl.h} ${primaryHsl.s}% ${primaryHsl.l}%`
  );
  root.style.setProperty(
    "--secondary",
    `${secondaryHsl.h} ${secondaryHsl.s}% ${secondaryHsl.l}%`
  );
  root.style.setProperty(
    "--accent",
    `${accentHsl.h} ${accentHsl.s}% ${accentHsl.l}%`
  );
  root.style.setProperty(
    "--accent-dark",
    `${accentDarkHsl.h} ${accentDarkHsl.s}% ${accentDarkHsl.l}%`
  );

  // Set foreground colors based on the primary color
  if (mode === "light") {
    root.style.setProperty(
      "--primary-foreground",
      `${primaryHsl.h} ${primaryHsl.s}% ${clamp(100 - primaryHsl.l, 0, 100)}%`
    );
    root.style.setProperty(
      "--secondary-foreground",
      `${secondaryHsl.h} ${secondaryHsl.s}% ${clamp(
        100 - secondaryHsl.l,
        0,
        100
      )}%`
    );
    root.style.setProperty(
      "--accent-foreground",
      `${accentHsl.h} ${accentHsl.s}% ${clamp(100 - accentHsl.l, 0, 100)}%`
    );
  } else {
    root.style.setProperty(
      "--primary-foreground",
      `${primaryHsl.h} ${primaryHsl.s}% ${clamp(100 - primaryHsl.l, 0, 100)}%`
    );
    root.style.setProperty(
      "--secondary-foreground",
      `${secondaryHsl.h} ${secondaryHsl.s}% ${clamp(
        100 - secondaryHsl.l,
        0,
        100
      )}%`
    );
    root.style.setProperty(
      "--accent-foreground",
      `${accentHsl.h} ${accentHsl.s}% ${clamp(100 - accentHsl.l, 0, 100)}%`
    );
  }

  // Set ring color to accent
  root.style.setProperty(
    "--ring",
    `${accentHsl.h} ${accentHsl.s}% ${accentHsl.l}%`
  );

  console.log("Theme colors updated:", {
    primary,
    secondary,
    accent,
    accentDark,
  });
}

// Example usage:
// setThemeColors({
//   primary: '#ffffff',
//   secondary: '#000000',
//   accent: '#ffd700',
//   accentDark: '#b8860b'
// }, 'light');
