import "./style.css";

const servicesContainer = document.getElementById("servicesContainer");
const searchInput = document.getElementById("searchInput");
const statusMessage = document.getElementById("statusMessage");

let services = [];

function displayServices(serviceList) {
    servicesContainer.replaceChildren();

    if (serviceList.length === 0) {
        statusMessage.textContent = "No matching services found.";
        return;
    }

    statusMessage.textContent = `${serviceList.length} services found.`;

    serviceList.forEach((service) => {
        const card = document.createElement("article");
        card.className = "service-card";

        const heading = document.createElement("h3");
        heading.textContent = service.name;

        const description = document.createElement("p");
        description.textContent = service.description;

        card.appendChild(heading);
        card.appendChild(description);

        servicesContainer.appendChild(card);
    });
}

async function loadServices() {
    try {
        const response = await fetch("/api/services");

        if (!response.ok) {
            throw new Error("Unable to load services.");
        }

        services = await response.json();
        displayServices(services);

    } catch (error) {
        statusMessage.textContent =
            "Unable to load services. Please try again later.";
        console.error(error);
    }
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filteredServices = services.filter((service) =>
        service.name.toLowerCase().includes(searchText) ||
        service.description.toLowerCase().includes(searchText)
    );

    displayServices(filteredServices);
});

loadServices();
