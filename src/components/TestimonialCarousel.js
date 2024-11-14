import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TestimonialCarousel() {
    return (
        <div className="container my-5">
            <div className="text-start mb-4">
                <p className="" style={{ fontFamily: "'Syne One', sans-serif", color: '#FFB646' }}>Testimonial</p>
                <h1 className="fw-bold lh-1 mb-3 " style={{ fontSize: '50px', fontFamily: "'Syne One', sans-serif", color: '#095D89' }}>
                    <span style={{
                        display: 'inline-block',
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#FFB646',
                        borderRadius: '50%',
                        textAlign: 'center',

                        fontSize: '50px',

                    }}>W</span>hat they
Thinks
                </h1>
            </div>

            {/* Carousel for small screens */}
            <Carousel indicators={false} controls={true} interval={5000} className="d-md-none">
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <div className="testimonial-card mx-3 text-center" style={{ maxWidth: '300px' }}>
                            <div className="d-flex align-items-center justify-content-center mb-2">
                                <i className="fas fa-quote-left fa-2x text-primary me-2"></i>
                                <img src="https://via.placeholder.com/50" alt="Amélie S." className="rounded-circle" />
                            </div>
                            <p className="mb-3" style={{ fontStyle: 'italic' }}>
                                “Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services.”
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="fw-bold" style={{ color: '#095D89' }}>Amélie S.</span>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <div className="testimonial-card mx-3 text-center" style={{ maxWidth: '300px' }}>
                            <div className="d-flex align-items-center justify-content-center mb-2">
                                <i className="fas fa-quote-left fa-2x text-primary me-2"></i>
                                <img src="https://via.placeholder.com/50" alt="Jon Sah" className="rounded-circle" />
                            </div>
                            <p className="mb-3" style={{ fontStyle: 'italic' }}>
                                “Unleash energistically build alternative scenarios via cross-unit build efficient initiatives for distinctive vortals.”
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="fw-bold" style={{ color: '#095D89' }}>Jon Sah</span>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <div className="testimonial-card mx-3 text-center" style={{ maxWidth: '300px' }}>
                            <div className="d-flex align-items-center justify-content-center mb-2">
                                <i className="fas fa-quote-left fa-2x text-primary me-2"></i>
                                <img src="https://via.placeholder.com/50" alt="Backy Roh" className="rounded-circle" />
                            </div>
                            <p className="mb-3" style={{ fontStyle: 'italic' }}>
                                “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue.”
                            </p>
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="fw-bold" style={{ color: '#095D89' }}>Backy Roh</span>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* Static display for large screens */}
            <div className="d-none d-md-flex justify-content-center">
                <div className="testimonial-card mx-3 text-center" style={{ maxWidth: '300px' }}>
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <i className="fas fa-quote-left fa-2x text-primary me-2"></i>
                        <img src="https://via.placeholder.com/50" alt="Amélie S." className="rounded-circle" />
                    </div>
                    <p className="mb-3" style={{ fontStyle: 'italic' }}>
                        “Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services.”
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="fw-bold" style={{ color: '#095D89' }}>Amélie S.</span>
                    </div>
                </div>

                <div className="testimonial-card mx-3 text-center" style={{ maxWidth: '300px' }}>
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <i className="fas fa-quote-left fa-2x text-primary me-2"></i>
                        <img src="https://via.placeholder.com/50" alt="Jon Sah" className="rounded-circle" />
                    </div>
                    <p className="mb-3" style={{ fontStyle: 'italic' }}>
                        “Unleash energistically build alternative scenarios via cross-unit build efficient initiatives for distinctive vortals.”
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="fw-bold" style={{ color: '#095D89' }}>Jon Sah</span>
                    </div>
                </div>

                <div className="testimonial-card mx-3 text-center" style={{ maxWidth: '300px' }}>
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <i className="fas fa-quote-left fa-2x text-primary me-2"></i>
                        <img src="https://via.placeholder.com/50" alt="Backy Roh" className="rounded-circle" />
                    </div>
                    <p className="mb-3" style={{ fontStyle: 'italic' }}>
                        “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue.”
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="fw-bold" style={{ color: '#095D89' }}>Backy Roh</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCarousel;
