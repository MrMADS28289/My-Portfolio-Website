import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Avater1 from '../../assets/avatar1.jpg'
import Avater2 from '../../assets/avatar2.jpg'
import Avater3 from '../../assets/avatar3.jpg'
import Avater4 from '../../assets/avatar4.jpg'

const Testimonials = () => {

    const clients = [
        {
            id: 1,
            name: 'Tina Show',
            img: Avater1,
            reviw: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati modi necessitatibus repellendus, qui commodi natus aliquid, repellat accusamus repudiandae ullam ea sint.'
        },
        {
            id: 2,
            name: 'Shatta Wale',
            img: Avater2,
            reviw: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati modi necessitatibus repellendus, qui commodi natus aliquid, repellat accusamus repudiandae ullam ea sint.'
        },
        {
            id: 3,
            name: 'Kwame Despita',
            img: Avater3,
            reviw: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati modi necessitatibus repellendus, qui commodi natus aliquid, repellat accusamus repudiandae ullam ea sint.'
        },
        {
            id: 4,
            name: 'Nana Ama McBrown',
            img: Avater4,
            reviw: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati modi necessitatibus repellendus, qui commodi natus aliquid, repellat accusamus repudiandae ullam ea sint.'
        },
    ]

    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    clients.map(client => {
                        return (
                            <SwiperSlide key={client.id} className="testimonial">
                                <div className="client_avater">
                                    <img src={client.img} alt="" />
                                </div>
                                <h5>{client.name}</h5>
                                <small className='client_reviw'>{client.reviw}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;