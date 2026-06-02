import React from "react";
import {
    LayoutDashboard,
    CheckSquare,
    Users,
    MessageSquare,
    Settings,
    Plus
} from "lucide-react";

const menuItems = [
    {
        name: "Dashboard",
        icon: <LayoutDashboard size={20} />
    },
    {
        name: "Tasks",
        icon: <CheckSquare size={20} />
    },
    {
        name: "Team",
        icon: <Users size={20} />
    },
    {
        name: "Chat",
        icon: <MessageSquare size={20} />
    },
    {
        name: "Settings",
        icon: <Settings size={20} />
    }
];

const Sidebar = () => {
    return (
        <aside
            className="w-64 h-screen flex flex-col border-r"
            style={{
                background: "var(--surface-lowest)",
                borderColor: "var(--border)"
            }}
        >
            <div className="p-6">
                <h1 className="text-2xl font-bold">Synthetix AI</h1>
                <p className="text-sm text-[var(--text-muted)]">
                    Enterprise Workspace
                </p>
            </div>

            <nav className="flex-1 px-4">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition"
                        style={{
                            background:
                                item.name === "Dashboard"
                                    ? "var(--surface-container)"
                                    : "transparent"
                        }}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            <div className="p-4">
                <button
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium"
                    style={{
                        background: "var(--primary-container)",
                        color: "white"
                    }}
                >
                    <Plus size={18} />
                    New Task
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;