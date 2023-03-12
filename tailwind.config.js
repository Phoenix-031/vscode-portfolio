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
      boxShadow:{
        'sh1' :' rgba(50, 50, 93, 0.25) 0px 10px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -70px',
        'sh2' : 'box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)'
      },
      backgroundImage:{
        'bcol01':'linear-gradient(to left, rgb(249, 115, 22), rgb(253, 224, 71))',
        'bcol01-right':'linear-gradient(to right, rgb(249, 115, 22), rgb(253, 224, 71))',
        'bcol02': 'linear-gradient(to right, rgb(251, 146, 60), rgb(251, 113, 133))',
        'bcol03':'linear-gradient(to left bottom, rgb(251, 113, 133), rgb(253, 186, 116))',
        'bcol04': 'linear-gradient(to left, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
        'bcol05': 'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
        'bcol06': 'linear-gradient(to right, rgb(153, 27, 27), rgb(202, 138, 4), rgb(234, 179, 8))'
      },
      spacing:{
        '21px':'21px',
        '22px':'22px',
        '23px':'23px',
        '26px':'26px',
        '1px':'1px',
        '1.2px':'1.2px',
      },
      colors:{
        'drk01': "#1f2428",
        'drk00':"#24292e",
        'gry01' : '#3a435b',
        'skin':"#f9826c",
        'gr1' : '#52a911',
        "blur":"#101016",
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
