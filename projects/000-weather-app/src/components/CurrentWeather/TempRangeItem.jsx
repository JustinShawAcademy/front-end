import React from 'react'

import { MoveDown, MoveUp } from 'lucide-react'

const TempRangeItem = ({ type, temp }) => {
    const isMin = type === 'min' ? true : false

    return (
        <div className="flex items-center gap-1">
            {isMin ? <MoveDown /> : <MoveUp />}
            <div>
                <p className="text-right text-sm">{type.toUpperCase()}</p>
                <p className="text-4xl">{temp}°</p>
            </div>
        </div>
    )
}

export default TempRangeItem
