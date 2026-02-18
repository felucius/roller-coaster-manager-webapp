"use client";

import { getPurhaseableRides } from "@/features/rides/logic";

export default function RidesScreen() {
  const rides = getPurhaseableRides();

  return (
    <main>
      <h1>Rides</h1>
      <p>Purchase new rides.</p>

      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>
            <h2>{ride.name} - ${ride.buildCost}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}