import { MailCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Grid, Masonry } from 'react-visual-grid';
import 'react-visual-grid/dist/react-visual-grid.css';

const images1 = [
    {
        url: '/images/127A0061.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-3 row-span-3',
    },
    {
        url: '/images/127A0007.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-3 row-span-3',
    },
    {
        url: '/images/127A9870.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-2 row-span-2 row-start-4',
    },
    {
        url: '/images/127A9943.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-2 col-start-3 row-span-1',
    },
    {
        url: '/images/127A9768.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-2 col-start-3 row-span-1',
    },
    {
        url: '/images/127A9593.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-2 col-start-5 row-span-2 row-start-4',
    },
    {
        url: '/images/127A9815.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-2 row-span-2',
    },
    {
        url: '/images/127A0221.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-2 col-start-3 row-span-2',
    },
    {
        url: '/images/127A9713.jpg',
        alt: 'wedding-photo',
        properties: 'col-span-2 col-start-5 row-span-2',
    },
];

const images = Array.from({ length: 20 }, (_, index) => ({
    src: `https://picsum.photos/id/${index + 1}/800/600`,
    alt: `Image ${index + 1}`,
}));

const WeddingPhotos = () => {
    return (
        <div
            style={{
                backgroundImage: `url('/bg.png')`,
            }}
            className="py-20 text-center"
        >
            <div
                style={{
                    background: `url('https://weddingba.iwedding.info/templates/template15/images/sec-title-flower.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className="mx-auto h-20 w-40"
            />
            <h2 className="font-great_vibes text-5xl">Wedding Photos</h2>
            <p className="px-56 py-5 text-center font-comfortaa text-lg">
                Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi
                yêu ai đó sâu sắc sẽ cho bạn dũng khí.
            </p>
            <div className="parent mx-auto grid max-w-screen-xl grid-cols-6 grid-rows-7 gap-5 px-52 py-10">
                {images1.map((image, i) => (
                    <div
                        key={i}
                        id={`div-${i + 1}`}
                        className={`${image.properties} min-h-40 rounded-md bg-blue-300 transition-all hover:scale-105`}
                        style={{
                            background: `url('${image.url}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    ></div>
                ))}
            </div>
            <Link
                href=""
                className="mx-auto inline-flex space-x-2 bg-pink p-4 font-comfortaa text-base font-semibold text-white hover:bg-pink/80"
            >
                <MailCheck />
                <span>Xác nhận tham dự</span>
            </Link>
        </div>
    );
};

export default WeddingPhotos;
