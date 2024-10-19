import Link from 'next/link';
import React from 'react';

const EventItem = ({ event }) => {
    return (
        <div className="space-y-5 bg-white p-5 font-comfortaa">
            <p className="text-xl font-semibold uppercase text-black/70">
                {event.title}
            </p>
            <img
                src={event.image}
                alt="event-image"
                className="aspect-square w-full"
            />
            <p>{event.time}</p>
            <p>{event.address}</p>
            <Link
                href={event.map}
                target="_blank"
                className="block w-full rounded-3xl border-2 border-pink py-2 hover:bg-pink/20"
            >
                Xem bản đồ
            </Link>
        </div>
    );
};

export default EventItem;
