
import React from 'react'

const Services = () => {
  const serviceData = [
    { id: 1, icon: '<i class="fa-solid fa-house"></i>', title: 'Roofing', description: 'We offer RESIDENTIAL, MULTIFAMILY and COMMERCIAL roofing. We take pride in all of our projects, ensuring quality work and excellent service.' },
    { id: 2, icon: '<i class="fa-brands fa-trello"></i>', title: 'Fencing', description: 'We offer both restoration and construction of any type of fencing. From pressure washing, and restraining and repairing all the way to designing a brand new fence, we can handle it.' },
    { id: 3, icon: '<i class="fa-brands fa-microsoft"></i>', title: 'Siding', description: 'We provide top of the line siding repairs and replacement for all types of homes / buildings both residential and commercial.' },
    { id: 4, icon: '<i class="fa-solid fa-cloud-rain"></i>', title: 'Gutters', description: 'We offer 30+ colors of gutters in the highest quality metal specially done to both replace your damaged gutters or add new; increasing curb appeal, property value and helping properly channel rain from your home.' },
    { id: 5, icon: '<i class="fa-solid fa-brush"></i>', title: 'Painting', description: 'We offer interior and exterior painting to both touch up your home for a fresh look or to completely change your homes current design.' },
    { id: 6, icon: '<i class="fa-brands fa-think-peaks"></i>', title: 'Pergolas', description: 'We offer both restoration and new builds of pergolas to your home. We can pressure wash and restrain your current pergola for a fresh like-new look or construct a brand new one TO YOUR DESIGN.' },
    
  ]

  return (
      <div className="services">
            <h1 className='services-heading'>OUR SERVICES</h1>
            <div className="grid-container">
            {serviceData.map(service => (
                  <div className='gallery' key={service.id}>
                        <div className='card grid-item'>
                              <div className='icon' dangerouslySetInnerHTML={{ __html: service.icon }} />
                              <h2 className='service-title'>{service.title}</h2>
                              <p className='service-description'>{service.description}</p>
                        </div>
                  </div>
            ))}
            </div>
      </div>
    )
    
}

export default Services
