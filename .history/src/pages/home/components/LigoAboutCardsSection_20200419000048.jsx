import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledHowLigoWorksSection,
    StyledHowLigoWorksCard
} from '../styles';
import { ligoCardsDetails, strings } from '../constants';

const { HOW_LIGO_WORKS } = strings;

const LigoAboutCard = ({ stepNumber, stepDetail, stepTitle }) => (
    <StyledHowLigoWorksCard>
        <h3>{stepNumber}</h3>
        <h4>{stepTitle}</h4>
        <p>{stepDetail}</p>
    </StyledHowLigoWorksCard>
);

export const LigoAboutCardsSection = () => (
    <StyledHowLigoWorksSection>
        <h2>{HOW_LIGO_WORKS}</h2>
        <div className="ligo-container">
            {
                ligoCardsDetails.map(details => {
                    const { stepNumber, stepDetail, stepTitle } = details;
                    return (
                        <LigoAboutCard
                            key={details.stepNumber}
                            stepNumber={stepNumber}
                            stepDetail={stepDetail}
                            stepTitle={stepTitle}
                        />
                    );
                })
            }
        </div>
    </StyledHowLigoWorksSection>
);

LigoAboutCard.propTypes = {
    stepDetail: PropTypes.string.isRequired,
    stepNumber: PropTypes.string.isRequired,
    stepTitle: PropTypes.string.isRequired,
};
