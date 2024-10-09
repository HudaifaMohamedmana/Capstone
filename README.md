Amwaj Cafe
This repository contains the source code for my capstone project, a full-featured shopping cart application built with React. The application allows users to browse items, add them to their cart, and place orders. Admins can manage orders from a dedicated admin page.

Table of Contents
Features
Technologies Used
Installation
Usage
Project Structure
Contributing
Features
User registration and login
Browse products and add them to the cart
View and manage items in the cart
Admins can view and delete orders
Real-time updates of order totals
Technologies Used
React: A JavaScript library for building user interfaces
Axios: Promise-based HTTP client for the browser
React Router: Declarative routing for React
CSS: Custom styles for the application
Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/HudaifaMohamedmana/Capstone.git
cd Capstone
Install dependencies: Make sure Node.js is installed. Run the following command to install the project dependencies:

bash
Copy code
npm install
Start the development server: Once dependencies are installed, start the application with:

bash
Copy code
npm start
Backend Setup: Ensure the backend API is running on http://localhost:3050.

Usage
Navigate to http://localhost:3000 to access the application.
As a user, you can browse items, add them to your cart, and check out.
Admins can manage orders from the /orders page.
Project Structure
bash
Copy code
src/
├── components/
│   ├── Cart.jsx          # Displays the shopping cart
│   ├── Form.jsx          # User login or sign-up form
│   ├── Home.jsx          # Home page with product listings
│   ├── Nav.jsx           # Navigation bar
│   ├── Orders.jsx        # Admin page to manage orders
│   ├── OrderFram.jsx     # Displays individual order details
│   └── Profile.jsx       # User profile page
├── App.jsx               # Main application component
├── App.css               # Global styling
└── index.js              # Entry point for the React app
Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.
Create a new feature or bugfix branch.
Submit a pull request with a clear description of your changes.
