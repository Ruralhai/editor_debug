interface BadgeProps {
    children: React.ReactNode;
}

export default function Badge({
    children,
}: BadgeProps) {
    return (
        <span className="rounded-full bg-blue-500/15 text-blue-400 px-3 py-1 text-xs font-medium">
            {children}
        </span>
    );
}
