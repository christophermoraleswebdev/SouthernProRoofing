

const Contact = () => {
      return (
            <div id="contact-form" className="contact-container">
                  <h1>CONTACT US</h1>
                  <form action="https://getform.io/f/e9d423e5-cd28-4b8e-8a1d-c9d6b7e8236c" method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name"/>
            
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email"/>
                        
                        <label htmlFor="message">Message:</label>
                        <input type="text" id="message" name="message" placeholder="Your Message"/>
            
                        <button className="contact-btn" type="submit">Send</button>
                  </form>
                  <div className="social-icons">
                        <a href="https://www.instagram.com/southernproroofingconstruction/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                              <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/p/Southern-Pro-Roofing-Construction-100083122932822/" target="_blank">
                              <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.tiktok.com/@rollieflores1" target="_blank">
                              <i class="fa-brands fa-tiktok"></i>
                        </a>
                  </div>
            </div>
      )
    }
    
    export default Contact
    
    