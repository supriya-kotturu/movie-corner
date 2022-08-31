# Movie Corner

## Getting Started

- Clone the repo
  ```
  git clone https://github.com/supriya-kotturu/movie-corner.git
  ```
- Install the dependencies
  ```
  npm install
  ```
- Build the files
  ```
  npm run build
  ```
- Run the tests
  ```
  npm run test
  ```
- Run the application in dev mode
  ```
  npm run dev
  ```
- Run the application
  ```
  npm start
  ```

## Todo

- [x] set up tailwind.css - reusable classnames with @apply
- [ ] add basic animations with framer-motion
- [ ] implement SSR for displaying movie lists
- [ ] Dashboard Component Layout - fetches the movie lists
  - [ ] Movie Component - child of Dashboard, shows the movie details
  - [ ] List Component - Carrosel component containing the list of movies
    - [ ] Implement checkbo -select
    - [ ] Edit User
    - [ ] Delete User
- [ ] Pagination
- [ ] Dark mode based on user system pereferences
- [ ] Optimize component rerendering
- [ ] Add Redux-query for fetching requests
- [ ] Add Toggle button for dark mode
- [ ] Add Unit Tests
- [ ] Publish on Netlify

### Note : Dark mode

Page automatically switches to dark mode based on current system preferences of the user.

To try light/dark mode try switching the system preferences to dark mode

- On windows, go to settings > prersonalization > colors > choose dark/light in the dropdown

### Note : Unit tests

Tests are still not written for the components.

## Tech stack

- next.js
- typescript
- tailwindcss
- framer-motion
