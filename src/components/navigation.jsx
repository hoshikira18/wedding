import React from 'react';

const navItems = [
    {
        title: 'Cặp đôi',
        href: '/',
    },
    {
        title: 'Chuyện tình yêu',
        href: '/',
    },
    {
        title: 'Album Hình Cưới',
        href: '/',
    },
    {
        title: 'Phù Dâu & Phù Rể',
        href: '/',
    },
    {
        title: 'Sự kiện cưới',
        href: '/',
    },
];

const Navigation = () => {
    return (
        <div>
            <ul className="font-comfortaa flex items-center justify-center space-x-10 py-4 font-semibold shadow">
                {navItems.map((item, index) => (
                    <li key={index} className="hover:text-[#c89d9c]">
                        <a href={item.href}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
