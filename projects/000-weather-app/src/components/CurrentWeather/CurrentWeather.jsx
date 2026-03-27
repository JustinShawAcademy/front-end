import React, { useState } from 'react'

import TempRangeItem from './TempRangeItem'

const CurrentWeather = () => {
    return (
        <section className="pt-4 pr-4">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img
                        src={'./../../public/weather-icons/hail.svg'}
                        alt="weather icon"
                        className="h-32 w-32"
                    />
                    <div className="flex flex-col">
                        <div className="text-5xl">24.7°</div>
                        <div className="text-2xl">Patchy rain nearby</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-8">
                        <TempRangeItem type="min" temp="10" />
                        <TempRangeItem type="max" temp="15" />
                    </div>
                    <p className="pr-2 text-right text-sm text-gray-500">
                        Feels like 20°
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CurrentWeather
