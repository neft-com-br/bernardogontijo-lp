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
      fontFamily: {
        display: ['Cormorant', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        noir: {
          deep: '#050505',
          surface: '#0c0c0c',
          card: '#111111',
          border: '#1c1c1c',
          'border-hover': '#2a2a2a',
        },
        cream: {
          DEFAULT: '#e5ddd0',
          muted: '#7a7368',
          faint: '#4a453e',
        },
        gold: {
          DEFAULT: '#c8a04c',
          hover: '#dab35a',
          muted: 'rgba(200, 160, 76, 0.15)',
        },
        // keep old 'primary' alias for anything not yet migrated
        primary: '#c8a04c',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'line-grow': 'lineGrow 0.8s ease-out forwards',
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': {
      ...newVars,
      '--background': '0 0% 2%',
      '--foreground': '36 18% 87%',
      '--muted': '0 0% 10%',
      '--muted-foreground': '30 6% 47%',
    },
  });
}

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
