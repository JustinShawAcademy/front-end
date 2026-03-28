import React from 'react'

import WeatherStatCard from './WeatherStatCard'

const STATS_DATA = [
    { title: 'Chance of Rain', logo: 'rain', stat: '0%' },
    { title: 'Wind', logo: 'wind', stat: '16.2 km/h' },
    { title: 'Sunrise', logo: 'sunrise', stat: '07:08 AM' },
    { title: 'Sunset', logo: 'sunset', stat: '07:39 PM' },
    { title: 'UV Index', logo: 'uv', stat: '1.4' },
    { title: 'Pressure', logo: 'pressure', stat: '1036 mb' },
    { title: 'Humidity', logo: 'humidity', stat: '59%' },
    { title: 'Gust', logo: 'gust', stat: '20.5 km/h' },
]

const WeatherStatsGrid = () => {
    return (
        <section className="grid grid-cols-1 gap-2 py-2 pl-0 sm:grid-cols-2 md:pl-12 lg:grid-cols-4">
            {STATS_DATA.map((item) => (
                <WeatherStatCard
                    key={item.title}
                    title={item.title}
                    logo={item.logo}
                    stat={item.stat}
                />
            ))}
        </section>
    )
}

export default WeatherStatsGrid
