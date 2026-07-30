/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Light mode palette (Original)
          primary: '#1F4D3A', // Deep forest green
          accent: '#C9A24B',  // Warm gold
          bg: '#FAF8F3',      // Soft ivory/off-white
          text: '#222420',    // Charcoal
          success: '#3E7B5C', // Sage green
          alert: '#B85C38',   // Muted terracotta

          // Dark mode palette (New)
          primaryDark: '#4F9672', // Brighter, softer forest green for dark bg legibility
          accentDark: '#D4B76A',  // Brighter warm gold for higher contrast
          bgDark: '#111412',      // Deep, near-black greenish-charcoal
          textDark: '#E4E6E3',    // Soft light gray/off-white
          successDark: '#4F9E75', // Vibrant sage green
          alertDark: '#CC6C47',   // Brighter terracotta
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