/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "principal-font": ['Lato', "sans-serif"]
      },
      backgroundImage: {
        'clear-day': "url('/images/bgImages/clear-sky.jpg')",
        'clear-night': "url('/images/bgImages/Nclear-sky.jpg')",
        'few-clouds': "url('/images/bgImages/few-clouds.jpg')",
        'few-clouds-night' : "url('/images/bgImages/Nfew-clouds.jpg')",
        'scattered-clouds' : "url(/images/bgImages/scatterd-clouds.jpg)",
        'scattered-clouds-night' : "url(/images/bgImages/Nscatterd-clouds.jpg)",
        'broken-clouds' : "url(/images/bgImages/Nbroken-clouds.jpg)",
        'broken-clouds-night' : "url(/images/bgImages/Nbroken-clouds.jpg)",
        'shower-rain': "url(/images/bgImages/shower-rain.jpg)",
        'shower-rain-night': "url(/images/bgImages/shower-rain.jpg)",
        'rain' : "url(/images/bgImages/rain.jpg)",
        'rain-night' : "url(/images/bgImages/Nrain.jpg)",
        'thunderstorm' : "url(/images/bgImages/thunderstorm.jpg)",
        'thunderstorm-night' : "url(/images/bgImages/Nthunderstorm.jpg)",
        'snow' : "url(/images/bgImages/snow.jpg)",
        'snow-night' : "url(/images/bgImages/Nsnow.jpg)",
        'mist' : "url(/images/bgImages/mist.jpg)",
        'mist-night' : "url(/images/bgImages/mist.jpg)"
      }
    },
  },
  plugins: [],
}

