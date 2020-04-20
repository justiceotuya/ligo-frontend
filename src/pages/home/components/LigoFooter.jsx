import React from 'react';
import { StyledFooterContainer } from '../styles';
import { strings, footerLinks } from '../constants';

const { COPYRIGHT } = strings;

export const LigoFooter = () => (
    <StyledFooterContainer>
        <p>{COPYRIGHT}</p>
        <div>
            {
                footerLinks.map(item => {
                    const { image, links, name } = item;
                    return (
                        <a href={links} key={name}>
                            <img src={image} alt={name} className="image" loading="lazy"/>
                        </a>
                    );
                })
            }
        </div>
    </StyledFooterContainer>
);
