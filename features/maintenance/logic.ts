import { MAINTENANCE_DATA, MAINTENANCE_CONSUMABLES } from "./catalog";
import { Maintenance } from "./types";

export const getMaintenanceData = (): Maintenance[] =>{
    return MAINTENANCE_DATA;
}

export const getConsumableMaintenanceData = (): Maintenance[] =>{
    return MAINTENANCE_CONSUMABLES;
}