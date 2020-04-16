import React from 'react';
import { LigoAboutCardsSection } from './LigoAboutCardsSection';
import { LigoHeroSection } from './LigoHeroSection';
import { LigoReasonsSection } from './LigoReasonsSection';
import { LigoLastSection } from './LigoLastSection';
import { LigoFooter } from './LigoFooter';

export const Home = () => (
    <div>
        <LigoHeroSection />
        <LigoAboutCardsSection />
        <LigoReasonsSection />
        <LigoLastSection />
        <LigoFooter />
    </div>
);
