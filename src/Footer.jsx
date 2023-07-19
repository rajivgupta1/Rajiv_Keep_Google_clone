import React from 'react'


const Footers = () => {
  const year = new Date().getFullYear();

  return (
    <div>
        <footer className='footer'>
            <h1>Copy Right- Rajiv Gupta {year}</h1>
        </footer>
    </div>
  )
}

export default Footers;