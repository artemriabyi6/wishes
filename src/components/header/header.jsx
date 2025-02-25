import { NavLink } from 'react-router-dom'
import './header.css'
import hotMode from '../../assets/sexual-act.svg'
import regularMode from '../../assets/lovers.svg'


const Header = (props) => {

    const changeMode = () => {
        props.setMode(prev => !prev)
        console.log(props.mode)
    }

    return ( 
        <>
        <header>
            <nav className='flex items-center justify-between w-full'>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/'>Plans</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/done'>Done activity</NavLink>
                <button className='mode-btn' onClick={changeMode}>
                    {props.mode 
                    ?  <img className='hot-mode' src={hotMode} alt="Hot mode" /> 
                    : <img className='hot-mode' src={regularMode} alt="Regular mode"/> 
                    }
                </button>
            </nav>
        </header>
        </>
     );
}
 
export default Header;