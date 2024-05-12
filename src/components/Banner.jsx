/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/philippines-2191489_1280.jpg'
import img2 from '../assets/volunteer-2654000_1280.jpg'
import img3 from '../assets/volunteer-6772196_1280.jpg'
import img4 from '../assets/volunteer-6800977_1280.jpg'
import img5 from '../assets/volunteer-service-6772198_1280.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto my-10 flex justify-center  items-center'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container font-Roboto'>
                    <img className='w-1/3 '  src={img1} alt="Slide 1" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>Join Our Cause</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Inspire visitors to join your mission with this caption. Encourage them to get involved in your volunteer programs, donate, or participate in your community initiatives
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={img2} alt="Slide 2" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Make a Difference Today</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Highlight the impact individuals can make by volunteering or supporting your organization.  <br /> Emphasize the immediate and tangible effects of their actions on the lives of others and the community as a whole
                            </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={img3} alt="Slide 3" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Empowering Communities Together
                        </h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Showcase your organization's commitment to collaboration and empowerment. <br />  Illustrate how working together as a community can bring about positive change and address social challenges effectively
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3'   src={img4} alt="Slide 4" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Transforming Lives, One Act of Kindness at a Time
                        </h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Communicate the transformative power of volunteering and philanthropy. <br /> Share stories or statistics that demonstrate how small acts of kindness can lead to significant improvements in people's lives and well-being.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={img5} alt="Slide 4" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Join Us in Building a Better Future
                            </h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Invite visitors to become part of your vision for a brighter tomorrow.  <br />  Outline your organization's long-term goals and aspirations, and encourage people to contribute their time, resources, and expertise towards achieving these objectives
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;