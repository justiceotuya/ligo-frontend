import styled from 'styled-components';

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
    max-width: 632px;
    margin: 0 auto;
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
    font-weight:normal;
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

}
}

 @media (min-width: 600px) {
     height: 50vh;
    flex-direction: row-reverse;

    .image {
    img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    }
h3{font-size:15px}
h4{font-size:23px}
   p{
    font-size:15px;
   }
}

 @media (min-width: 1024px) {
     height: 80vh;
     .reasons {
h2{
    font-size:40px
    text-align:left;
   margin-bottom: 66px;

    }
.reasons-item {
    :not(:last-child){
    margin-bottom: 36px;
}
p{font-size:20px
line-height:32px;
}
.icon-container {
        width: 40px;
        height: 40px;
 margin-right: 32px;
        .icon{
            width: 22px;
            height: 22px;
            }
            }
  }
     }
 }

 @media (min-width: 1440px) {
     height: 80vh;
     .reasons {
h2{
    font-size:48px
    text-align:left;
   margin-bottom: 72px;

    }
.reasons-item {
    :not(:last-child){
    margin-bottom: 40px;
}
p{font-size:24px
line-height:32px;
}
.icon-container {
        width: 48px;
        height: 48px;
 margin-right: 32px;
        .icon{
            width: 26px;
            height: 26px;
            }
            }
  }
     }
 }
`;
