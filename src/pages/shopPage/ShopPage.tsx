'use client'

import Link from "next/link";

const boxStyle = {
    backgroundColor: "#fff",
    width: "300px",
    height: "100px",
    borderRadius: 8,
};


export default function ShopPage() {
    const products = [
        { id: 1, name: "Товар 1" },
        { id: 2, name: "Товар 2" },
    ];

    return (
        <div>
            <h2>Все товары</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}