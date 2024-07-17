/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        'inset' : 'inset 0 0 25px 0 rgb(255, 255, 255, 0.07)',
        'input-in': '3px 3px 5px 1px rgb(0, 0, 0,  0.5), -1px -1px 1px 1px rgb(255, 255, 255, .5),inset 5px 3px 3px 1px rgb(0, 0, 0, 0.5), inset 0 1px 3px 1px rgba(255, 255, 255, .5)',
        'input-out': '3px 3px 5px 1px rgb(0, 0, 0,  0.5), -1px -1px 1px 1px rgb(255, 255, 255, .5),inset 0 0 25px 0 rgb(255, 255, 255, 0.1)',
        'button-up': '3px 3px 5px 1px rgb(0, 0, 0,  0.5), -1px -1px 1px 1px rgb(255, 255, 255, .5),inset 0 0 25px 0 rgb(255, 255, 255, 0.1)',
        'button-down': 'inset 3px 3px 5px 1px rgb(0, 0, 0, 0.5), inset 0 1px 1px 1px rgba(255, 255, 255, .5)',
      },
      dropShadow:{
        underline: '0 3px 0px rgb(0,0,0,0.1)',
        standard: '5px 5px 3px rgb(0 0 0 / 0.3)',
        scaled: '10px 15px 3px rgb(0 0 0 / 0.3)',
      },
      width: {
        full: '100%',
        half: '50%',
        quarter: '25%'
      },
      height:{
        full: '100%',
        half: '50%',
        quarter: '25%'
      },
      colors:{
        'dark-grey':'#1B1F22'
      },
      animation:{
        'button-press': 'button-press .05s ease both',
        'image-loading': 'img-loading 1s ease infinite',
        'image-loaded': 'img-loaded .5s ease .2s forwards',
        'modal-open': 'modal-open .25s ease forwards',
        'modal-scale-open': 'modal-scale-open .25s ease forwards',
        'modal-close-up': 'modal-close-up .25s ease forwards',
        'modal-close-down': 'modal-close-down .25s ease forwards',
        'modal-close-right': 'modal-close-right .25s ease forwards',
        'modal-close-left': 'modal-close-left .25s ease forwards',
        'modal-scale-close': 'modal-scale-close .25s ease forwards',
        'input-valid': 'input-valid .25s ease-in-out both',
        'hide-drawer': 'hide-drawer .25s ease-in-out forwards',
        'add-indicator': 'add-indicator .25s ease forwards',
        'remove-indicator': 'remove-indicator .25s ease forwards',
        
      },

      backgroundImage: {
        'main-gradient':'linear-gradient(to right, #ee0979, #ff6a00)',
        'glass':'linear-gradient(135deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5), rgba(255, 255, 255, .1)',
      },

      keyframes:{

        'img-out':{
          '0%': { display:'block', transform: 'scale(0)' },
          '100%': {transform: 'scale(1)'},
        },
        'img-loading':{
          '0%': {opacity: '60%'},
          '100%': {opacity: '75%'},
        },
        'img-loaded':{
          '0%': {opacity: '0%'},
          '20%': {opacity: '20%'},
          '40%': {opacity: '40%'},
          '60%': {opacity: '60%'},
          '80%': {opacity: '80%'},
          '100%': {opacity: '85%'},
        },

        'label-out': {
          '0%':{display:'inline', left: '1rem' },
          '100%':{ bottom: '2rem', left: '0' },
        },
        
        'label-back': {
          '0%':{ bottom: '2rem', left: '0' },
          '100%':{ bottom: '0', left: '1rem' },
        },
        
        'modal-open':{
          '0%': { 
            display:'block',
            opacity: '0%', 
          },
          '50%': { 
            opacity: '50%', 
            
          },
          '100%':{ 
            opacity: '100%', 
            transform: 'translate(0, 0)'
          }
        },
        
        'modal-scale-open':{
          '0%': { 
            display:'block',
            opacity: '0%', 
            transform: 'scale(0)'
          },
          '100%':{ 
            opacity: '100%',
            transform: 'scale(1)'
          }
        },
        
        'modal-close-up':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(0, -2rem)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(0, -4rem)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(0, -5rem)',
            display: 'none',
          }
        },
        'modal-close-down':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(0, 2rem)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(0, 4rem)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(0, 5rem)',
            display: 'none',
          }
        },
        'modal-close-left':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(2rem, 0)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(4rem, 0)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(5rem, 0)',
            display: 'none',
          }
        },
        'modal-close-right':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(-2rem, 0)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(-4rem, 0)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(-5rem, 0)',
            display: 'none',
          }
        },
        'modal-scale-close':{
          '0%': { 
            transform: 'scale(1)',
            opacity: '100%'
          },
          '100%':{ 
            transform: 'scale(0)',
            opacity: '0%',
            display: 'none',
          }
        },

        'hide-drawer': {
          '100%': {
            visibility: 'hidden'
          },
        },
        
        'intro-open': {
          '0%': { height: '0vh' },
          '20%': { height: '1vh' },
          '40%': { height: '1vh' },
          '60%': { height: '2vh' },
          '80%': { height: '3vh' },
          '100%': { height: 'fit-content' }
        },
        
        'intro-close': {
          '0%': { height: 'fit-content' },
          '20%': { height: '3vh' },
          '40%': { height: '2vh' },
          '60%': { height: '1vh' },
          '80%': { height: '1vh' },
          '100%': { height: '0vh' },
        },
        'add-indicator': {
          '0%': { width: '0' },
          '25%': { width: '25%' },
          '50%': { width: '50%' },
          '75%': { width: '75%' },
          '100%':{ width: '100%' }
        },
        'remove-indicator': {
          '0%': { width: '100%' },
          '25%': { width: '75%' },
          '50%': { width: '50%' },
          '75%': { width: '25%' },
          '100%':{ width: '0%' }
        },
      }
    },
  },
  plugins: [],
}
