import React from 'react';
import EventItem from './event-item';

const events = [
    {
        title: 'Lễ cưới nhà Nữ',
        time: new Date().getTime(),
        image: 'https://cdn.biihappy.com/ziiweb/default/website/7744fc9739685fe61c53cd8fe2cf7e52.png',
        address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
        map: 'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
    },
    {
        title: 'Tiệc cưới nhà Nữ',
        time: new Date().getTime(),
        image: 'https://cdn.biihappy.com/ziiweb/default/website/0ea5ba9f2cbe132b3fe488103eb61817.png',
        address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
        map: 'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
    },
    {
        title: 'Lễ cưới nhà Nam',
        time: new Date().getTime(),
        image: 'https://cdn.biihappy.com/ziiweb/default/website/eee1cb36b560f0d80f513c4e9be666db.png',
        address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
        map: 'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
    },
    {
        title: 'Tiệc cưới nhà Nam',
        time: new Date().getTime(),
        image: 'https://cdn.biihappy.com/ziiweb/default/website/21b07b7d583692f49091b87facbf2c92.png',
        address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
        map: 'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
    },
];
const WeddingEvents = () => {
    return (
        <div className="relative bg-pink/30 py-32 text-center">
            {/* Background image with filter */}
            <div className="absolute top-0 bg-contain bg-center brightness-75 filter">
                <img
                    src={`https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/95c640880776793781cf577ef7fbf1f8.jpg`}
                    alt="background-image"
                    className="w-full object-cover object-top"
                />
            </div>
            {/* Content */}
            <div className="relative z-10">
                <p className="font-great_vibes text-5xl font-semibold tracking-widest text-white/80">
                    Cô dâu & Chú rể
                </p>
                <p className="text-center font-comfortaa text-lg text-white">
                    Tình yêu là điều kiện trong đó hạnh phúc của người khác là
                    điều cần thiết cho chính bạn.
                </p>
                <div className="flex items-center justify-around space-x-5 px-60 pt-40">
                    {events.map((e, i) => (
                        <EventItem event={e} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeddingEvents;
