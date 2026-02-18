"use client";
import { getCustomers } from "@/features/customers/logic";

export default function CustomersScreen() {
    return (
        <main>
            <h1>Customers</h1>
            <p>Manage customers in the park.</p>

            <ul>
                {getCustomers().map((customer) => (
                    <li key={customer.id}>
                        {customer.name} - money: ${customer.money} - fun: {customer.funScore} - scare: {customer.scareScore} - nausea: {customer.nauseaScore}
                    </li>
                ))}
            </ul>
        </main>
    );
}