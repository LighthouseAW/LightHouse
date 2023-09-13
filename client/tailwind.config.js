/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../public/images/LighthouseArt4.png')",
        'about': "url('../public/images/LightHouseArt2.png')",
        'projects': "url('../public/images/LighthouseArt3.png')",
        'mission': "url('../public/images/LightHouseArt1.png')",
        'rug': "url('../public/images/Rug3.png')"
      },
      colors: {
        color: 'white',
      },
    },
  },
  plugins: [],
}
