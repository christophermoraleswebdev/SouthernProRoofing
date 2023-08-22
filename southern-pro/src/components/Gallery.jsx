import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SouthernPro1 from '../../public/Southern Pro1.jpeg'
import SouthernPro2 from '../../public/Southern Pro2.jpeg'
import SouthernPro3 from '../../public/Southern Pro3.jpeg'
import SouthernPro4 from '../../public/Southern Pro4.jpeg'
import SouthernPro5 from '../../public/Southern Pro5.jpeg'
import SouthernPro6 from '/Southern Pro6.jpeg'
import SouthernPro7 from '/Southern Pro7.jpeg'
import SouthernPro8 from '/Southern-Pro8.jpeg'
import SouthernPro9 from '/Southern-Pro9.jpeg'
import SouthernPro10 from '/Southern Pro10.jpeg'

const Gallery = () => {

      const testimonialData = [
            {
                  id: 1,
                  src: SouthernPro1,
            },
            {
                  id: 2,
                  src: SouthernPro2,
            },
            {
                  id: 3,
                  src: SouthernPro3,
            },
            {
                  id: 4,
                  src: SouthernPro4,
            },
            {
                  id: 5,
                  src: SouthernPro5,
            },
            {
                  id: 6,
                  src: SouthernPro6,
            },
            {
                  id: 7,
                  src: SouthernPro7,
            },
            {
                  id: 8,
                  src: SouthernPro8,
            },
            {
                  id: 9,
                  src: SouthernPro9,
            },
            {
                  id: 10,
                  src: SouthernPro10,
            },
      ]


  return (
      <>
      <h1 id='testimonials' className='testimonials-heading'>OUR WORK</h1>
      <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
            }}
            pagination={{
                  clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
      >
            {testimonialData.map(testimonial => (
                  <SwiperSlide key={testimonial.id}>
                        <div className='swiper-container'>
                              <div className='testimonial-card'>
                                    <img src={testimonial.src} alt="gallery" />
                              </div>
                        </div>
                  </SwiperSlide>
            ))}
            
      </Swiper>
    </>
  )
}

export default Gallery