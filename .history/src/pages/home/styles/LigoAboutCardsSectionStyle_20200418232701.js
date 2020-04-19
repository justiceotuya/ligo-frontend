import styled from 'styled-components';

export const StyledHowLigoWorksCard = styled.div`
padding: 32px 47px 32px 31px;
background: ${props => props.theme.white1};
box-shadow: 0px 9px 20px #38383829;
border-radius: 10px;
:not(:last-child) {
  margin-bottom: 40px;
z-index:-1;

::after {
    content: url(${backgroundPattern1});
    display: table;
    position: absolute;
    bottom: -86px;
    left: 261px;
    z-index:-1;
}

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

export const StyledHowLigoWorksSection = styled.section`
padding: 72px 36px;
background-color: ${props => props.theme.white2};
h2 {
    text-align:center;
    font-size:24px;
    margin-bottom:20px;
}
`;
