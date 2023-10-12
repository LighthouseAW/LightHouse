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
        'staffPic': "url('../public/images/staff.jpeg')",
        'rug': "url('../public/images/newBreak8.png')",
        'band': "url('../public/images/croper.jpeg')",
        'beaLight': "url('../public/images/beaLight.jpeg')",
        'projectsBreak': "url('../public/images/projectsBreak.jpeg')",
        'projBreak2': "url('../public/images/projBreak2.jpeg')",
        'SOFCall': "url('../public/images/SOFCall.jpeg')",
        'CoreValues': "url('../public/images/CoreValues.jpeg')",
        'aboutBreak2': "url('../public/images/aboutBreak22.jpeg')",
        'car1': "url('../public/carousel/Carousel1.jpeg')",
        'car2': "url('../public/carousel/Carousel4.jpeg')",
        'car3': "url('../public/carousel/meetingNeed.jpeg')",
        'car4': "url('../public/carousel/Carousel5.jpeg')"
      },
      colors: {
        color: 'white',
      },
    },
  },
  plugins: [],
}
