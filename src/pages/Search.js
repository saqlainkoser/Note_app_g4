import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Note from '../components/Note.js'

function Search() {
  return (
    <>
      <Navbar/>
        <div className="flex items-center justify-end pr-4 pt-4">
            <input type="text" className='inputBox !w-[370px] !p-[5px]' placeholder='Search Notes'/>
        </div>
        
        <div className="gridItems">
            <Note/>
        </div>


      <Footer/>
    </>
  )
}

export default Search
