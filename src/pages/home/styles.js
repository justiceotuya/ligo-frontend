import styled from 'styled-components';

export const StyledHeroSection = styled.section`
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

export const StyledHowLigoWorksSection = styled.section`
padding: 72px 36px;
background-color: ${props => props.theme.white2};
h2 {
    text-align:center;
    font-size:24px;
    margin-bottom:20px;
}
`;

export const StyledHowLigoWorksCard = styled.div`
padding: 32px 47px 32px 31px;
background: ${props => props.theme.white1};
box-shadow: 0px 9px 20px #38383829;
border-radius: 10px;
:not(:last-child) {
  margin-bottom: 40px;
}
h3{
    /* font-weight: 100; */
    font-size: 20px;
    color: ${props => props.theme.blue1};
    margin-bottom: 10px;
}
h4{
    font-size: 18px;
     color: ${props => props.theme.black1};
     margin-bottom: 18px;
}
p{
line-height: 150%;
font-weight: 100;
letter-spacing: 0.4px;
font-size: 14px;
}
`;

export const StyledReasonsSection = styled.section`
background: ${props => props.theme.blue3};
height: 100vh;
display: flex;
flex-direction: column;

.image {
    flex-basis: 50%;
    img {
    height: 50vh;
    width: 100%;
    object-fit: cover;
    }
    }
.reasons{
    flex-basis: 50%;
    padding: 0 36px;
    display: grid;
    place-content: center;
color:${({ theme }) => theme.white1};
h2 {
    text-align:center;
font-size: 24px;
margin-bottom: 41px;
span {
color:${({ theme }) => theme.blue1};
}
}

.reasons-item {
/* li { */
    display: flex;
:not(:last-child){
    margin-bottom: 20px;
}

p{
    font-weight:100;
    line-break: 150%;
    letter-spacing:0.5px;
    font-size: 14px;
}
    .icon-container {
        width: 26px;
        height: 26px;
        background-color: ${({ theme }) => theme.blue1};
        border-radius: 100%;
       display: flex;
  justify-content: center;
  align-items:center;
        margin-right: 20px;


  .icon{
       width: 12px;
        height: 12px;
  }

    }
/* } */
}
}
`;

export const StyledLigoLastSectionWrapper = styled.div`
padding: 34px 36px 72px 32px;
.image-container {
    img {
        width: 100%;
        margin-bottom: 40px;
    }
}
.text-content  {
    h2{
        text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    }
    p{
        font-size: 12px;
        color: ${props => props.theme.black1};
        line-height: 24px;
text-align: center;
margin-bottom: 42px;
    }
}
.reasons-item {
/* li { */
    display: flex;
:not(:last-child){
    margin-bottom: 20px;
}

p{
    font-weight:100;
    line-break: 150%;
    letter-spacing:0.5px;
    font-size: 14px;
}
.title{
    font-size: 16px;
    font-weight:500;
    color: ${props => props.theme.black2};
    margin-bottom: 10px;
}
.text{
color: ${props => props.theme.black1};
line-height: 24px;
}
    .icon-container {
        width: 26px;
        height: 26px;
        background-color: ${({ theme }) => theme.blue1};
        border-radius: 100%;
       display: flex;
  justify-content: center;
  align-items:center;
        margin-right: 20px;


  .icon{
       width: 12px;
        height: 12px;
  }

    }
/* } */
}
.signup-link {
    margin-left: 43px;
    text-decoration: none;
display: flex;
align-items: center;
color: ${props => props.theme.blue1}
span {
    margin-right: 10px;
    font-size: 14px;
}
}
`;

export const StyledFooterContainer = styled.footer`
height: 154px;
background: ${props => props.theme.black3};
display: grid;
place-content: center;
p{
    color: ${props => props.theme.white1};
    margin-bottom: 27px;
}
div {
    display: flex;
align-items: center;
justify-content: space-between;
a{
text-decoration: none;
    img{
        width: 16px;
        height: 16px;
    }
}
}
`;
