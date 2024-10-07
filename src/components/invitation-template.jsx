'use client';
import React from 'react';
import Header from './header';
import Navigation from './navigation';
import Banner from './banner';
import Time from './time';

const InvitationTemplate = ({ name }) => {
    return (
        <div>
            <Header />
            <Navigation />
            <Banner />
            <Time />
        </div>
    );
};

export default InvitationTemplate;
