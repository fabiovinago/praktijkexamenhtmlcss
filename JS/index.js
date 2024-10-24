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

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animatable');

    const options = {
        root: null, // Gebruik het viewport als root
        rootMargin: '0px',
        threshold: 0.1 // Activatie wanneer 10% van de sectie zichtbaar is
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Voeg de class toe om de animatie te activeren
                observer.unobserve(entry.target); // Stop met observeren van deze sectie
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Begin met observeren van elke sectie
    });
});
