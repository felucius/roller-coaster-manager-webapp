import { EMPLOYEES } from "./catalog";
import { Employee } from "./types";
import { TECHNICIAN_EMPLOYEES } from "./catalog";
import { SERVER_EMPLOYEES } from "./catalog";

export const getEmployees = (): Employee[] => {
    return EMPLOYEES;
}

export const getTechnicianEmployees = (): Employee[] => {
    return TECHNICIAN_EMPLOYEES;
}

export const getServerEmployees = (): Employee[] => {
    return SERVER_EMPLOYEES;
}
