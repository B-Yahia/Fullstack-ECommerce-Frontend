# Fullstack React Frontend

## Overview
This project is a React-based e-commerce frontend, featuring product listing, product details, cart management, and order placement. It uses Redux for state management and Apollo Client for GraphQL API integration.

## Features
- Product listing by category
- Product details with gallery and attributes
- Add to cart with attribute selection
- Cart modal with order summary and checkout
- Persistent cart using localStorage
- Category navigation
- Responsive and modern UI

## Folder Structure
```
src/
  App.js 
  App.css
  index.js
  index.css
  reportWebVitals.js
  Components/
    CartColorAttribute/      # Color attribute selector for cart
    CartModal/               # Cart modal and order summary
    CartTextAttribute/       # Text attribute selector for cart
    Header/                  # Navigation and cart icon
    HOC/                     # Higher-order component for routing
    OrderlineCard/           # Cart item card
    PDPComponents/           # Product details page components
      ColorAttribute/        # Color attribute selector
      ProductGallery/        # Product image gallery
      TextAttribute/         # Text attribute selector
    ProductCard/             # Product card for listings
  GraphQL/
    apolloClient.js          # Apollo Client setup
    queries.js               # GraphQL queries
  Images/                    # SVG assets
  Pages/
    ProductListingPages/     # Product listing page
    ProdutDetailsPage/       # Product details page
  ReduxStore/
    AttributesSlice.js       # Redux slice for attributes
    CartSlice.js             # Redux slice for cart
    store.js                 # Redux store setup
  Utils/
    data.json                # Mock data for categories/products
    functions.js             # Utility functions
```

## Technologies Used
- React
- Redux Toolkit
- React Router
- Apollo Client (GraphQL)
- HTML/CSS (custom styling)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/B-Yahia/e-com.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The app will be available at `http://localhost:3000`.

## Deployment

The React Front is deployed in this URL: 
  - [https://e-com-test.netlify.app/](https://e-com-test.netlify.app/)
The Backend is deployed on my vps in this URL: 
  - [https://ecom.apitestdomain.site/graphql](https://ecom.apitestdomain.site/graphql) 


## Usage
- Browse products by category using the navigation bar.
- Click on a product to view details and select attributes.
- Add products to the cart and view the cart modal.
- Place an order (via GraphQL mutation).

## Notes
- The app uses a GraphQL endpoint for saving the orders in the backend.
- Cart state is persisted in localStorage.

---

© 2025 Fullstack React Frontend
