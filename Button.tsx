import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const base =
        "px-5 py-2.5 rounded-xl font-medium transition-all duration-200";

    const styles = {
        primary:
            "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300",
        secondary:
            "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600",
    };

    return (
        <button
            onClick={onClick}
            className={`${base} ${styles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

