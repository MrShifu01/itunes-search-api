import '../index.css'
import { useDispatch } from 'react-redux'
import { changePage } from '../store/page';
import { useState } from 'react';

function Navigation() {

// Declaring whether the drop down menu must be open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dispatch = useDispatch();

  return (
    <>
        
        {/* Navbar Container */}
        <div className="navbar-container bg-neutral-focus flex justify-between">
        <div className='navbar-content p-3'>
            
            {/* Logo/Home */}
            <div
            className='drop-item cursor-pointer'
            onClick={(e) => {
                e.preventDefault()
                dispatch(changePage('search'))}}
            >favour-A-tism</div>
            
            {/* Drop Down Menu */}
            <div className="dropdown">
                
                <button 
                className="dropbtn"
                onClick={() => setIsDropdownOpen(prev => !prev)}
                >
                <i className='bx bx-chevron-down px-2'></i>Favourites
                </button>
                <div className={`dropdown-content w-40 rounded-md p-3 bg-neutral-focus flex flex-col ${isDropdownOpen ? '' : 'hidden'}`}>
                
                <a
                className='drop-item' 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('music'))
                    setIsDropdownOpen(false)
                }}
                >Music</a>
                
                <a 
                className='drop-item'
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('movie'))
                    setIsDropdownOpen(false)
                }}
                >Movies</a>
                
                <a 
                className='drop-item'
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('podcast'))
                    setIsDropdownOpen(false)
                }}
                >Podcasts</a>
                
                <a 
                className='drop-item'
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('musicVideo'))
                    setIsDropdownOpen(false)
                }}
                >Music Videos</a>
                
                <a 
                className='drop-item'
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('audiobook'))
                    setIsDropdownOpen(false)
                }}
                >Audiobooks</a>
                
                <a 
                className='drop-item'
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('tvShow'))
                    setIsDropdownOpen(false)
                }}
                >TV Shows</a>
                
                <a 
                className='drop-item'
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('software'))
                    setIsDropdownOpen(false)
                }}
                >Software</a>
                
                <a 
                className='drop-item'
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('ebook'))
                    setIsDropdownOpen(false)
                }}
                >eBooks</a>

                </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Navigation;
