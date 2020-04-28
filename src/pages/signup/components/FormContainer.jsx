/* eslint-disable no-restricted-globals */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png';
import { inputFields, strings } from '../constants';
import {
    StyledFormContainer,
    StyledHeader,
    StyledSelector,
    StyledForm,
    StyleSignupButton
} from '../styles/SignupStyle';

const {
    CREATE_ACCOUNT,
    I_AM_A_DRIVER,
    I_AM_A_RIDER,
    SIGNUP,
} = strings;

export const FormContainer = ({
    setSelected,
    handleSubmit,
    details,
    handleValidationAndChangeValue,
    btndisabled,
    selected,
}) => (
    <StyledFormContainer>
        <p className="form-header">{CREATE_ACCOUNT}</p>
        <StyledHeader>
            <NavLink to="/">
                <img src={logo} alt="home" className="home-logo" loading="eager" />
            </NavLink>
            <p>{CREATE_ACCOUNT}</p>
        </StyledHeader>
        <StyledSelector selected={selected}>
            <div
                className="rider"
                role="button"
                onClick={() => setSelected('rider')}
                onKeyDown={e => e.keyCode === 13 && setSelected('rider')}
                tabIndex={0}
            >
                <p>{I_AM_A_RIDER}</p>
            </div>
            <div
                className="driver"
                role="button"
                onClick={() => setSelected('driver')}
                onKeyDown={e => e.keyCode === 13 && setSelected('driver')}
                tabIndex={0}
            >
                <p>{I_AM_A_DRIVER}</p>
            </div>
        </StyledSelector>
        <StyledForm onSubmit={e => handleSubmit(e)}>
            {
                inputFields.map(item => {
                    const {
                        icon, name, placeholder, type,
                    } = item;
                    return (
                        <div key={name} className="form-field">
                            <label htmlFor={name}>
                                <img src={icon} alt={name} />
                                <input
                                    type={type}
                                    id={name}
                                    placeholder={placeholder}
                                    required
                                    value={details[name]}
                                    onChange={e => handleValidationAndChangeValue(e, name)}
                                />
                            </label>
                        </div>
                    );
                })
            }
            <StyleSignupButton type="submit" disabled={btndisabled}>
                {SIGNUP}
            </StyleSignupButton>
        </StyledForm>
    </StyledFormContainer>
);

FormContainer.propTypes = {
    btndisabled: PropTypes.bool.isRequired,
    details: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleValidationAndChangeValue: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
};
