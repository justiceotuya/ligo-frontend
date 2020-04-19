import styled from 'styled-components';
import background_pattern from '../../../assets/background-pattern1.svg';

export const StyledHeroSection = styled.section`
background-color: ${props => props.theme.blue5};
height: 80vh;
padding: 40px 36px 0 31px;
background-image:url(${background_pattern});

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
        line-height: 150%;
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
    letter-spacing: 0.5px;
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
