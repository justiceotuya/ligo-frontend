import React from 'react';
import PropTypes from 'prop-types';
import { StyledReasonsSection } from '../styles';
import driver from '../../../assets/driver.png';
import { ligoReasons, strings } from '../constants';

const {
    WHY_CHOOSE,
    LIGO,
} = strings;

const ChooseLigoReason = ({ alt, img, text }) => (
    <div className="reasons-item">
        <div className="icon-div">
            <span className="icon-container">
                <img src={img} alt={alt} className="icon" loading="lazy"/>
            </span>
        </div>
        <p>{text}</p>
    </div>
);

const ChooseLigoReasons = () => ligoReasons.map(reason => {
    const { alt, img, text } = reason;
    return (
        <ChooseLigoReason
            key={alt}
            alt={alt}
            img={img}
            text={text}
        />
    );
});
export const LigoReasonsSection = () => (
    <StyledReasonsSection>
        <div className="image">
            <img src={driver} alt="driver" loading="lazy"/>
        </div>
        <div className="reasons">
            <h2>
                {WHY_CHOOSE}
                <span>
                    {LIGO}
                </span>
            </h2>
            <ChooseLigoReasons />
        </div>
    </StyledReasonsSection>
);

ChooseLigoReason.propTypes = {
    alt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
