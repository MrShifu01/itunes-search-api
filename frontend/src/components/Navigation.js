import '../index.css'
import { useDispatch } from 'react-redux'
import { changeMedia } from '../store/media'

function Navigation() {
  const dispatch = useDispatch();

  return (
    <>
        <div class="navbar__container">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div class="dropdown">
            <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
        </div>
        </div>
    </>
  );
}

export default Navigation;
