/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    StyledContainer
} from '../styles/SignupStyle';
import { PictureContainer } from './PictureContainer';
import { FormContainer } from './FormContainer';

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

Signup.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            selected: PropTypes.string,
        }),
    }).isRequired,
};
