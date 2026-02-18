import { Employee } from "./types";
import { EmployeePosition } from "./types";

export const EMPLOYEES: Employee[] = [
    {
        id: crypto.randomUUID(),
        name: 'Technician',
        position: EmployeePosition.Technician,
        salary: 1500,
    },
    {
        id: crypto.randomUUID(),
        name: 'Technician',
        position: EmployeePosition.Technician,
        salary: 1500,
    },
    {
        id: crypto.randomUUID(),
        name: 'Server',
        position: EmployeePosition.Server,
        salary: 1000,
    },
    {
        id: crypto.randomUUID(),
        name: 'Server',
        position: EmployeePosition.Server,
        salary: 1000,
    },
];


export const TECHNICIAN_EMPLOYEES: Employee[] = [
    {
        id: crypto.randomUUID(),
        name: 'Technician',
        position: EmployeePosition.Technician,
        salary: 1500,
    }
]

export const SERVER_EMPLOYEES: Employee[] = [
    {
        id: crypto.randomUUID(),
        name: 'Server',
        position: EmployeePosition.Server,
        salary: 1000,
    }
]