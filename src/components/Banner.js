import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';



const slides = [
    { id: 1, img: 'https://i.ibb.co/T1GBYGp/car.jpg' },
    { id: 1, img: 'https://i.ibb.co/85ShPH3/car-2.jpg' },
    { id: 1, img: 'https://i.ibb.co/zHVKbG2/car-3.jpg' },
    { id: 1, img: 'https://i.ibb.co/1JL2Cwq/car-4.jpg' },
    { id: 1, img: 'https://i.ibb.co/c6qr3pL/car-5.jpg' },
    { id: 1, img: 'https://i.ibb.co/g94Z0Fj/car-6.jpg' },
]

const Banner = () => {
    const [index, setIndex] = useState(0)
    const sliderRef = useRef()
    const carouselRef = useRef()

    const beforeChange = (prev, next) => {
        let element = document.querySelector('.slick-active');
        element?.classList.add('next-slide-anim');
        setIndex(next);
    };

    const afterChange = (index) => {
        let element = document.querySelector('.slick-active');
        element.classList.remove('next-slide-anim')
    };

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        beforeChange,
        afterChange,
        useCSS: false,
        useTransform: false
    }


    const next = () => {
        sliderRef.current.slickNext()
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    <div className="home-slider">
        <div className="carousel">
            <Slider {...settings} className="carousel-inner" ref={ref => sliderRef.current = ref}>
                {
                    slides.map((slide, index) => (
                        <div className="carousel-item" key={index} ref={ref => carouselRef.current = ref}>
                            <div className="slide-content">
                                {index !== slides.length - 1 &&
                                    <>
                                        <img src={slide.img} alt="" />
                                    </>
                                }
                            </div>
                            <img src={slide.img} alt="Chicago" width="1100" height="500" />
                        </div>
                    ))
                }
            </Slider>
            {((slides.length !== 0) && (index !== slides.length - 1)) &&
                <>
                    {(index !== 0) && <a href="#/" className="carousel-control-prev" onClick={previous}>
                        <img src="/images/homeScreen/skipnewbtn.png" alt="Los Angeles" />
                    </a>}
                    {index !== slides.length - 1 && <a href="#/" className="carousel-control-next" id="next-btn" onClick={next}  >
                        <img src="/images/homeScreen/fast-forward-button.gif" alt="Los Angeles" />
                    </a>}
                </>
            }
        </div>
    </div>
};

export default Banner;