'use client';
import React from 'react';
import Header from './header';
import Navigation from './navigation';
import Banner from './banner';
import Time from './time';
import Couple from './couple';

const InvitationTemplate = ({ name }) => {
    return (
        <div>
            <Header />
            <Navigation />
            <Banner />
            <Time />
            <Couple />
        </div>
    );
};

export default InvitationTemplate;
