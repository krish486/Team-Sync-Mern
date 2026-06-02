import React from "react";
import {
    Bell,
    Search,
    Grid3X3
} from "lucide-react";

const Navbar = () => {
    return (
        <header
            className="h-20 px-6 flex items-center justify-between border-b"
            style={{
                background: "var(--surface)",
                borderColor: "var(--border)"
            }}
        >
            <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl w-[500px]"
                style={{
                    background: "var(--surface-container)"
                }}
            >
                <Search size={18} />
                <input
                    type="text"
                    placeholder="Search workspace..."
                    className="bg-transparent outline-none w-full"
                />
            </div>

            <div className="flex items-center gap-5">
                <Bell size={20} />
                <Grid3X3 size={20} />

                <img
                    src="https://i.pravatar.cc/40"
                    alt=""
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </header>
    );
};

export default Navbar;