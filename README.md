# Kazakh Restaurant Website

A modern, responsive website about a traditional Kazakh restaurant featuring an online reservation system. The website showcases the restaurant's authentic Kazakh cuisine, ambiance, and cultural heritage while providing a convenient booking system for customers.

## Features

### Frontend
- **Interactive Menu Display**: Showcases traditional Kazakh dishes with beautiful imagery
- **Team Section**: Highlights the restaurant's culinary team
- **Image Gallery**: Visual showcase of the restaurant's ambiance and dishes
- **Responsive Design**: Fully responsive layout that works on all devices
- **Testimonials**: Customer reviews and feedback section
- **Opening Hours**: Clear display of business hours
- **Contact Information**: Easy access to restaurant contact details

### Reservation System
- **Online Booking**: User-friendly reservation form
- **Real-time Validation**: Instant feedback on reservation inputs
- **Persistent Storage**: Reservations stored in JSON file
- **Status Tracking**: Reservation status management (pending/confirmed/cancelled)

## Technology Stack

### Frontend
- HTML5
- CSS3 with responsive design
- JavaScript/jQuery
- Bootstrap for layout
- Swiper.js for sliders
- Fancybox for image galleries
- Parallax effects

### Backend
- Node.js
- Express.js
- RESTful API
- JSON file-based storage

## Project Structure
```
Kazakh_Restaurant/
├── assets/
│   ├── css/              # Third-party CSS files
│   ├── data/             # Data storage
│   ├── images/           # Website images
│   └── npm/              # Node.js configuration
├── node_modules/         # Dependencies
├── index.html           # Main website
├── main.js             # Frontend JavaScript
├── server.js           # Backend server
├── style.css          # Custom styles
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/verdenhaus/Kazakh_Restaurant.git
   cd Kazakh_Restaurant
   ```

2. Install dependencies:
   ```bash
   cd assets/npm
   npm install
   ```

3. Start the server:
   ```bash
   # Production mode
   npm start
   
   # Development mode with auto-reload
   npm run dev
   ```

4. Open `index.html` in your browser or serve it through a web server

## Reservation System API

### Endpoints

#### Get All Reservations
```http
GET /api/reservations
```

#### Create Reservation
```http
POST /api/reservations
```
Required fields:
- name: Customer name
- phone: 11-digit phone number
- date: Reservation date (YYYY-MM-DD)
- time: Reservation time (HH:mm)
- guests: Number of guests (1-20)

#### Update Reservation Status
```http
PUT /api/reservations/:id
```

#### Delete Reservation
```http
DELETE /api/reservations/:id
```

## Website Sections

1. **Home**: Welcome section with parallax effects
2. **Menu**: Traditional Kazakh cuisine categories
   - Breakfast
   - Lunch
   - Dinner
3. **Gallery**: Restaurant and food imagery
4. **Team**: Staff and chef profiles
5. **Testimonials**: Customer reviews
6. **FAQ**: Common questions and answers
7. **Reservation**: Online booking form
8. **Contact**: Location and contact information

## Customization

### Styling
- Main styles are in `style.css`
- Colors, fonts, and layouts can be modified
- Responsive breakpoints included for all devices

### Content
- Menu items can be updated in index.html
- Images can be replaced in assets/images/
- Text content is easily editable in index.html

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Responsive design for mobile devices

## Credits

- Design inspiration: Traditional Kazakh architecture and culture
- Images: Internet
- Icons: Unicons by Iconscout
