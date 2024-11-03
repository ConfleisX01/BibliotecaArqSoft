export default function Modal({ bookRoute }) {
    return (
        <>
            <dialog id="my_modal_1" className="modal h-auto w-auto p-5">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
                <div>
                    <iframe
                        width={500}
                        height={500}
                        src={bookRoute}
                    />
                </div>
            </dialog>
        </>
    )
}