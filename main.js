// Idols Data
const Idols = [
    { id: 1, name: "Lord Ganesh Idol", price: "₹2500", img: "Lord Ganesh.png" },
    { id: 2, name: "Lord Murugan Idol", price: "₹2000", img: "Lord Murugan.jpeg" },
    { id: 3, name: "Lord Durga Idol", price: "₹3000", img: "Goddess Durga.jpg" },
    { id: 4, name: "Lord Shivan Idol", price: "₹3500", img: "Lord Shiva.jpg" }
];

// Display Idols
function displayIdols() {
    const container = document.getElementById("idolsContainer");
    container.innerHTML = ""; // Clear previous content
    Idols.forEach(idol => { // Use `idol` consistently
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow">
                    <img src="${idol.img}" class="card-img-top" alt="${idol.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${idol.name}</h5>
                        <p class="card-text">${idol.price}</p>
                        <button class="btn btn-custom" onclick="buyItem('${idol.name}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buyItem(itemName) {
    alert(`Thank you for buying ${itemName}! 🎉`);
}

// Show Thank You Alert & Reset Form
function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for contacting us! 😊");
    document.querySelector("form").reset();
}

// Show Sections Dynamically
function showSection(section) {
    // Hide all sections
    ["landing", "statues", "about", "contact"].forEach(id => document.getElementById(id).classList.add("d-none"));
    // Show the selected section
    document.getElementById(section).classList.remove("d-none");
    if (section === "statues") displayIdols(); // Display idols when the 'Statues' section is shown
}

// Automatically show the landing section on page load
document.addEventListener("DOMContentLoaded", () => showSection('landing'));