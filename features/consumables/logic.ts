import { CONSUMABLE_CATALOG } from "./catalog";
import { Consumable } from "./types";

export function getPurhaseableConsumables(): Consumable[] {
    return CONSUMABLE_CATALOG;
}