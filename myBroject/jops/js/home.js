
window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "login.html";  
    }

    document.getElementById("logoutBtn").onclick = function() {
        localStorage.setItem("isLoggedIn", "false");
        window.location.href = "login.html";
    };

    fetch("../data/events.json")
        .then(response => response.json())
        .then(data => getMusicEvents(data.musicEvents))  
        .catch(error => console.error(error));
};


function getMusicEvents(musicEvents) {
    const eventContainer = document.getElementById('event-container');
    eventContainer.innerHTML = '';

    musicEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        
        eventCard.innerHTML = `
            <img src="${event.imageURL}.url" alt="${event.name}">
            <h2>${event.name}</h2>
            <p>${event.date}</p>
            <p>${event.location}</p>
            <p>${event.description}</p>
            <p>Available seats: ${event.availableSeats}</p>
            <button onclick="reserveEvent(${event.id})">Reserve Now</button>
        `;

        eventContainer.appendChild(eventCard); 
    });
}
