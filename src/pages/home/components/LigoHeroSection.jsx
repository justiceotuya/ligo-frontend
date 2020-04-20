import React from 'react';
import { NavLink } from 'react-router-dom';
import ligoIcon from '../../../assets/logo.png';
import womanImg from '../../../assets/lady-on-phone.png';
import hamburger from '../../../assets/bars.svg';
import { strings } from '../constants';
import {
    StyledHeroSection
} from '../styles';
import { Button } from '../../../components';

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
                <span className="nav-button">
                    <Button
                        link="/signup"
                        btnText="Earn with Ligo"
                    />
                </span>
                <img src={hamburger} alt="hamburger" className="home-hamburger" />
            </div>
        </nav>

        <div className="content-container">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>{SHARING_RIDE}</h1>
                    <p>{LIGO_DESCRIPTION}</p>
                    {/* <div className="cta-button-container"> */}
                    <Button

                        link="/signup"
                        btnText={GET_STARTED}
                    />
                    {/* </div> */}
                </div>
                <div className="hero-image">
                    <img src={womanImg} alt="woman pressing phone" />
                </div>
            </div>
        </div>
    </StyledHeroSection>
);
