/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'xsm':{'max':'420px'},
        'small':{'max':'928px'},
        'vsmall':{'max':'772px'},
        'medium':{'max':'1180px'}
      },
      backgroundColor:{
        'greytrans':'#00000080'
      }
    },
  },
  plugins: [],
}

