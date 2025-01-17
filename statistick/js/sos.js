let map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 15,
    });

    infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent("Вы здесь!");
                infoWindow.open(map);
                map.setCenter(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Ошибка: Геолокация недоступна."
            : "Ошибка: Ваш браузер не поддерживает геолокацию."
    );
    infoWindow.open(map);
}

function sendSOS() {
    alert("SOS сигнал отправлен!");
    // Логика отправки SOS-сообщений контактам
}

async function loadContacts() {
    try {
        const response = await fetch('/path/to/contacts.json'); // Укажите путь к contacts.json
        if (!response.ok) {
            throw new Error("Не удалось загрузить контакты");
        }

        const contacts = await response.json();
        const contactsList = document.getElementById("contacts-list");

        contacts.forEach(contact => {
            const li = document.createElement("li");
            li.textContent = `${contact.name || "Неизвестно"} - ${contact.phone}`;
            contactsList.appendChild(li);
        });
    } catch (error) {
        console.error("Ошибка загрузки контактов:", error);
        const contactsList = document.getElementById("contacts-list");
        contactsList.innerHTML = "<li>Ошибка загрузки данных</li>";
    }
}

window.onload = () => {
    initMap();
    loadContacts();
};
