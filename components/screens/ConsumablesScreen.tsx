"use client";

import { getPurhaseableConsumables } from "@/features/consumables/logic";

export default function Consumables() {
    return (
        <main>
            <h1>Food & Drinks</h1>
            <p>Purchase new food and drink stalls.</p>
            <ul>
                {getPurhaseableConsumables().map((consumable) => (
                    <li key={consumable.id}>
                        <h2>{consumable.name} - ${consumable.buildCost}</h2>
                    </li>
                ))}
            </ul>
        </main>
    );
}