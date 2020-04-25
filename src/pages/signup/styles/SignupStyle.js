import styled from 'styled-components';
import riders from '../../../assets/riders.png';
import driver from '../../../assets/driver-on-wheel.png';

export const StyledContainer = styled.main`
display:block;
height: 100vh;
margin: 0 auto;
max-width: 1990px;
@media screen and (min-width: 1024px){
    display: flex;
    align-items: center;
}
`;
export const StyledPictureContainer = styled.section`
display:none;
@media screen and (min-width: 1024px){
    display: block;
    flex-basis: 50%;
    height:100%;
    width:100%;
    background: url(${props => (props.selected === 'rider' ? riders : driver)}) rgba(0, 61, 162, 1);
  background-size:cover;
  background-position:center;
  background-blend-mode: multiply;
  background-repeat: repeat;
  transition: all .2s ease-in;
position: relative;
overflow:hidden;
  .home-logo{
        width: 72px;
        height: 72px;
        position: absolute;
        top:5%;
        left:5%;
    }
  .drive-with-ligo, .take-ride-with-ligo{
      position: absolute;
      bottom:72px;
      right:1%;
      color: #fff;
      max-width:414px;
      h2{
          font-size: 64px;
          line-height: 74px;
      }
      p{
           font-size: 28px;
          line-height: 48px;
      }
  }

.drive-with-ligo{
    visibility: ${props => (props.selected === 'rider' ? 'visible' : 'hidden')};
    opacity: ${props => (props.selected === 'rider' ? '1' : '0')};
    transform: ${props => (props.selected === 'rider' ? 'scale(1)' : 'scale(0)')};
    bottom: ${props => (props.selected === 'rider' ? '72px' : '300px')};
    right: ${props => (props.selected === 'rider' ? '1%' : '300px')};
    transition:all .2s ease-in-out .3s;
}
.take-ride-with-ligo{
    visibility: ${props => (props.selected !== 'rider' ? 'visible' : 'hidden')};
    opacity: ${props => (props.selected !== 'rider' ? '1' : '0')};
    bottom: ${props => (props.selected !== 'rider' ? '72px' : '-720px')};
    transition:bottom .2s ease-in-out .2s, opacity .3s ease-in .3s, visibility .2s ease-in .2s;
}
}
`;
export const StyledFormContainer = styled.section`
.form-header{
    display:none
}
@media screen and (min-width: 1024px){
    flex-basis: 50%;
    .form-header{
        display:block;
        font-size:32px;
        color:#707070;
        text-align:center;
        margin-bottom: 56px;
    }
}
`;
export const StyledHeader = styled.div`
 clip-path: ellipse(68% 80% at 50% 0%);
  height: 40vh;
  background-color: #002F7E;
      padding: 20px 35px 0 35px;

  img{
width:72px;
height: 72px;
margin-bottom: 35px
  }
  p {
      font-size: 18px;
      color:#fff;
      text-align:center;
      font-weight:500;
  }

  @media screen and (min-width: 768px){
      height: 30vh;
        p {
font-size: 22px
        }
  }
  @media screen and (min-width: 1024px){
     display:none
  }
`;
export const StyledSelector = styled.div`
    display: flex;
    width: 90%;
    max-width: 260px;
    justify-content: space-between;
    text-align: center;
    margin: 0 auto;
    border-bottom: 1px solid #4285F4;
    height: 32px;
    position:relative;

::after{
    display: table;
    content:"";
    width: 50%;
    height: 5px;
    background-color:#4285F4;
    position:absolute;
    bottom:-2.5px;
    left:${props => (props.selected === 'driver' ? '50%' : '0')};
    transition: left .2s ease-in-out;
}

.rider,
.driver {
    padding:0 20px;
    cursor:pointer
}
    p{
        font-size: 16px;
        color: #707070;
    }

      @media screen and (min-width: 768px){
              max-width: 350px
       p{
        font-size: 20px;
        color: #707070;
    }
  }
`;
export const StyledForm = styled.form`

    width: 90%;
    max-width: 347px;
    margin: 30px auto;

    .form-field{
       position: relative;
   margin-bottom: 52px;
height: 50px;
z-index:0;

&:last-of-type{
      margin-bottom: 40px;
}


    input{
 padding: 15px 10px 15px 50px;
    border-radius: 10px;
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    z-index: -1;
    background: #EDEDED;
    border: none;
    outline: none;
    color:#4285F4;

    ::placeholder {
        color:#A5A5A5;
        text-transform:capitalize;
    }
    }

    label{
        img{
            position: absolute;
     top: 15px;
    left: 20px;
      z-index: 0;
        }
    }

    input:focus,
    input:active {
        border:1px solid #4285F4;
    }

    input:focus body,
    input:active body {
       background: blue;
    }
    }

          @media screen and (min-width: 768px){
   max-width: 450px;
    margin: 30px auto;
    font-size: 20px;
  }

  .form-field{
  label {
      img {
              top: 19px;
      }
  }
}
`;
export const StyleSignupButton = styled.button`
margin: auto;
    display: block;
   padding:12px 36px;
    background: #4285F4;
    color: #fff;
    border-radius: 10px;
    border: none;
    font-size: 16px;

    &[disabled]{
        color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    cursor: not-allowed;
    }

      @media screen and (min-width: 768px){
           padding:22px 91px;
           font-size: 20px;
      }
`;
