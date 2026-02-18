import { RIDE_CATALOG } from "./catalog";
import { Ride } from "./types";

export function getPurhaseableRides(): Ride[] {
    return RIDE_CATALOG;
}