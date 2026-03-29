import React from 'react'

const DailyStatCard = ({ weekDay, date, minTemp, maxTemp, img }) => {
    return (
        <div className="flex items-center gap-2 rounded-xl transition-colors duration-200 hover:bg-slate-50">
            <img
                src={'./../../public/weather-icons/hail.svg'}
                alt="weather icon"
                className="h-30 w-30"
            />
            <div className="flex flex-col">
                <p className="text-base uppercase">{weekDay}</p>
                <p className="text-xs">{date}</p>
                <div className="flex gap-4">
                    <div className="flex flex-col text-3xl">
                        {minTemp}
                        <p className="text-sm">min</p>
                    </div>
                    <div className="flex flex-col text-3xl">
                        {maxTemp}
                        <p className="text-sm">max</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyStatCard
