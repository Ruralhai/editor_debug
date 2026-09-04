import React from "react";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export default function Input({
    className = "",
    ...props
}: InputProps) {
    return (
        <input
            {...props}
            className={`
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        px-4
        py-3
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        duration-200
        focus:border-blue-500
        ${className}
      `}
        />
    );
}
