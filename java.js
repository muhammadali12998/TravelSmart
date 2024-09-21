// about us card 
const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1200);
  }
}

let autoplayInterval = setInterval(moveCard, 4000);

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
    }, 1200);
  }
});
// trip catalog
// Sample static data
const trips = [
    {
        name: "Paris",
        description: "Experience the city of lights.",
        image: "images/paris.avif",
        price: "$1200",
        flights: [
            { airline: "Air France", price: "$500", duration: "7h" },
            { airline: "Delta", price: "$550", duration: "7h 30m" }
        ],
        accommodations: [
            { type: "Hotel", name: "Le Meurice", rating: "5 stars", amenities: "Pool, Spa" }
        ]
    },
    {
        name: "New York",
        description: "Explore the Big Apple.",
        image: "images/newyork.avif",
        price: "$1500",
        flights: [
            { airline: "United Airlines", price: "$600", duration: "6h" },
            { airline: "American Airlines", price: "$650", duration: "6h 15m" }
        ],
        accommodations: [
            { type: "Hostel", name: "HI New York", rating: "4 stars", amenities: "Free Wi-Fi" }
        ]
    },
    {
        name: "Dubai",
        description: "Experience the city of lights.",
        image: "images/dubai.avif",
        price: "$1200",
        flights: [
            { airline: "Air France", price: "$500", duration: "7h" },
            { airline: "Delta", price: "$550", duration: "7h 30m" }
        ],
        accommodations: [
            { type: "Hotel", name: "Le Meurice", rating: "5 stars", amenities: "Pool, Spa" }
        ]
    },
    {
        name: "SriLanka",
        description: "Experience the city of lights.",
        image: "images/srilanka.avif",
        price: "$1200",
        flights: [
            { airline: "Air France", price: "$500", duration: "7h" },
            { airline: "Delta", price: "$550", duration: "7h 30m" }
        ],
        accommodations: [
            { type: "Hotel", name: "Le Meurice", rating: "5 stars", amenities: "Pool, Spa" }
        ]
    },

    {
        name: "South Korea",
        description: "Experience the city of lights.",
        image: "images/south korea.avif",
        price: "$1200",
        flights: [
            { airline: "Air France", price: "$500", duration: "7h" },
            { airline: "Delta", price: "$550", duration: "7h 30m" }
        ],
        accommodations: [
            { type: "Hotel", name: "Le Meurice", rating: "5 stars", amenities: "Pool, Spa" }
        ]
    },

    {
        name: "London",
        description: "Experience the city of lights.",
        image: "images/london.avif",
        price: "$1200",
        flights: [
            { airline: "Air France", price: "$500", duration: "7h" },
            { airline: "Delta", price: "$550", duration: "7h 30m" }
        ],
        accommodations: [
            { type: "Hotel", name: "Le Meurice", rating: "5 stars", amenities: "Pool, Spa" }
        ]
    },

    {
        name: "Canada",
        description: "Experience the city of lights.",
        image: "images/canada.avif",
        price: "$1200",
        flights: [
            { airline: "Air France", price: "$500", duration: "7h" },
            { airline: "Delta", price: "$550", duration: "7h 30m" }
        ],
        accommodations: [
            { type: "Hotel", name: "Le Meurice", rating: "5 stars", amenities: "Pool, Spa" }
        ]
    },
    {
        name: "Tokyo",
        description: "Experience the vibrant city of Tokyo.",
        image: "images/tokyo.avif",
        price: "$1600",
        flights: [
            { airline: "Japan Airlines", price: "$700", duration: "12h" },
            { airline: "All Nippon Airways", price: "$750", duration: "11h 30m" }
        ],
        accommodations: [
            { type: "Hotel", name: "The Peninsula Tokyo", rating: "5 stars", amenities: "Luxury, Fitness Center" }
        ]
    },
    {
        name: "Sydney",
        description: "Enjoy the sights of Sydney.",
        image: "images/sidney.avif",
        price: "$1700",
        flights: [
            { airline: "Qantas", price: "$750", duration: "14h" },
            { airline: "Cathay Pacific", price: "$800", duration: "13h 45m" }
        ],
        accommodations: [
            { type: "Hotel", name: "Park Hyatt Sydney", rating: "5 stars", amenities: "Harbor views, Spa" }
        ]
    }
];


const tripList = document.getElementById('trip-list');

function displayTrips(tripArray) {
    tripList.innerHTML = '';
    tripArray.forEach(trip => {
        const tripItem = document.createElement('div');
        tripItem.className = 'trip-item';
        tripItem.innerHTML = `
            <h3>${trip.name}</h3>
            <p>${trip.description}</p>
            <img src="${trip.image}" alt="${trip.name}">
            <p>Price: ${trip.price}</p>
            <h4>Flight Options:</h4>
            <ul>
                ${trip.flights.map(flight => `
                    <li>${flight.airline} - Price: ${flight.price}, Duration: ${flight.duration}</li>
                `).join('')}
            </ul>
            <h4>Accommodations:</h4>
            <ul>
                ${trip.accommodations.map(accommodation => `
                    <li>${accommodation.type} - ${accommodation.name} (${accommodation.rating}) - Amenities: ${accommodation.amenities}</li>
                `).join('')}
            </ul>
        `;

          
        tripList.appendChild(tripItem);
    });
}


function sortTrips(criteria) {
    if (criteria === "name-asc") {
        trips.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "name-desc") {
        trips.sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === "price-asc") {
        trips.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (criteria === "price-desc") {
        trips.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    }
    displayTrips(); // Redisplay trips after sorting
}

// Event listener for the sorting dropdown
document.getElementById('sort-dropdown').addEventListener('change', function() {
    sortTrips(this.value);
   
});



const accommodationDropdown = document.getElementById('accommodation-dropdown');

// Function to filter trips based on accommodation type
function filterTrips() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const accommodationType = accommodationDropdown.value;

    const filteredTrips = trips.filter(trip => {
        const matchesSearch = trip.name.toLowerCase().includes(searchTerm);
        const matchesAccommodation = accommodationType ? 
            trip.accommodations.some(acc => acc.type === accommodationType) : 
            true;

        return matchesSearch && matchesAccommodation;
    });

    displayTrips(filteredTrips);
}

// Event listener for the accommodation dropdown
accommodationDropdown.addEventListener('change', filterTrips);

// Update search button event listener to use the new filter function
document.getElementById('search-button').addEventListener('click', filterTrips);


// Initial display of trips
displayTrips(trips);

document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredTrips = trips.filter(trip => trip.name.toLowerCase().includes(searchTerm));
    displayTrips(filteredTrips);
});

// signup form
// document.addEventListener('DOMContentLoaded', function() {
//     const loginBtn = document.getElementById('login-btn');
//     const modal = document.getElementById('login-modal');
//     const closeBtn = document.getElementById('close-btn');

//     // Show the modal when the login button is clicked
//     loginBtn.addEventListener('click', function(event) {
//         event.preventDefault();
//         modal.style.display = 'block';
//     });

//     // Hide the modal when the close button is clicked
//     closeBtn.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     // Hide the modal when clicking outside the modal content
//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });

// Feedback form submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
});

