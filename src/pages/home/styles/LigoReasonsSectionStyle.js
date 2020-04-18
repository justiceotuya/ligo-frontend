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
