import styled from 'styled-components';

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
