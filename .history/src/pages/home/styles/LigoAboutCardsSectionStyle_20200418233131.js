import styled from 'styled-components';
import backgroundPattern2 from '../../../assets/background-pattern2.svg';

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

export const StyledHowLigoWorksSection = styled.section`
padding: 72px 36px;
background-color: ${props => props.theme.white2};
h2 {
    text-align:center;
    font-size:24px;
    margin-bottom:20px;
}
`;
