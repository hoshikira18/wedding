'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const InvitationTemplate = ({ name }) => {
    return (
        <div>
            <section className="">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1.05, 1],
                        rotate: [0, 0, 30, -30, 0],
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 0.5,
                    }}
                    className="mx-auto my-10 aspect-square w-1/3 overflow-hidden rounded-full"
                >
                    <Image
                        src={
                            'https://w.ladicdn.com/s850x1150/5c728619c417ab07e5194baa/610915a2-612e-4b4b-8c11-f5f01e4bdb21-20240115124609-u7jnd.jpg'
                        }
                        width={500}
                        height={500}
                        alt="main-image"
                        className="h-full w-full object-cover object-top"
                    />
                </motion.div>
            </section>
            test
        </div>
    );
};

export default InvitationTemplate;
