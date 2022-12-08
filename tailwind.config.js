/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    screens:{
      'mobile':'320px',
      'mobile-m':'375px',
      'mobile-l':'425px',
      'tablet':'768px',
      'lg':'1024px',
      'xl':'1280px',
      'sm':'640px',
      'md':'768px'
    },
    extend: {
      spacing:{
        '21px':'21px',
        '22px':'22px',
        '23px':'23px',
        '26px':'26px',
      },
      colors:{
        'drk01': "#1f2428",
        'drk00':"#24292e",
        'skin':"#f9826c"
      },
      gridTemplateColumns:{
         '32': 'repeat(32, minmax(0, 1fr))',
         'collayout':'40px minmax(100px,200px) 1fr',
         'mobilr-s-grid':'50px 1fr'
      },
      gridTemplateRows:{
        '32':'repeat(32,minmax(0,1fr)',
        'flaybout':'30px 1fr 30px',
        'windiv':'35px 1fr',
        'terminal':'35px 60% 40%',
      },
      gridColumn:{
        'span-32':'span 32/ span 32',
        'span-26':'span 26/ span 26'
      },
      gridRow:{
        'span-32':"span 32/ span 32",
        'span-30':"span 30/ span 30",
        'span-31':"span 31/ span 31",
        'span-26':'span 26/ span 26',
        'span-27':'span 27/ span 27',
        'span-28':'span 28/ span 28',
        'span-29':'span 29/ span 29',
      },
      borderWidth:{
        '1':'1px'
      },
      fontFamily:{
        'poppins':["Poppins","sans-serif"],
        'Enriqueta':["Enriqueta","sans-serif"],
        'urbanist':["Urbanist","sans-serif"],
        'varela':["Varela","sans-serif"],
        'roboto':["Roboto","sans-serif"],
        'cursive1':["Nothing You Could Do","sans-serif"],
      }
    },
  },
  plugins: [],
}
