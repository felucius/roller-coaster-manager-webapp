import { CUSTOMERS } from "./catalog";
import { Customer } from "./types";

export const getCustomers = (): Customer[] => {
    return CUSTOMERS;
};