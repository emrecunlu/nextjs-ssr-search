"use client";
import { useRouter } from "next/navigation";

import React from "react";

export default function SearchBar() {

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 1) {
            router.push("?search=" + e.target.value);
            return;
        }

        router.push("");
    };

    return (
        <div className="w-full max-w-lg ml-auto">
            <input
                onChange={handleChange}
                className="h-12 px-4 w-full bg-gray-200 rounded-md outline-none"
                type="text"
                name=""
                id=""
                placeholder="Search...."
            />
        </div>
    );
}
