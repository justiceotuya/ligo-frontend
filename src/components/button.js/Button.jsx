import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled(Link)`
    padding: 16px 28px;
    border-radius: 35px;
    background: ${props => props.theme.blue1};
    text-decoration: none;
    color: ${props => props.theme.white1};
    text-transform: uppercase;
    font-size: 14px;
    font-weight:500;
    display: inline-block;

    @media (min-width: 600px) {
    padding: 23px 68px;
    font-size: 20px;
}
`;

export const Button = ({ link, btnText, selected }) => (
    <StyledButton to={{
        pathname: link,
        state: {
            selected,
        },
    }}
    >
        {btnText}
    </StyledButton>
);

Button.propTypes = {
    btnText: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    selected: propTypes.string,
};

Button.defaultProps = {
    selected: 'rider',
};
