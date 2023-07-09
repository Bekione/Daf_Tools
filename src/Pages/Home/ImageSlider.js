import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';// import required modules
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ImageSlider({isDesktop}) {
  const images = [
      require('../Assets/desk_snap_health.png'),
      require('../Assets/desk_snap_diet.png'),
      require('../Assets/desk_snap_zodiac.png'),
      require('../Assets/desk_snap_health_2.png'),
      require('../Assets/desk_snap_diet_2.png'),
      require('../Assets/desk_snap_zodiac_2.png'),
      require('../Assets/desk_snap_health_2.png'),
      require('../Assets/desk_snap_health.png'),
      require('../Assets/desk_snap_zodiac.png'),
      require('../Assets/desk_snap_diet_2.png')
  ];

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
          images.map((img, index) => {
            return(
              <SwiperSlide key={index}>
                <img src={img} alt='page snap shots' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export default ImageSlider