import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Loader from '../../Components/Loader'
import FetchError from '../ErrorPages/FetchError'
import api from '../../api'
import { fetchPageImages } from '../../App'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ImageSlider() {

  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.prefetchQuery('Page_Images', fetchPageImages)
  }, [])
 
  const { data: carouselImages, isLoading, error: fetchError } = useQuery("Page_Images", {
    staleTime: Infinity, 
    cacheTime: Infinity, 
  })

  // if (!navigator.onLine) {
  //   return <FetchError errorMsg={"No Internet Connection"} />;
  // }

  if (fetchError) {
    return <FetchError errorMsg={fetchError.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='home_carousel'>
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
          carouselImages.carouselImageResponse?.map((image, index) => {
            return(
              <SwiperSlide key={index}>
                <img src={image.path} alt='page snap shots' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}

export default ImageSlider