import { useEffect, useState } from "react"

export default function Toast({ message, type }) {
    const [isHidden, setIsHidden] = useState(false)
    
    useEffect(() => {
        setInterval(() => {
            setIsHidden(true)
        }, 3000);
    }, [])

    return (
        <div
            className={`alert shadow-sm border cursor-pointer ${
                isHidden ? 'hidden' :
                type === 'error' ? 'bg-red-200' :
                type === 'info' ? 'bg-blue-200' :
                type === 'success' ? 'bg-green-200' :
                'bg-gray-200'
            }`}
            onClick={() => setIsHidden(true)}
        >
            <span
                className={`font-semibold ${
                    type === 'error' ? 'text-red-500' :
                    type === 'info' ? 'text-blue-500' :
                    type === 'success' ? 'text-green-500' :
                    ''
                }`}
            >
                {message}.
            </span>
        </div>
    )
}
