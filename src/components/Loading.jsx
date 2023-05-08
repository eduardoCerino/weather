import React from 'react'
import '../styles/loading.css'

/**
 * This is a React component that renders a loading spinner with a circle.
 * @returns A React functional component called `Loading` is being returned. It renders a div with
 * class name "loading-spinner" which contains another div with class name "loading-spinner__circle".
 * This is likely a loading spinner animation that can be used to indicate that content is being
 * loaded.
 */
const Loading = () => {

  
  return (
    <div className="loading-spinner">
     <div className="loading-spinner__circle"></div>
    </div>

  )
}

export default Loading