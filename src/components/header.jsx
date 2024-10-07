import { Heart } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <div className="space-y-2 border-b py-10 text-center">
            <div className="font-great_vibes flex items-center justify-center space-x-3 text-4xl">
                <span>Văn Vui</span>
                <div className="text-[#c89d9c]">
                    <Heart size={30} />
                </div>
                <span>Ngọc Vẻ</span>
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
