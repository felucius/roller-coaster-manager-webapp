"use client";

import { getConsumableMaintenanceData, getMaintenanceData } from "@/features/maintenance/logic";

export default function MaintenanceScreen() {
  return (
    <main>
      <h1>Maintenance</h1>
      <p>Manage ride inspections and repairs.</p>

      <h2>All rides</h2>
        <ul>
          {getMaintenanceData().map((maintenance) => (
            <li key={maintenance.id}>
              <strong>{maintenance.title}</strong> - {maintenance.repairAction.label} - ${maintenance.cost} - Status: {maintenance.status}
            </li>
          ))}
        </ul>

      <h2>All food and drinks</h2>
        <ul>
          {getConsumableMaintenanceData().map((maintenance) => (
            <li key={maintenance.id}>
              <strong>{maintenance.title}</strong> - {maintenance.repairAction.label} - ${maintenance.cost} - Status: {maintenance.status}
            </li>
          ))}
        </ul>
    </main>
  );
}