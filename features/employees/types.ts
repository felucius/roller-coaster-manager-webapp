export type Employee = {
    id: string;
    name: string;
    position: EmployeePosition;
    salary: number;
}

export enum EmployeePosition {
    Technician = 'Technician',
    Server = 'Server',
}