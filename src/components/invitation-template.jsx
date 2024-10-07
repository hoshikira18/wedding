'use client';
import React from 'react';
import Header from './header';
import Navigation from './navigation';
import Banner from './banner';

const InvitationTemplate = ({ name }) => {
    return (
        <div>
            <Header />
            <Navigation />
            <Banner />
        </div>
    );
};

export default InvitationTemplate;
