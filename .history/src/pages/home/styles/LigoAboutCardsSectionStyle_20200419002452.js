import styled from 'styled-components';
import backgroundPattern2 from '../../../assets/background-pattern2.svg';

export const StyledHowLigoWorksCard = styled.div`
padding: 32px;
background: ${props => props.theme.white1};
box-shadow: 0px 9px 20px #38383829;
border-radius: 10px;
max-width: 100%;
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
@media screen and (min-width: 600px) {
max-width: 80%;
:last-child {
  margin-bottom: 40px;
}
}
@media screen and (min-width: 601px) and (max-width: 1200px) {
max-width: 50%
}
`;

export const StyledHowLigoWorksSection = styled.section`
padding: 72px 36px;
background-color: ${props => props.theme.white2};
   position: relative;
 overflow:hidden;
z-index:-1;

::after {
    content: url(${backgroundPattern2});
    display: table;
    position: absolute;
  transform: translate(-56%, -100%);
    z-index:-1;
}
h2 {
    text-align:center;
    font-size:24px;
    margin-bottom:20px;
}

.ligo-container {
display: flex;
flex-direction: row;
flex-flow:wrap;
justify-content: space-evenly;
max-width: 800px;
}
`;
