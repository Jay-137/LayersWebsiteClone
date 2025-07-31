/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'medium':{'max':'1180px'},
        'small':{'max':'928px'},
        'vsmall':{'max':'772px'},
        'xsm':{'max':'420px'}
      },
      backgroundColor:{
        'greytrans':'#00000080'
      }
    },
  },
  plugins: [],
}

