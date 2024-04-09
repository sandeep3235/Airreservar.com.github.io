// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Flight Comparison API');
});

// Example route to handle flight search
app.post('/api/flights', (req, res) => {
    // Handle flight search logic here
    const { from, destination, travelDate, adults, children } = req.body;
    // Perform flight search using provided data
    // Return flight results
    res.json({ message: 'Flight search results' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
async function fetchFlights() {
    const from = document.getElementById("from").value;
    const destination = document.getElementById("destination").value;
    const travelDate = document.getElementById("travelDate").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;

    try {
        const response = await fetch('/api/flights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ from, destination, travelDate, adults, children })
        });
        const data = await response.json();
        // Process flight search results
    } catch (error) {
        console.error('Error fetching flights:', error);
    }

    return false; // Prevent form submission
}
