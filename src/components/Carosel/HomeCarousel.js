import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import './carousel.css'
const HomeCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={'https://i.ibb.co/vdyr85T/programing-Language.jpg'} alt="technology slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={'https://i.ibb.co/D1Vdnff/programing-Language-One.jpg'} alt="programig slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={'https://i.ibb.co/FgS8KMZ/react-carosel.jpg'} alt="react slide" />
                </Carousel.Item>
            </Carousel>
      {/* <ScrollDown /> */}
    </div>
    );
};

export default HomeCarousel;