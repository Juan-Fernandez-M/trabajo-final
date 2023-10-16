import { Link } from 'react-router-dom';
import SearchForm from './Search';


const Header = () => {
    return (
        <header className="header-movile">
            <img className="logo" src={logo} alt="Logo" />
            <ul className="menu-header">
                <li><Link to="/" className='links'>About us</Link></li>
                <li><Link to="/products" className='links'>Products</Link></li>
                <li><Link to="/user/registro" target="_self" className='links'>Register</Link></li>
                <li><Link to="/" className='links'>Contact us</Link></li>
            </ul>
            <SearchForm/>
        </header>
        );
    };

export default Header;