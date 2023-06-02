import '../index.css'
import { useDispatch } from 'react-redux'
import { changePage } from '../store/page';

function Navigation() {
  const dispatch = useDispatch();

  return (
    <>
        <div className="navbar-container bg-neutral-focus flex justify-between">
        <div className='navbar-content p-3'>
            <a href="/">favour-A-tism</a>
            <div className="dropdown">
                
                <button className="dropbtn">
                <i className='bx bx-chevron-down px-2'></i>Favourites
                </button>
                <div className="dropdown-content w-40 rounded-md p-3 bg-neutral-focus flex flex-col">
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('music'))}}
                >Music</a>
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('movie'))}}
                >Movies</a>
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('podcast'))}}
                >Podcasts</a>
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('musicVideo'))}}
                >Music Videos</a>
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('audiobook'))}}
                >Audiobooks</a>
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('tvShow'))}}
                >TV Shows</a>
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('software'))}}
                >Software</a>
                
                <a 
                href="/"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(changePage('ebook'))}}
                >eBooks</a>

                </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Navigation;
