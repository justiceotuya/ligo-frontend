import styled from 'styled-components';

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
