import React from 'react'

const Button = ({ onClick }) => {
  return (
<div class="rainbow relative z-0 bg-white/15 overflow-hidden p-15 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
          <button class="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur" onClick={() => onClick()}>
        Convert to PDF
    </button>
</div>
  )
}

export default Button