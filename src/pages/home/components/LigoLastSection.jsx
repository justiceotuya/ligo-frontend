import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import driverSearchingSmall from '../../../assets/driver-searching-small.svg';
import driverSearchingBig from '../../../assets/driver-searching-big.svg';
import { ligoBenefits, strings } from '../constants';
import arrowRight from '../../../assets/arrow-right.svg';
import { StyledLigoLastSectionWrapper } from '../styles';

const {
    DRIVE_AND_BE_YOUR_BASE,
    SIGNUP_CONTENT,
    SIGN_UP_TO_DRIVE,
} = strings;

const LigoLastSectionBenefit = ({
    alt, img, text, title,
}) => (
    <div className="reasons-item">
        <div className="icon-div">
            <span className="icon-container">
                <img src={img} alt={alt} className="icon" />
            </span>
        </div>
        <div>
            <p className="title">{title}</p>
            <p className="text">{text}</p>
        </div>
    </div>
);

const LigoLastSectionBenefits = () => ligoBenefits.map(reason => {
    const {
        alt, img, text, title,
    } = reason;
    return (
        <LigoLastSectionBenefit
            key={alt}
            alt={alt}
            img={img}
            text={text}
            title={title}
        />
    );
});
export const LigoLastSection = () => (
    <StyledLigoLastSectionWrapper>
        <div className="image-container">
            <img
                // eslint-disable-next-line react/jsx-no-literals
                srcSet={`${driverSearchingSmall} 480w, ${driverSearchingBig}`}
                src={driverSearchingBig}
                alt="driver searching for passenger"
            />
        </div>
        <div className="text-container">
            <div className="text-content">
                <h2>{DRIVE_AND_BE_YOUR_BASE}</h2>
                <p>{SIGNUP_CONTENT}</p>
            </div>
            <LigoLastSectionBenefits />
            <Link to="/signup" className="signup-link">
                <span>{SIGN_UP_TO_DRIVE}</span>
                <img src={arrowRight} alt="go to signup" />
            </Link>
        </div>
    </StyledLigoLastSectionWrapper>
);

LigoLastSectionBenefit.propTypes = {
    alt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
