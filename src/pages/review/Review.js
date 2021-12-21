import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://whispering-oasis-97010.herokuapp.com/getreviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    let Rsettings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <Container fluid className="mt-5 pt-5 ">

            <div className="w-75 mx-auto">
                <h3>What are Our Customer Say's</h3>
                {
                    reviews.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                    </div> :
                        <Slider {...Rsettings}>

                            {
                                reviews.map(review => (

                                    <div className="review-section" >
                                        <div className="">
                                            <div className="card-review">
                                                <img src={review.img} className="review-image" alt="" />
                                                <Rating
                                                    initialRating={review.rating}
                                                    emptySymbol="far fa-star rating"
                                                    fullSymbol="fas fa-star rating"
                                                    readonly ></Rating>

                                                <h5 className="card-title">{review.name}</h5>



                                            </div>
                                        </div>
                                    </div>

                                ))
                            }

                        </Slider>
                }
            </div>

        </Container>
    );
};

export default Reviews;

