import React from 'react';
import CountDown from './countdown';

const Time = () => {
    // Create the array for the days of the week and days of the month
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // For November 2024

    // Function to render calendar rows dynamically
    const renderCalendarRows = () => {
        const rows = [];
        let currentWeek = new Array(7).fill(null);

        daysInMonth.forEach((day, index) => {
            const weekIndex = (index + 5) % 7; // Assuming November 1st is a Friday (i.e., 5th index)

            currentWeek[weekIndex] = day;

            if (weekIndex === 6 || index === daysInMonth.length - 1) {
                rows.push([...currentWeek]); // Push a copy of the current week to the rows
                currentWeek = new Array(7).fill(null); // Reset the week
            }
        });

        return rows;
    };

    return (
        <div
            className="px-40 py-32"
            style={{
                backgroundImage: `url('/bg.png')`,
            }}
        >
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center justify-center space-x-10">
                {/* Left Column: Save the Date Section */}
                <div className="relative h-full w-full bg-white p-12">
                    <div className="flex h-full flex-col items-center justify-center space-y-8 border-4 border-[#cdc2c2] px-5 py-5">
                        <span className="font-great_vibes text-5xl">
                            Save the Date
                        </span>
                        <div className="flex flex-col items-center justify-center space-y-3 text-center font-comfortaa">
                            <span className="text-base text-black/70">
                                For the wedding of
                            </span>
                            <span className="text-2xl font-bold text-black/90">
                                Hà Hải & P. Phượng
                            </span>
                            <p>
                                Một lời chúc của bạn chắc chắn sẽ làm cho đám
                                cưới của chúng tôi có thêm một niềm hạnh phúc!
                            </p>
                            <a href="/" className="block p-5 underline">
                                Gửi lời chúc
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Calendar Section */}
                <div className="h-full w-full bg-white p-12">
                    <div className="flex flex-col items-center justify-center space-y-8 border-4 border-[#cdc2c2] px-5 py-5">
                        <table className="w-full font-comfortaa">
                            <caption className="pb-3 text-lg font-bold">
                                NOVEMBER / 2024
                            </caption>
                            <thead>
                                <tr className="border-b border-t border-gray-300 bg-gray-100">
                                    {daysOfWeek.map((day) => (
                                        <th key={day} className="py-2">
                                            {day}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="text-center text-gray-700">
                                {renderCalendarRows().map((week, weekIndex) => (
                                    <tr key={weekIndex} className="h-12">
                                        {week.map((day, dayIndex) => (
                                            <th
                                                key={dayIndex}
                                                className={`cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-600 ${day === 10 ? 'bg-blue-100 text-blue-500 hover:bg-blue-100' : ''} ${
                                                    day ? 'font-semibold' : ''
                                                }`}
                                            >
                                                {day || ''}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <CountDown targetTime={new Date('2024-11-10T23:59:59')} />
        </div>
    );
};

export default Time;
