"use client";

export default function GeneralInformationScreen() {
    return(
        <main>
            <div className="personal-details">
                <label>User 1</label>
                <img src={"https://ui-avatars.com/api/?name=Maxime&background=random"} alt="User 1" />
            </div>
            
            <div className="park-information">
                <h1>Park funds:</h1>
                <h1>Park rating:</h1>
            </div>
        </main>
    );
}