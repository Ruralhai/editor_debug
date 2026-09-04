import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({
    children,
    className = "",
}: CardProps) {
    return (
        <div
            className={`
        rounded-2xl
        border
        border-slate-700
        bg-slate-900/80
        backdrop-blur-md
        shadow-xl
        hover:border-blue-500/40
        hover:shadow-blue-500/10
        transition-all
        duration-300
        ${className}
      `}
        >
            {children}
        </div>
    );
}
