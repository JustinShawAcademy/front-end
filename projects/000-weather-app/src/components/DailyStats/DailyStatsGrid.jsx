import React from 'react'

import DailyStatCard from './DailyStatCard'

const forecast = [
    {
        weekDay: 'sat',
        date: '29 MAR 2026',
        minTemp: '3.3°',
        maxTemp: '12.7°',
        img: '',
    },
    {
        weekDay: 'sat',
        date: '29 MAR 2026',
        minTemp: '3.3°',
        maxTemp: '12.7°',
        img: '',
    },
    {
        weekDay: 'sat',
        date: '29 MAR 2026',
        minTemp: '3.3°',
        maxTemp: '12.7°',
        img: '',
    },
]

const DailyStatsGrid = () => {
    return (
        <section className="flex flex-col gap-2 pt-6">
            <h2 className="pl-2 text-xl capitalize">daily forecast</h2>
            <div className="gird-cols-1 grid max-w-full min-w-0 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {forecast.map((day) => (
                    <DailyStatCard key={day.date} {...day} />
                ))}
            </div>
        </section>
    )
}

export default DailyStatsGrid
