import { Customer } from "./types";

export const CUSTOMERS: Customer[] = [
    {
        id: crypto.randomUUID(),
        name: "Customer -" + crypto.randomUUID().slice(0, 5),
        money: 100,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
    },
    {
        id: crypto.randomUUID(),
        name: "Customer -" + crypto.randomUUID().slice(0, 5),
        money: 200,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
    },
];