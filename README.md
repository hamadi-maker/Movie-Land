# Movie Land

Movie Land is a simple React application that allows you to search for movies using the OMdb API. You can find detailed information about movies, such as title, year, plot, and ratings.

## Features

- Search for movies by title
- View movie details including title, year, plot, and ratings
- Responsive design for seamless browsing on different devices

## Technologies Used

- React: JavaScript library for building user interfaces
- OMdb API: Open Movie Database API for fetching movie data
- HTML5: Markup language for structuring and presenting content
- CSS3: Styling the user interface
- JavaScript: Programming language for client-side functionality

## Installation

1. Clone the repository:
```
git clone https://github.com/hamadi-maker/Movie-Land.git
```

2. Navigate to the project directory:
```
cd movie-land
```

3. Install dependencies:
```
npm install
```

4. Obtain an API key from OMdb:
   - Visit the OMdb website: https://www.omdbapi.com/
   - Sign up for an account and obtain an API key

5. Create a `.env` file in the project root directory and add your API key:
```
REACT_APP_OMDB_API_KEY=YOUR_API_KEY_HERE
```

6. Start the React app:
```
npm start
```

7. Open your web browser and access the app at `http://localhost:3000`

## Usage

- Enter a movie title in the search bar and press Enter or click the Search button.
- View the search results, including movie titles and years.
- Click on a movie to view detailed information such as the plot and ratings.
