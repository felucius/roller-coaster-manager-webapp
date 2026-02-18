import { Ride } from "./types";

export const RIDE_CATALOG: Ride[] = [
    {
        id: crypto.randomUUID(),
        name: "Wooden Roller Coaster",
        ticketPrice: 5,
        buildCost: 10000,
        excitement: 7,
        intensity: 5,
        nausea: 3
    },
    {
        id: crypto.randomUUID(),
        name: "Steel Roller Coaster",
        ticketPrice: 8,
        buildCost: 20000,
        excitement: 9,
        intensity: 8,
        nausea: 6
    },
    {
        id: crypto.randomUUID(),
        name: "Ferris Wheel",
        ticketPrice: 3,
        buildCost: 5000,
        excitement: 4,
        intensity: 2,
        nausea: 1
    },
    {
        id: crypto.randomUUID(),
        name: "Haunted House",
        ticketPrice: 4,
        buildCost: 8000,
        excitement: 6,
        intensity: 4,
        nausea: 2
    },
    {
        id: crypto.randomUUID(),
        name: "Bumper Cars",
        ticketPrice: 2,
        buildCost: 3000,
        excitement: 5,
        intensity: 3,
        nausea: 1
    }
];