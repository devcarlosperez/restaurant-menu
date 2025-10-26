# Restaurant Menu 🍽️

A single-page React application that displays a restaurant menu using TheMealDB API. Prices are fictional and generated for demo purposes.

## Features ✨

- Fetch meals from TheMealDB API.
- Display list of dishes with name, image, category and price.
- Dish detail page with ingredients and cooking instructions.
- Navigation between Home, Menu and Categories.
- Loading and error states.

## Demo pages

- Home: `/`  
- Menu list: `/menu`  
- Categories: `/categories`  
- Category items: `/categories/:categoryName`  
- Meal detail: `/meal/:id`

## Getting started 🚀

1. Clone the repository:
   ```sh
   git clone <https://github.com/devcarlosperez/restaurant-menu.git>
   cd restaurant-menu
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run development server:
   ```sh
   npm run dev
   ```
   Open http://localhost:5173

## Built with 🛠️

- React (https://es.react.dev/)
- TheMealDB API (https://www.themealdb.com)

## Suggestions 💡

- Add search and filters by category.
- Persist generated prices in localStorage if you want stable prices across reloads.
- Add unit tests for API helpers and components.

## Acknowledgments 🎁

Thanks to TheMealDB for the API and to classmates and teachers for feedback.

## Author ✒️

Carlos Luis Pérez Santana.