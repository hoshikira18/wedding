'use client';
import React from 'react';
import Header from './header';
import Navigation from './navigation';
import Banner from './banner';
import Time from './time';
import Couple from './couple';
import WeddingPhotos from './wedding-photos';
import WeddingEvents from './wedding-events';
import HappyWedding from './happy-wedding';

const InvitationTemplate = ({ name }) => {
    return (
        <div>
            <Header />
            <Navigation />
            <Banner />
            <Time />
            <Couple />
            <WeddingPhotos />
            <WeddingEvents />
            <HappyWedding />
        </div>
    );
};

export default InvitationTemplate;
