import styled from 'styled-components';
import backgroundPattern1 from '../../../assets/background-pattern1.svg';

export const StyledHeroSection = styled.section`
height: 90vh;
padding: 40px 36px 0 31px;
position:relative;
background-color: ${props => props.theme.blue5};
overflow:hidden;
z-index:0;

::after {
    content: url(${backgroundPattern1});
    display: table;
    position: absolute;
    bottom: -86px;
    right: -261px;
    z-index:-1;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15%;
    .home-logo{
        width: 72px;
        height: 72px;
    }
    .home-hamburger {
        width:23px;
        height:20px;
    }
    .nav-button{
        display: none
    }
}



.content-container {
    height: 85%;
    display: grid;
    place-content: center;

    .hero-container {
        display: block;

    }
    .hero-text{
        flex-basis: 60%;
        text-align: left;
    }
    .hero-image{
    display:none;
    }
}

h1{
    text-align: center;
    color: ${props => props.theme.black2};
    font-weight: normal;
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
    font-weight: normal;
    line-height: 150%;
    letter-spacing: 0.5px;
}

.cta-button-container{
    display: block;
    text-align: center
}


@media (min-width: 600px) {
    padding: 40px 50px 0 50px;

    ::after {
        display: none
    }

    nav {
        .home-logo{
            width: 105px;
            height: 105px;
        }
        .home-hamburger {
            display:none;
        }
        .nav-button{
            display:inline-block;
        }
    }

    h1 {
        font-size: 64px;
    }

    p{
        font-size:28px;
    }

}

@media (min-width: 900px) {
    padding: 40px 70px 0 70px;
}

@media (min-width: 1024px) {
    padding: 40px 100px 0 100px;

.content-container {
    display: block;
    .hero-container {
        display: flex;
        align-items: center;
        height:100%;
        & * {
            text-align: left;
        }
    }
    .hero-text{
        flex-basis: 50%;
        text-align: left;
    }
    .hero-image{
        margin-left: 55px;
        flex-basis: 50%;
        display:block;
        height:100%;
        position:relative;
        img{
            width:100%;
            position:absolute;
            bottom:0;
        }
    }
}
}

@media (min-width: 1400px) {
    padding: 40px 140px 0 140px;
}
`;
