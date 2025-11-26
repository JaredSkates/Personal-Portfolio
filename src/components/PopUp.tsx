"use client";

// onClose arugment -> Allows us to pass a void function from other components
export function PopUp({onClose} : {onClose: () => void}) {
    return(
        <div className="absolute border border-black text-center flex flex-col justify-around h-[350px] w-[500px] bg-stone-200">
            <span className="text-stone-500 text-3xl font-bold">Success!</span>

            <button onClick={onClose} className="text-black">X</button>
        </div>
    )
}