import { Link } from 'react-router-dom';
import './Header.scss'
const Header = () => {
    return (
      <div>   
<ul>
  
<li>
            <Link to='/' > home </Link>
        </li>
        <li>
           <Link to='/show'> Main </Link>   
        </li>

</ul>
      
      </div>
    )
};

export default Header;