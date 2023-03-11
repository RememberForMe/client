import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav className='drop-shadow-md bg-white'>
            <div className='w-11/12 md:w-9/12 m-auto flex h-14 items-center justify-between'>
                <div className='md:hidden'>
                    <FontAwesomeIcon icon={faBars} size='2x' className='cursor-pointer'/>
                </div>
                <div className='flex-1 hidden md:block'>
                    <Link to="/" className='font-bold text-xl'>Home</Link>
                </div>
                <div>
                    <img src="/logo.jpg" alt="avatar" className='w-12 h-12 object-cover rounded-full cursor-pointer'/>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;