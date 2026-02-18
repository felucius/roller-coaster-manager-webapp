"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="navigation">
            <Link className="btn" href="/settings">Settings</Link>
            <Link className="btn" href="/">Park overview</Link>
            <Link className="btn" href="/maintenance">Maintenance</Link>
            <Link className="btn" href="/rides">Rides</Link>
            <Link className="btn" href="/consumables">Food & Drinks</Link>
            <Link className="btn" href="/employees">Employees</Link>
            <Link className="btn" href="/customers">Customers</Link>
        </nav>
    )
}