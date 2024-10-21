import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CategoryShowcase = () => {
    return (
        <div className='category-showcase'>
            <div className='category-showcase-swiper'>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={5}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={0}
                    autoplay={{
                        delay: 3000,
                    }}
                    onSlideChange={(swiper) => {
                        const slides = swiper.slides;
                        slides.forEach((slide) => {
                            slide.style.opacity = '0';
                        });
                        const activeIndex = swiper.activeIndex;
                        slides[activeIndex].style.opacity = '1';
                        slides[(activeIndex - 1 + slides.length) % slides.length].style.opacity = '1';
                        slides[(activeIndex + 1) % slides.length].style.opacity = '1';
                        slides[(activeIndex - 2 + slides.length) % slides.length].style.opacity = '1';
                        slides[(activeIndex + 2) % slides.length].style.opacity = '1';
                    }}
                >
                    {[
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                        'https://k.kakaocdn.net/dn/bCWfR2/btsGvTlKYQs/O9YVKs7NFNEsVReE9HHK61/img_110x110.jpg',
                    ].map((src, index) => (
                        <SwiperSlide key={index}>
                            <img className='category-avator' src={src} alt={`Category ${index + 1}`} loading='lazy' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button type='button' className='category-showcase-plus'>
                <img src='https://static.gamsgocdn.com/gg2/images/index/plus.webp' alt='Plus' />
            </button>
        </div>
    );
};

export default CategoryShowcase;
