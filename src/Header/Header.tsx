import {  NavLink } from 'react-router-dom';
import './Header.scss'
const Header = () => {

const navArray = [
  {
     path : '/home',
     name : 'Home',
  },
  {
    path : '/show',
    name : 'Main',
 }
];

const allLinks = navArray.map((linkObj: any)=>{
  return <li>
  <NavLink to={linkObj.path} className={({isActive})=>{

   return isActive ? "active-class" : '';

       }}> {linkObj.name} </NavLink>
</li>
})

    return (
      <div>   
<ul>
  
   {allLinks}

</ul>
      
      </div>
    )
};

export default Header;