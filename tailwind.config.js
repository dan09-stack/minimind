/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft palette for parents and kids
        // Primary Yellow (Headers, Highlights)
        primary: {
          50:  '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082', // requested
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300', // darker for text accents
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        // Secondary Teal (Buttons, Footer)
        secondary: {
          50:  '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4', // requested
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#009688',
          600: '#00897B',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40',
        },
        // Tertiary Coral (Accent Buttons, Alerts)
        accent: {
          50:  '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCCBC',
          300: '#FFAB91', // requested
          400: '#FF8A65',
          500: '#FF7043',
          600: '#F4511E',
          700: '#E64A19',
          800: '#D84315',
          900: '#BF360C',
        },
        // Content Cards / Blocks
        card: '#BBDEFB',
        // Text colors
        textPrimary: '#424242',
        textSecondary: '#9E9E9E',
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        'comic': ['Comic Neue', 'cursive'],
        'kids': ['Fredoka One', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
  }
