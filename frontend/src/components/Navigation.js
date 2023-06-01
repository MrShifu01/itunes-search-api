import '../index.css'
import { useDispatch } from 'react-redux'
import { changeMedia } from '../store/media'


function Navigation() {

    const dispatch = useDispatch()

  return (
    <>
        <div className='navbar__container bg-neutral'>
            <nav className='navbar__content text-neutral-content'>
                <div 
                className='logo m-3 text-xl cursor-pointer'
                onClick={() => dispatch(changeMedia("home"))}
                >
                    Fouvour-A-tism
                </div>
                <ul className='nav-list flex'>

                    <li 
                    className='m-3 cursor-pointer'
                    >
                        About
                    </li>

                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navigation