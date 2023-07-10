import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';// import required modules
import imageFetcher from '../Hook/imageFetcher'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ImageSlider({isDesktop}) {
  const carouselImages = imageFetcher('carouselimages')

  return (
    <>
      <div className='swiper-button-prev'></div>
      <div className='swiper-button-next'></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          carouselImages.map((image, index) => {
            return(
              <SwiperSlide key={index}>
                <img src={image.path} alt='page snap shots' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export default ImageSlider