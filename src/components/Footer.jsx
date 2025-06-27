import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 p-4 text-center">
      © {new Date().getFullYear()} Paganelli.dev. All rights reserved.
    </footer>
  )
}

export default Footer