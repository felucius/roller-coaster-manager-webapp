import { Customer } from "./types";

export const CUSTOMERS: Customer[] = [
    {
        id: crypto.randomUUID(),
        name: "Customer -" + crypto.randomUUID().slice(0, 5),
        money: 100,
        funScore: 0,
        scareScore: 0,
        nauseaScore: 0,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
    },
    {
        id: crypto.randomUUID(),
        name: "Customer -" + crypto.randomUUID().slice(0, 5),
        money: 200,
        funScore: 0,
        scareScore: 0,
        nauseaScore: 0,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
    },
];