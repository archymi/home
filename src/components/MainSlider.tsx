import * as React from 'react';
import Slider from "react-slick";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainSlider.scss';
import slider01 from 'asset/slider_01.jpg';
import slider02 from 'asset/slider_02.jpg';

function MainSlider() {
    const settings = {
        // 아래 dots 줄 것인가
        dots: true,
        // 좌우 화살표 줄 것인가
        arrows: true,
        fade: true,
        // 마지막 슬라이드에서 처음 슬라이스로
        infinite: true,
        speed: 1000,
        // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
        slidesToShow: 1,
        // 스크롤 할 때마다 몇 장씩 넘길 것인가
        slidesToScroll: 1,
        // 자동 넘김을 할 것인가. 한다면 스피드는?
        autoplay: true,
        autoplaySpeed: 6000,
        // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
        pauseOnHover: false,
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='slider'>
                    <img className='sliderImg' src={slider01} alt="slider01"/>
                </div>
                <div>
                    <img className='sliderImg' src={slider02} alt="slider02"/>
                </div>
            </Slider>
        </div>
    )

}

export default MainSlider;