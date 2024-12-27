const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Path to reservations file
const RESERVATIONS_FILE = path.join(__dirname, 'assets', 'data', 'reservations.json');

// Function to read reservations from file
function readReservations() {
  try {
    if (fs.existsSync(RESERVATIONS_FILE)) {
      const data = fs.readFileSync(RESERVATIONS_FILE, 'utf8');
      // Handle empty file case
      if (!data.trim()) {
        return [];
      }
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading reservations file:', error);
    return [];
  }
}

// Function to write reservations to file
function writeReservations(reservations) {
  try {
    fs.writeFileSync(RESERVATIONS_FILE, JSON.stringify(reservations, null, 2));
  } catch (error) {
    console.error('Error writing reservations file:', error);
  }
}

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load reservations from file
let reservations = readReservations();

// GET endpoint to retrieve all reservations
app.get('/api/reservations', (req, res) => {
  res.json(reservations);
});

// POST endpoint to create a new reservation
app.post('/api/reservations', (req, res) => {
  const { name, phone, date, time, guests } = req.body;

  // Validation
  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Phone number validation
  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  // Guest number validation
  if (guests < 1 || guests > 20) {
    return res.status(400).json({ error: 'Number of guests must be between 1 and 20' });
  }

  // Create new reservation
  const newReservation = {
    id: Date.now(),
    name,
    phone,
    date,
    time,
    guests,
    status: 'pending'
  };

  reservations.push(newReservation);
  writeReservations(reservations); // Save to file
  res.status(201).json(newReservation);
});

// DELETE endpoint to remove a reservation
app.delete('/api/reservations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = reservations.findIndex(r => r.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Reservation not found' });
  }

  reservations.splice(index, 1);
  writeReservations(reservations); // Save to file
  res.status(200).json({ message: 'Reservation deleted successfully' });
});

// PUT endpoint to update reservation status
app.put('/api/reservations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const reservation = reservations.find(r => r.id === id);
  if (!reservation) {
    return res.status(404).json({ error: 'Reservation not found' });
  }

  reservation.status = status;
  writeReservations(reservations); // Save to file
  res.json(reservation);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});