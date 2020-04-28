/* eslint-disable no-restricted-globals */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png';
import { strings } from '../constants';
import {
    StyledPictureContainer
} from '../styles/SignupStyle';

const {
    BE_COMFORTABLE,
    DRIVE_WITH_LIGO,
    EARN_ANYWHERE,
    TAKE_A_RIDE,
} = strings;

export const PictureContainer = ({ selected }) => (
    <StyledPictureContainer selected={selected}>
        <NavLink to="/">
            <img src={logo} alt="home" className="home-logo" loading="eager" />
        </NavLink>
        <div className="drive-with-ligo">
            <h2>{DRIVE_WITH_LIGO}</h2>
            <p>{EARN_ANYWHERE}</p>
        </div>

        <div className="take-ride-with-ligo">
            <h2>{TAKE_A_RIDE}</h2>
            <p>{BE_COMFORTABLE}</p>
        </div>
    </StyledPictureContainer>
);

PictureContainer.propTypes = {
    selected: PropTypes.string.isRequired,
};
