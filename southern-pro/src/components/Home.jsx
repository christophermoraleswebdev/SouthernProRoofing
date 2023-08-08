import Services from "./Services"

const Home = () => {
  return (
      <div>
            <div className='logo-container'>
                  <img className="logo" src="../public/Southern Pro Logo.jpg" alt="" />
            </div>
            <div className='cover-image'>
                  <h1 className='cover-image-title'>"Your Design - Our Experience"</h1>
                  <br />
                  <br />

                  <p className='cover-image-text'>
                        We are a Premier Roofing Company specializing in high end roof replacements/repairs for both Residential, Multi family homes, and commercial projects. We take pride in servicing our Property Owners by making sure they understand every step, to assure full transparency and trust.
                  </p>
                  <div className='button-container'>
                        <button className='cover-image-btn'>Residential</button>
                        <button className='cover-image-btn'>Commercial</button>
                  </div>
            </div>
            <Services />
      </div>
  )
}

export default Home