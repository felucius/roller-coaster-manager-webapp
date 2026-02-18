"use client";

export default function SettingsScreen() {
    return (
        <main>
            <h1>Settings</h1>
            <p>Manage your park settings here.</p>

            <div>
                <button className="cheats">Enter Cheats</button>
            </div>

            <div>
                <button className="save">Save game to file</button>
            </div>

            <div>
                <button className="save to local storage">Save game to local storage</button>
            </div>

            <div>
                <button className="load">Load game from file</button>
            </div>

            <div>
                <button className="load from local storage">Load game from local storage</button>
            </div>

            <div>
                <button className="reset">Reset game</button>
            </div>
        </main>
    );
}