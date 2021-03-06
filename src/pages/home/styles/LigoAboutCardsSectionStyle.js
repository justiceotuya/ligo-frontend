import styled from 'styled-components';
import backgroundPattern2 from '../../../assets/background-pattern2.svg';

export const StyledHowLigoWorksCard = styled.div`
padding: 32px;
background: ${props => props.theme.white1};
box-shadow: 0px 9px 20px #38383829;
border-radius: 10px;
max-width: 436px;
margin: 0 auto;

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
font-weight: normal;
letter-spacing: 0.4px;
font-size: 14px;
     color: ${props => props.theme.black1};

}

 @media (min-width: 600px) {
h3{font-size:15px}
h4{font-size:23px}
    font-size:15px;

}

 @media (min-width: 1024px) {
h3{font-size:20px}
h4{font-size:28px}
p{
    font-size:20px;
}
}



`;

export const StyledHowLigoWorksSection = styled.section`
padding: 72px 36px;
background-color: ${props => props.theme.white2};
   position: relative;
 overflow:hidden;
z-index:0;

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
    font-weight:500;
    margin-bottom:20px;
}

.ligo-container {
display: grid;
  grid-gap: 40px;
margin:0 auto;
max-width: 1220px;
}

 @media (min-width: 600px) {
/* padding: 150px 50px; */

h2{
    margin-bottom: 50px;
    font-size:38px;
}
 .ligo-container {
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 66px;
 }
}

 @media (min-width: 1024px) {
/* padding: 220px 50px; */
 height: 80vh;
    display: grid;
    place-content: center;
h2{
    margin-bottom: 72px;
    font-size: 48px;
}
}


`;
