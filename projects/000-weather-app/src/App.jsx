import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
        <SearchBar />
      </div>
    </div>
  )
}

export default App
