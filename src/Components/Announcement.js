export function Announcement({text}) {
    return (
        <div className="bg-indigo-600 px-4 py-3 text-white">
            <p className="text-center text-sm font-medium">
                {text}
            </p>
        </div>
    )
}