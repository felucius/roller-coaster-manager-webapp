
export type Maintenance = {
    id: string;
    rideId?: string; // Optional, if maintenance is specific to a ride
    consumableId?: string; // Optional, if maintenance involves a consumable item
    title: string;
    repairAction: RidesMaintenanceAction | ConsumablesMainetenanceAction;
    cost: number;
    startDate: string;
    endDate: string;
    status: MaintenanceStatus;
}

export const MaintenanceStatus = {
    SCHEDULED: 'scheduled',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed'
} as const;

export type MaintenanceStatus = typeof MaintenanceStatus[keyof typeof MaintenanceStatus];

export const RidesMaintenanceAction = {
    OIL_CHANGE: {
        label: 'Oil Change',
        cost: 1000
    },
    TIRE_ROTATION: {
        label: 'Tire Rotation',
        cost: 2000
    },
    BRAKE_INSPECTION: {
        label: 'Brake Inspection',
        cost: 3000
    },
    BATTERY_REPLACEMENT: {
        label: 'Battery Replacement',
        cost: 4000
    },
    ENGINE_TUNING: {
        label: 'Engine Tuning',
        cost: 5000
    }
} as const;

export type RidesMaintenanceAction = typeof RidesMaintenanceAction[keyof typeof RidesMaintenanceAction];

export const ConsumablesMainetenanceAction = {
    CASH_REGISTER_REPAIR: {
        label: 'Cash Register Repair',
        cost: 500
    },
    RESTOCK_SUPPLIES: {
        label: 'Restock Supplies',
        cost: 200
    },
    CLEANING: {
        label: 'Cleaning',
        cost: 100
    }
} as const;

export type ConsumablesMainetenanceAction = typeof ConsumablesMainetenanceAction[keyof typeof ConsumablesMainetenanceAction];