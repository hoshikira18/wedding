import { useCountdown } from '@/app/hook/useCountdown';
import React, { useEffect, useState } from 'react';

const CountDown = ({ targetTime }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetTime);

    return (
        <div className="flex items-center justify-center space-x-16 pt-20">
            <div className="text-center">
                <div className="font-great_vibes text-8xl font-medium text-pink">
                    {days}
                </div>
                <div className="font-comfortaa text-lg font-semibold text-pink">
                    Ngày
                </div>
            </div>
            <div className="text-center">
                <div className="font-great_vibes text-8xl font-medium text-pink">
                    {hours < 10 ? '0' + hours : hours}
                </div>
                <div className="font-comfortaa text-lg font-semibold text-pink">
                    Giờ
                </div>
            </div>
            <div className="text-center">
                <div className="font-great_vibes text-8xl font-medium text-pink">
                    {minutes < 10 ? '0' + minutes : minutes}
                </div>
                <div className="font-comfortaa text-lg font-semibold text-pink">
                    Phút
                </div>
            </div>
            <div className="text-center">
                <div className="font-great_vibes text-8xl font-medium text-pink">
                    {seconds < 10 ? '0' + seconds : seconds}
                </div>
                <div className="font-comfortaa text-lg font-semibold text-pink">
                    Giây
                </div>
            </div>
        </div>
    );
};

export default CountDown;
