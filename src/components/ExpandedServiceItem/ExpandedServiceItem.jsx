import React, { useRef, useEffect } from 'react';
import './ExpandedServiceItem.css';
import { assets } from '../../assets/assets';

const ExpandedServiceItem = ({ title, description, image, onClose }) => {
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <div className="expanded-service-item-overlay">
            <div className="expanded-service-item" ref={modalRef}>
                <img src={assets.cross} className="close-button" onClick={onClose} />
                <div className="expanded-service-item-img-container">
                    <img className="expanded-service-item-image" src={image} alt={title} />
                </div>
                <div className="expanded-service-item-content">
                    <h2 className="expanded-service-item-title">{title}</h2>
                    <p className="expanded-service-item-desc">{description}</p>
                    <div className="expanded-service-item-actions">
                        <button className="action-button">Message</button>
                        <button className="action-button icon"><svg width="20" height="28" viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65 30C73.2843 30 80 23.2843 80 15C80 6.7157 73.2843 0 65 0C56.7157 0 50 6.7157 50 15C50 16.2227 50.1463 17.4111 50.4223 18.549L25.2723 33.0692C22.5883 30.5459 18.9747 29 15 29C6.7157 29 0 35.7157 0 44C0 52.2843 6.7157 59 15 59C18.5294 59 21.7742 57.781 24.3362 55.7411L50.181 70.6626C50.0619 71.4242 50 72.205 50 73C50 81.2843 56.7157 88 65 88C73.2843 88 80 81.2843 80 73C80 64.7157 73.2843 58 65 58C60.3908 58 56.2672 60.0789 53.5156 63.3502L29.0623 49.2321C29.6686 47.603 30 45.8402 30 44C30 42.58 29.8027 41.2061 29.434 39.9042L54.3222 25.5349C57.0421 28.2915 60.8215 30 65 30Z" fill="#00C898" />
                        </svg>
                        </button>
                        <button className="action-button icon"><svg width="16" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 0H18.5V24L9.95 15.76L0.5 24V0Z" fill="#00C898" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandedServiceItem;
