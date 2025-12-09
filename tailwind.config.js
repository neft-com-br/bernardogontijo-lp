/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#4DA9FF', // Changed from green to a lighter blue
        dark: {
          bg: '#1A1A1A',
          text: '#F5F5F5'
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora': 'aurora 60s linear infinite',
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": {
      ...newVars,
      "--background": "240 10% 3.9%",
      "--foreground": "0 0% 98%",
      "--muted": "240 3.7% 15.9%",
      "--muted-foreground": "240 5% 64.9%",
    },
  });
}

// Helper function to flatten the color palette
function flattenColorPalette(colors) {
  const result = {};
  
  const flatten = (obj, prefix = '') => {
    for (const key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'string') {
        result[newKey] = value;
      } else {
        flatten(value, newKey);
      }
    }
  };
  
  flatten(colors);
  return result;
}