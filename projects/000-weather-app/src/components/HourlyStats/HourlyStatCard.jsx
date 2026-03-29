import React from 'react'

import { Thermometer, CloudRain, Wind, Sun } from 'lucide-react'

const HourlyStatCard = ({ day, hour, img, disc, temp, rainProb, wind }) => {
    return (
        <div className="flex min-w-32 flex-col items-center gap-1 rounded-xl py-2 hover:bg-slate-50 transition-colors duration-200">
            <p>{day}</p>
            <p>{hour}</p>
            <Sun />
            <p>{disc}</p>
            <div className="flex">
                <Thermometer />
                {temp}
            </div>
            <div className="flex">
                <CloudRain />
                {rainProb}
            </div>
            <div className="flex">
                <Wind />
                {wind}
            </div>
        </div>
    )
}

export default HourlyStatCard
