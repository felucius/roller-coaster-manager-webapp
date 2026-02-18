"use client";
import { getEmployees } from "@/features/employees/logic";
import { getTechnicianEmployees } from "@/features/employees/logic";
import { getServerEmployees } from "@/features/employees/logic";

export default function EmployeesScreen() {
    return (
        <main>
            <h1>Employees</h1>
            <p>Manage employees in the park.</p>

            <h2>All current employed employees</h2>
            <ul>
                {getEmployees().map(employee => (
                    <li key={employee.id}>
                        {employee.name} - {employee.position} - ${employee.salary}
                    </li>
                ))}
            </ul>

            
            <h2>Hire new technician</h2>
            <ul>
                {getTechnicianEmployees().map(employee => (
                    <li key={employee.id}>
                        {employee.name} - {employee.position} - ${employee.salary}
                    </li>
                ))}
            </ul>

            <h2>Hire new server</h2>
            <ul>
                {getServerEmployees().map(employee => (
                    <li key={employee.id}>
                        {employee.name} - {employee.position} - ${employee.salary}
                    </li>
                ))}
            </ul>
        </main>
    );
}