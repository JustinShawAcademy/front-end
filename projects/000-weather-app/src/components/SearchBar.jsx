import React, { useState } from 'react'
import { Search, Settings } from 'lucide-react'

const SearchBar = () => {
    const [userQuery, setUserQuery] = useState('')

    const handleChange = (e) => {
        const value = e.target.value
        setUserQuery(value)

        if (value.length > 2) {
            console.log(value)
            // api suggestion here
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log()
    }

    return (
        <section className="flex items-center gap-4">
            <form
                onSubmit={handleSearch}
                className="flex flex-1 items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-gray-200"
            >
                <Search className="shrink-0 text-gray-400" />
                <input
                    type="text"
                    onChange={handleChange}
                    name="location"
                    placeholder="Toronto"
                    aria-label="Add location"
                    className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-300"
                />
            </form>
            <button className='bg-gray-100 p-3 rounded-full cursor-pointer hover:brightness-95 transition duration-200'>
                <Settings className="shrink-0 text-gray-400" />
            </button>
            
        </section>
    )
}

export default SearchBar
