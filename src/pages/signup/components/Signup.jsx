/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png';
import { inputFields, strings } from '../constants';
import {
    StyledContainer,
    StyledPictureContainer,
    StyledFormContainer,
    StyledHeader,
    StyledSelector,
    StyledForm,
    StyleSignupButton
} from '../styles/SignupStyle';

const {
    BE_COMFORTABLE,
    CREATE_ACCOUNT,
    DRIVE_WITH_LIGO,
    EARN_ANYWHERE,
    I_AM_A_DRIVER,
    I_AM_A_RIDER,
    SIGNUP,
    TAKE_A_RIDE,
} = strings;

const PictureContainer = ({ selected }) => (
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

const FormContainer = ({
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

export const Signup = ({ location }) => {
    // let the user set selected state based on the cta button clicked
    const [selected, setSelected] = useState(location.state.selected);
    const [details, setDetails] = useState({
        email: '', name: '', phoneNumber: '',
    });
    const [btndisabled, setBtndisabled] = useState(true);

    useEffect(() => {
        const { email, name, phoneNumber } = details;
        if (email !== '' && name !== '' && phoneNumber.length > 10) {
            setBtndisabled(false);
        } else {
            setBtndisabled(true);
        }
    }, [details]);

    const handleValidationAndChangeValue = (e, name) => {
        const isAValidNumber = number => (!isNaN(`${number}`) && Number.isInteger(Number(number)));
        if (name === 'phoneNumber') {
            // because the phonenumber object is depply nested, we clone
            // the object so that we can change the isPassed trigger
            let newPhoneNumberCopy = JSON.parse(JSON.stringify(e.target.value));
            /**
             * - the regex matches
             * - the first number should be 0 and a lenght of 1,
             * - second number should match between 7 and 9,
             * - the third number should match either 1 0r 0
             * - the fourth number should be any decimals
             * - and the remaining number should match any number
             */
            if (isAValidNumber(e.target.value)) {
                if (details.phoneNumber.length >= 11) {
                    // allow only 11 charachters
                    newPhoneNumberCopy = newPhoneNumberCopy.slice(0, 11);
                    setDetails({ ...details, phoneNumber: newPhoneNumberCopy });
                }
                setDetails({ ...details, phoneNumber: newPhoneNumberCopy });
            }
        } else {
            setDetails({
                ...details, [name]: e.target.value,
            });
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            userType: selected, ...details,
        };
        console.log(data);
        setDetails({ email: '', name: '', phoneNumber: '' });
    };

    return (
        <StyledContainer>
            <PictureContainer selected={selected} />
            <FormContainer
                setSelected={setSelected}
                handleSubmit={handleSubmit}
                details={details}
                handleValidationAndChangeValue={handleValidationAndChangeValue}
                btndisabled={btndisabled}
                selected={selected}
            />
        </StyledContainer>
    );
};

PictureContainer.propTypes = {
    selected: PropTypes.string.isRequired,
};
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
Signup.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            selected: PropTypes.string,
        }),
    }).isRequired,
};
