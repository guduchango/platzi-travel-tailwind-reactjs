/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: { 
      'sanFrancisco': "url('/sanFrancisco.jpg')", 
      'sanFranciscoDesktop': "url('/sanFranciscoDesktop.jpg')", 
      'yosemite': "url('/yosemite.jpg')", 
      'LA': "url('/LA.jpg')", 
      'seattle': "url('/seattle.jpg')", 
      'new_york': "url('/new_york.jpg')", 
      'norway': "url('/norway.jpg')", 
      'sydney': "url('/sydney.jpg')", 
      'miami': "url('/miami.jpg')", 
      'switzerland': "url('/switzerland.jpg')", 
      'bali': "url('/bali.jpg')", 
      'chicago': "url('/chicago.jpg')", 
      'europe': "url('/europe.jpg')", 
      'iceland': "url('/iceland.jpg')", }, 
      backgroundColor: theme =>(
        { ...theme('colors'), 
        'primary': '#CC2D4A', 
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', }), 
        textColor:
        { 'primary': '#CC2D4A', 
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', },
      fontFamily:{
        Montserrat: ['Montserrat','sans-serif']
      },
    },
    container: {
      center: true,
    },
  },
  assetsInclude: ['**/*.jpg'],
  plugins: [
  
  ],
}

