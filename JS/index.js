document.addEventListener("DOMContentLoaded", function() {

    const typewriter = document.querySelector('.typewriter');

    setTimeout(() => {
        typewriter.classList.add('completed');
    }, 1500); // 1.5s komt overeen met de animatieduur van het type-effect
});

/*Bovestaande JS code zorgt ervoor dat na het typing effect van 1.5 seconde de cursor op het einde verdwijnt*/


// Functie om de locatie van de gebruiker op te vragen en weer te geven
document.getElementById('location-button').addEventListener('click', function() {
    // Controleer of de browser geolocatie ondersteunt
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location-output').innerText = "Geolocation is not supported by this browser.";
    }
});

// Functie die wordt aangeroepen als de locatie met succes is opgevraagd
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById('location-output').innerText = "Latitude: " + latitude + "°, Longitude: " + longitude + "°";
}

// Functie die wordt aangeroepen als er een fout optreedt bij het opvragen van de locatie
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location-output').innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location-output').innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('location-output').innerText = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location-output').innerText = "An unknown error occurred.";
            break;
    }
}