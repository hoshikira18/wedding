import { Heart } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <div className="space-y-2 border-b py-10 text-center">
            <div className="flex translate-x-8 items-center justify-center space-x-3 font-great_vibes text-4xl">
                <span>Hà Hải</span>
                <div className="text-[#c89d9c]">
                    <Heart size={30} />
                </div>
                <span>Phượng Phượng</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <div className="h-[1px] w-10 bg-gray-500"></div>
                <span className="font-comfortaa text-sm text-gray-500">
                    Just Married
                </span>
                <div className="h-[1px] w-10 bg-gray-500"></div>
            </div>
        </div>
    );
};

export default Header;
