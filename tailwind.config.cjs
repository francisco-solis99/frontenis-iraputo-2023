/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo Narrow', 'system-ui', 'sans-serif'],
        audiowide: ['Audiowide', 'cursive']
      },
      colors: {
        tournment: {
          green: {
            100: '#00B960',
            200: '#00552C',
            300: '#1E573B'
          },
          yellow: {
            100: '#FFF394',
            200: '#FCE742',
            300: '#FFC700'
          },
          red: {
            100: '#E46976',
            200: '#FF5265'
          },
          dark: {
            100: '#191919'
          }
        }
      },
      animation: {
        'moving-background': 'moving-background 5s ease-in-out'
      },
      keyframes: {
        'moving-background': {
          '0%': {
            transform: 'translateY(0)',
            opacity: 0
          },
          '66%': {
            opacity: 0.4
          },
          '100%': {
            transform: 'translateY(-150px)',
            opacity: 0
          }
        }
      }
    }
  },
  plugins: []
};
