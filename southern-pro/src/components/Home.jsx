import Services from "./Services"; 
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Contact from "./Contact";

const Home = () => {
  return (
      <div className="home-container">
            <div className='logo-container'>
                  <img className="logo" src="../public/Southern Pro Logo.jpg" alt="" />
            </div>
            <div className='cover-image'>
                  <h1 className='cover-image-title'>"Built on Trust"</h1>
                  <br />
                  <br />

                  <p className='cover-image-text'>
                        We are Southern Pro Roofing and Construction, specializing in top-tier roof replacements/repairs for both Residential, Multi family homes, and commercial projects. We take pride in servicing our Property Owners by making sure they understand every step, to assure full transparency and trust.
                  </p>
                  <div className='button-container'>
                        <button className='cover-image-btn'>Residential</button>
                        <button className='cover-image-btn'>Commercial</button>
                  </div>
            </div>
            <Services />
            <AboutUs />
            <Contact />
            <Footer />
      </div>
  )
}

export default Home