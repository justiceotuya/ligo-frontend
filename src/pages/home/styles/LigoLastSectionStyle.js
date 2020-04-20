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
    font-weight:normal;
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


 @media (min-width: 600px) {
     padding: 0;
         display: flex;
        padding: 100px 0;
    justify-content: space-between;
    align-items: center;
    flex-basis: 50%;
    .image-container {
        flex-basis: 50%;
    img {
    margin-bottom: 0;
    /* height: 100%; */
    padding-right: 78px;
    }
}
.text-container{
        flex-basis: 50%;
        padding: 0 50px 0 0;
 div {
    max-width: 500px;
    text-align:left;
}
.text-content{
    h2,p{
        text-align:left
    }
    h2{
        font-size:38px;
        margin-bottom:30px;
    }
    p{
        font-size:20px;
        line-height:30px;
        margin-bottom:60px;
    }
}
    .reasons-item{

    :not(:last-child){
        margin-bottom: 40px;
    }
        .icon-container{
            height:30px;
            width:30px;
            margin-right: 14px;
            img{
                height:22px;
                width:26px
            }
        }

        .title{
            font-size:20px;
            margin-bottom:14px;
            }
             .text{
            font-size:16px;
            }
    }
    }
          .signup-link {
            margin-left: 0;
            span{
            font-size:24px
            margin-right:22px;
            }
            img{
                width:24px;
                height:24px;
            }
            }

 @media (min-width: 1024px) {
    .text-container{
 div {
    max-width: 654px;
}
.text-content{

    h2{
        font-size:48px;
        margin-bottom:40px;
    }
    p{
        font-size:24px;
        line-height:34px;
        margin-bottom:72px;
    }
}
    .reasons-item{

    :not(:last-child){
        margin-bottom: 40px;
    }
        .icon-container{
            height:40px;
            width:40px;
            margin-right: 18px;
            img{
                height:32px;
                width:36px
            }
        }

        .title{
            font-size:24px;
            margin-bottom:16px;
            }
             .text{
            font-size:20px;
            }
    }
    }
          .signup-link {
            span{
            font-size:28px
            margin-right:26px;
            }
            img{
                width:28px;
                height:28px;
            }
            }
`;
