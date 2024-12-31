function displayAllEntries() {
    const container = document.getElementById("historyContainer");

    if (localStorage.length === 0) {
        container.innerHTML = "<p>No conversion history found.</p>";
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const entry = document.createElement("div");
        entry.className = "entry";
        entry.textContent = `Timestamp: ${new Date(parseInt(key)).toLocaleString()}, Value: ${value}`;
        container.appendChild(entry);
    }
}

displayAllEntries();

