import SearchHeader from './components/Search/SearchHeader'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'

function App() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
            <div className="w-full max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
                <SearchHeader />
                <CurrentWeather />
            </div>
        </div>
    )
}

export default App
