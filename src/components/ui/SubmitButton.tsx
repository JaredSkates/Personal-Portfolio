"use client";

import { useFormStatus } from "react-dom";


export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type='submit' disabled={pending} className="p-4 bg-[#908484] w-[168px] h-[168px] rounded-[100%] self-center hover:bg-stone-600 active:bg-slate-500 sm:self-end">
            Send!
        </button>
    )
}