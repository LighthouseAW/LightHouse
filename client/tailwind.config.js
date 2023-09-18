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
        'car1': "url('../public/carousel/Carousel1.jpeg')",
        'car2': "url('../public/carousel/Carousel4.jpeg')",
        'car3': "url('../public/carousel/Carousel2.jpeg')",
        'car4': "url('../public/carousel/Carousel5.jpeg')",
        'staffPic': "url('../public/images/staff.jpeg')",
        'rug': "url('../public/images/Rug3.png')",
        'rug': "url('../public/images/Rug3.png')",
        'rug': "url('../public/images/Rug3.png')"
      },
      colors: {
        color: 'white',
      },
    },
  },
  plugins: [],
}
