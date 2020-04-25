import React from 'react';
import styled from 'styled-components';
import { LigoAboutCardsSection } from './LigoAboutCardsSection';
import { LigoHeroSection } from './LigoHeroSection';
import { LigoReasonsSection } from './LigoReasonsSection';
import { LigoLastSection } from './LigoLastSection';
import { LigoFooter } from './LigoFooter';

const LigoHomePage = styled.main`
    margin:0;
    max-width:1990px;
`;

export const Home = () => (
    <LigoHomePage>
        <LigoHeroSection />
        <LigoAboutCardsSection />
        <LigoReasonsSection />
        <LigoLastSection />
        <LigoFooter />
    </LigoHomePage>
);
