"use client";
import Link from "next/link";

export default function MainScreen() {
    return (
        <main>
            <div className="main-screen-page">
                <h1>Main Screen</h1>
                <div className="settings">
                    <button>Settings</button>
                </div>

                <div className="park-overview">
                    <button>Park overview</button>
                </div>

                <div className="maintenance">
                    <button>
                        <Link href="/maintenance">
                            Maintenance
                        </Link>
                    </button>
                </div>

                <div className="rides">
                    <button>
                        <Link href="/rides">
                            Rides
                        </Link>
                    </button>
                </div>

                <div className="consumables">
                    <button>
                        <Link href="/consumables">
                            Food&Drinks
                        </Link>
                    </button>
                </div>

                <div className="employees">
                    <button>Employees</button>
                </div>

                <div className="customers">
                    <button>Customers</button>
                </div>

                <div className="personal-details">
                    <label>User 1</label>
                    <img src={"https://ui-avatars.com/api/?name=Maxime&background=random"} alt="User 1" />
                </div>
                
                <div className="park-information">
                    <h1>Park funds:</h1>
                    <h1>Park rating:</h1>
                </div>
            </div>

        </main>
    )
}