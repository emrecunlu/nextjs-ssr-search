import React from "react";
import SearchBar from "./SearchBar";
import { PageProps } from "@/.next/types/app/layout";

const getProducts = async (searchVal: string) => {
    const query: string = searchVal.length > 0 ? "search?q=" + searchVal : "";

    const res = await fetch("https://dummyjson.com/products/" + query, {
        next: {
            revalidate: 60,
        },
    });
    return res.json();
};

export default async function HomePage({ searchParams }: PageProps) {
    const data = await getProducts(searchParams?.search ?? "");

    return (
        <div className="p-2">
            <SearchBar />
            <div className="grid grid-cols-3 gap-4 mt-6">
                {data.products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-md shadow"
                    >
                        <h1 className="text-2xl font-medium">
                            {product.title}
                        </h1>
                        <span className="text-sm text-gray-600">
                            {product.description}
                        </span>
                        <h2 className="mt-4 font-semibold text-lg text-red-600">
                            {product.price}$
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
