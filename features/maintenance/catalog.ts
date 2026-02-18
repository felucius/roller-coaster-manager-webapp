import { ConsumablesMainetenanceAction, Maintenance, RidesMaintenanceAction } from "./types";
import { MaintenanceStatus } from "./types";

export const MAINTENANCE_DATA: Maintenance[] = [
    {
        id: crypto.randomUUID(),
        rideId: 'ride-1',
        title: RidesMaintenanceAction.OIL_CHANGE.label,
        repairAction: RidesMaintenanceAction.OIL_CHANGE,
        cost: RidesMaintenanceAction.OIL_CHANGE.cost,
        startDate: '2024-07-01',
        endDate: '2024-07-01',
        status: MaintenanceStatus.SCHEDULED
    },
    {
        id: crypto.randomUUID(),
        rideId: 'ride-2',
        title: RidesMaintenanceAction.TIRE_ROTATION.label,
        repairAction: RidesMaintenanceAction.TIRE_ROTATION,
        cost: RidesMaintenanceAction.TIRE_ROTATION.cost,
        startDate: '2024-07-05',
        endDate: '2024-07-05',
        status: MaintenanceStatus.IN_PROGRESS
    }
];

export const MAINTENANCE_CONSUMABLES: Maintenance[] = [
    {
        id: crypto.randomUUID(),
        consumableId: 'consumable-1',
        title: ConsumablesMainetenanceAction.RESTOCK_SUPPLIES.label,
        repairAction: ConsumablesMainetenanceAction.RESTOCK_SUPPLIES,
        cost: ConsumablesMainetenanceAction.RESTOCK_SUPPLIES.cost,
        startDate: '2024-07-01',
        endDate: '2024-07-01',
        status: MaintenanceStatus.SCHEDULED
    },
    {
        id: crypto.randomUUID(),
        consumableId: 'consumable-2',
        title: ConsumablesMainetenanceAction.CLEANING.label,
        repairAction: ConsumablesMainetenanceAction.CLEANING,
        cost: ConsumablesMainetenanceAction.CLEANING.cost,
        startDate: '2024-07-02',
        endDate: '2024-07-02',
        status: MaintenanceStatus.COMPLETED 
    }
];