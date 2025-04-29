module.exports = {
    theme: {
      extend: {
        keyframes: {
          'scale-in': {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        animation: {
          'scale-in': 'scale-in 0.4s ease-out forwards',
        },
      },
    },
  }
  