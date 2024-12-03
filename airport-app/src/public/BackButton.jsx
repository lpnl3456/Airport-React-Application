import React from 'react'

const BackButton = ({onClick}) => {
  return (
    <button
      className="backButton"
      onClick={onClick}
    >
    Return
    </button>
  )
}

export default BackButton