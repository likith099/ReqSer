// src/components/ReviewCarousel/ReviewCarousel.jsx
import React, { useState } from 'react';
import reviews from '../../assets/reviews';
import './Reviews.css';

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="review-carousel">
            <h5 className='review-heading'>HERE'S WHAT OTHERS ARE SAYING</h5>
            <div className='review-body'>
                <button className="prev-button" onClick={handlePrev}><svg width="16" height="32" viewBox="0 0 62 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.6604 2.94973C56.9268 0.216058 52.4946 0.216057 49.7609 2.94973L3.09188 49.6188C2.15019 50.5605 1.6233 51.4857 1.23999 52.9096C0.497568 55.6677 1.02592 58.0969 2.94976 60.0208L49.6188 106.69C52.3525 109.423 56.7846 109.423 59.5183 106.69C62.252 103.956 62.252 99.524 59.5183 96.7903L17.6188 54.8908L59.6604 12.8492C62.3941 10.1156 62.3941 5.6834 59.6604 2.94973Z" fill="#00C898" />
                </svg></button>
                <div className="review-content">
                    <h3 className='person-review'>"{reviews[currentIndex].review}"</h3>
                    <h5 className='person-details'>{reviews[currentIndex].name}, {reviews[currentIndex].city}, {reviews[currentIndex].state}</h5>
                </div>
                <button className="next-button" onClick={handleNext}><svg width="16" height="32" rotate="180deg" viewBox="0 0 62 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.6604 2.94973C56.9268 0.216058 52.4946 0.216057 49.7609 2.94973L3.09188 49.6188C2.15019 50.5605 1.6233 51.4857 1.23999 52.9096C0.497568 55.6677 1.02592 58.0969 2.94976 60.0208L49.6188 106.69C52.3525 109.423 56.7846 109.423 59.5183 106.69C62.252 103.956 62.252 99.524 59.5183 96.7903L17.6188 54.8908L59.6604 12.8492C62.3941 10.1156 62.3941 5.6834 59.6604 2.94973Z" fill="#00C898" />
                </svg></button>
            </div>
            <div className="dots">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;
