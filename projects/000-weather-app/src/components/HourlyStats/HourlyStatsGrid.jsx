import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import HourlyStatCard from './HourlyStatCard'

const forecast = [
    {
        day: 'Today',
        hour: '11:00',
        img: '',
        disc: 'Partly Cloudy',
        temp: '2°',
        rainProb: '0%',
        wind: '22.7 kph',
    },
    {
        day: 'Today',
        hour: '12:00',
        img: '',
        disc: 'Partly Cloudy',
        temp: '3.1°',
        rainProb: '0%',
        wind: '22.7 kph',
    },
    {
        day: 'Today',
        hour: '13:00',
        img: '',
        disc: 'Partly Cloudy',
        temp: '4.1°',
        rainProb: '0%',
        wind: '24.8 kph',
    },
    {
        day: 'Today',
        hour: '14:00',
        img: '',
        disc: 'Overcast',
        temp: '4.7°',
        rainProb: '0%',
        wind: '26.6 kph',
    },
    {
        day: 'Today',
        hour: '15:00',
        img: '',
        disc: 'Overcast',
        temp: '5°',
        rainProb: '0%',
        wind: '27.7 kph',
    },
    {
        day: 'Today',
        hour: '16:00',
        img: '',
        disc: 'Overcast',
        temp: '5.1°',
        rainProb: '0%',
        wind: '25.9 kph',
    },
    {
        day: 'Today',
        hour: '17:00',
        img: '',
        disc: 'Overcast',
        temp: '4.9°',
        rainProb: '0%',
        wind: '23.4 kph',
    },
    {
        day: 'Today',
        hour: '18:00',
        img: '',
        disc: 'Sunny',
        temp: '4.5°',
        rainProb: '0%',
        wind: '23.8 kph',
    },
    {
        day: 'Today',
        hour: '19:00',
        img: '',
        disc: 'Sunny',
        temp: '3.2°',
        rainProb: '0%',
        wind: '20.9 kph',
    },
    {
        day: 'Today',
        hour: '20:00',
        img: '',
        disc: 'Partly Cloudy',
        temp: '2.6°',
        rainProb: '0%',
        wind: '18.7 kph',
    },
]

const HourlyStatsGrid = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        // Function to update the width
        const updateWidth = () => {
            if (carousel.current) {
                // We subtract the visible width from the total content width
                setWidth(
                    carousel.current.scrollWidth - carousel.current.offsetWidth,
                )
            }
        }
        // Initial call
        updateWidth()
        // Update if window is resized
        window.addEventListener('resize', updateWidth)
        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    return (
        <section className="flex flex-col gap-2 pt-2">
            <h2 className="pl-2 text-xl capitalize">hourly forecast</h2>
            <motion.div
                ref={carousel}
                className="custom-scrollbar cursor-grab overflow-hidden select-none"
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    dragElastic={0.1}
                    className="flex flex-nowrap gap-3"
                >
                    {forecast.map((hour, index) => (
                        <HourlyStatCard key={index} {...hour} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HourlyStatsGrid
