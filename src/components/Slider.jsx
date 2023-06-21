import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
  return (
        <Carousel fade indicators={false}>
            {
                start.map((item)=>(
                    <Carousel.Item>
                        <img className="d-block w-100" src={item} alt="First Slide" />
                    </Carousel.Item>
                ))
            }
        </Carousel>
  )
}

export default Slider