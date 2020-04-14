import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import ligoIcon from '../../../assets/logo.png';
import hamburger from '../../../assets/bars.svg';

const StyledFirstSection = styled.section`
background-color: ${props => props.theme.blue5};
height: 95vh;
padding: 40px 36px 0 31px;

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .home-logo{
        width: 72px;
        height: 72px;
    }
    .home-hamburger {
        width:23px;
        height:20px;
    }

}

.content-container {
    height: 80%;
    display: grid;
    place-content: center;
}
        h1{
            text-align: center;
            color: ${props => props.theme.black2};
            font-weight: 400;
        font-size: 32px;
        text-align: center;
        }
        p{
            text-align: center;
            margin-top: 20px;
       margin-bottom: 40px;
            color: ${props => props.theme.black1};
        font-size: 14px;
        text-align: center;
    font-weight: 100;
    line-height: 150%;
    letter-spacing: 0.2px;
        }
        .cta-button-container{

    display: block;
    text-align: center
        }
        .cta-button{
                 padding: 16px 28px;
                     border-radius: 35px;
    background: ${props => props.theme.blue1};
    text-decoration: none;
    color: ${props => props.theme.white1};
    text-transform: uppercase;
    font-size: 14px;
        display: inline-block;
        }

`;

export const Home = () => (
    <div>
        <StyledFirstSection>
            <nav>
                <NavLink to="/">
                    <img src={ligoIcon} alt="home" className="home-logo" />
                </NavLink>

                <div>
                    <img src={hamburger} alt="hamburger" className="home-hamburger" />
                </div>
            </nav>

            <div className="content-container">
                <h1>Sharing a ride just got easier</h1>
                <p>Ligo is a smart transportation company that connects verified commuters who are going towards a similar route.</p>
                <div className="cta-button-container">
                    <Link to="/signup" className="cta-button">
                        get started
                    </Link>
                </div>
            </div>
        </StyledFirstSection>
    </div>
);
