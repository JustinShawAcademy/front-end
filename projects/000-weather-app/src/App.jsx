import SearchHeader from './components/Search/SearchHeader'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import WeatherStatsGrid from './components/WeatherStats/WeatherStatsGrid'
import HourlyStatsGrid from './components/HourlyStats/HourlyStatsGrid'
import DailyStatsGrid from './components/DailyStats/DailyStatsGrid'

function App() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
            <div className="w-full max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
                <SearchHeader />
                <CurrentWeather />
                <WeatherStatsGrid /> 
                <HourlyStatsGrid />
                <DailyStatsGrid />
            </div>
        </div>
    )
}

export default App
