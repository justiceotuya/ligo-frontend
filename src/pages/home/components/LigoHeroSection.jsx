import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ligoIcon from '../../../assets/logo.png';
import hamburger from '../../../assets/bars.svg';
import { strings } from '../constants';
import {
    StyledHeroSection
} from '../styles';

const {
    SHARING_RIDE,
    LIGO_DESCRIPTION,
    GET_STARTED,
} = strings;

export const LigoHeroSection = () => (
    <StyledHeroSection>
        <nav>
            <NavLink to="/">
                <img src={ligoIcon} alt="home" className="home-logo" />
            </NavLink>

            <div>
                <img src={hamburger} alt="hamburger" className="home-hamburger" />
            </div>
        </nav>

        <div className="content-container">
            <h1>{SHARING_RIDE}</h1>
            <p>{LIGO_DESCRIPTION}</p>
            <div className="cta-button-container">
                <Link to="/signup" className="cta-button">
                    {GET_STARTED}
                </Link>
            </div>
        </div>
    </StyledHeroSection>
);
