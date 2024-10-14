import { Heart } from 'lucide-react';
import React from 'react';

const images = [
    {
        link: 'https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/cde33ed0f326a6a1dce7cecfd64a2892.jpg',
        alt: 'banner-image',
    },
    {
        link: 'https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/c3d27a123d944f20a89f69d7d40a4bb0.jpg',
        alt: 'banner-image',
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="">
            <div className="relative">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-center space-y-5">
                    <div className="flex items-center justify-center space-x-10 font-great_vibes text-7xl font-medium text-white/90">
                        <span>Văn Vui</span>
                        <div className="text-[#c89d9c]">
                            <Heart size={50} />
                        </div>
                        <span>Ngọc Vẻ</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-white/90">
                        <div className="h-[1px] w-10 bg-white/80"></div>
                        <span className="font-comfortaa text-xl tracking-widest">
                            10 tháng 11 2024
                        </span>
                        <div className="h-[1px] w-10 bg-white/80"></div>
                    </div>
                </div>
                <div
                    className="h-[90vh] w-full bg-cover bg-center duration-500"
                    style={{
                        backgroundImage: `url(${images[currentIndex].link})`,
                    }}
                />
            </div>
        </div>
    );
};

export default Banner;
