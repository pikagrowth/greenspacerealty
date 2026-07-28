/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- This is the crucial addition enabling Dark Mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1F4D3A', // Deep forest green
          accent: '#C9A24B',  // Warm gold
          bg: '#FAF8F3',      // Soft ivory/off-white
          text: '#222420',    // Charcoal
          success: '#3E7B5C', // Sage green
          alert: '#B85C38',   // Muted terracotta
        }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};