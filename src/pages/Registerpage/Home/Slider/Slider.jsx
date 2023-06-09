import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="md:px-0 pt-0  md:mx-0  ">
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
        className="mySwiper "
      >
        <SwiperSlide className=" ">
          <img
            className="relative rounded  "
            src="https://images.unsplash.com/photo-1464808322410-1a934aab61e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <p className="absolute inset-1 text-white font-bold text-xs  z-20 md:ml-56 md:mt-64 m-12 md:text-4xl">
            Dolls
          </p>
          <p className="absolute inset-1 text-white f  z-20 md:ml-56 md:mt-80 m-20 text-xs md:text-xl">
            It's endless possibilities with these dolls.
          </p>
          <button className="absolute md:top-96 md:left-56  z-20 border border-dotted rounded-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600">
        Shop Now
      </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative rounded  "
            src="https://tataipllivescore.com/wp-content/uploads/2023/04/ezgif.com-gif-maker-36.jpg"
           
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <p className="absolute inset-1 text-white font-bold  z-20 md:ml-56 md:mt-64 m-12 text-xs md:text-4xl">
          Sports & Outdoor Toys
          </p>
          <p className="absolute inset-1 text-white f  z-20 md:ml-56 md:mt-80 m-20 text-xs md:text-xl">
          Get outside and have a great time with
playsets, bubble wands & more
         
          </p>
          <button className="absolute top-96 left-56  z-20 border border-dotted rounded-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600">
        Shop Now
      </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" relative rounded"
            src="https://baxtersports.com/wp-content/uploads/2018/05/benefits-of-sports-summer-camp-1-min.jpg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <p className="absolute inset-1 text-white font-bold  z-20 md:ml-56 text-xs md:mt-64 m-12 md:text-4xl">
          LIMITED TIME ONLY
          </p>
          <p className="absolute inset-1 text-white f  z-20 md:ml-56 md:mt-80 m-20 text-xs md:text-xl">
          Save On the Disney ily 4EVER Collection. 
         
          </p>
          <button className="absolute top-96 left-56  z-20 border border-dotted rounded-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600">
        Shop Now
      </button>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative rounded"
            src="https://ymcagbw.org/sites/default/files/2019-01/Summer-Camp---Kids-playing-soccer-at-sports-camp.jpg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <p className="absolute inset-1 text-white font-bold  z-20 md:ml-56 md:mt-64 text-xs m-12 md:text-4xl">
          Disney Princess
          </p>
          <p className="absolute inset-1 text-white f  z-20 md:ml-56 md:mt-80 m-20 text-xs md:text-xl">
          Express yourself with toys, clothing, and more inspired by your favorite Disney Princesses
         
          </p>
          <button className="absolute top-96 left-56  z-20 border border-dotted rounded-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600">
        Shop Now
      </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
