import { Link } from 'react-router-dom'


const CustomNav = () => {
  return (
      <div className='hero'>
            <div className='navbar'>
                  <div className="nav-logo">
                        Southern Pro Roofing and Construction
                  </div>
                  <div className="nav-links">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/aboutUs'>About Us</Link>
                        <Link className='nav-link' to='/contactUs'>Contact Us</Link>
                  </div>
            </div>
            <div className='logo-container'>
                  <img className="logo" src="../public/Southern Pro Logo.jpg" alt="" />
            </div>
      </div>
  )
}

export default CustomNav