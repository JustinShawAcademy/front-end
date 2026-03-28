import React from 'react'

import {
    CloudRain,
    Wind,
    Sunrise,
    Sunset,
    Flame,
    WindArrowDown,
    Droplet,
    Fan,
} from 'lucide-react'

const icons = {
    rain: <CloudRain />,
    wind: <Wind />,
    sunrise: <Sunrise />,
    sunset: <Sunset />,
    uv: <Flame />,
    pressure: <WindArrowDown />,
    humidity: <Droplet />,
    gust: <Fan />,
}

const WeatherStatCard = ({ title, logo, stat }) => {
    return (
        <div className="flex items-center gap-4 rounded-2xl p-2 transition-colors duration-200 hover:bg-slate-50">
            {icons[logo]}
            <div className="flex flex-col">
                <h3 className="text-base text-slate-700 capitalize">{title}</h3>
                <p className="text-sm">{stat}</p>
            </div>
        </div>
    )
}

export default WeatherStatCard
