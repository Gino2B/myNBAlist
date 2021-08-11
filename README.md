- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**myNBAshot** A site that lists players, their info(like wikipedia) and then some of their most well known moments. Users will be able to add moments to the players page, and even create a showcase of their favorite moments/players.

<br>

## MVP

**myNBAshot** MVP is able to render players, their info, update their info, add moments, add players/moments to User showcase, delete said players/moments from their showcase.

<br>

### Libraries and Dependencies

|     Library      | Description                             |
| :--------------: | :-------------------------------------- |
|      React       | For basic react imports                 |
| React Router Dom | To allow us to use link/route           |
|  React Youtube?  | To allow ease of use with youtube vids  |
|      Axios       | To make http request calls from our API |
|      Bcrpyt      | To hash our user passwords              |

<br>

### Client (Front End)

#### Wireframes

- Desktop View

[Link to Wireframe](https://www.figma.com/file/Th98OEvqXEuNYqooCYw6tv/myNBAshot?node-id=0%3A1)

- Mobile View

[Link to Wireframe](https://www.figma.com/file/PsJCzlGJS5qx6lpwzYuI0z/myNBAshot-mobile?node-id=0%3A1)

#### Component Tree

[Component Tree Sample](https://whimsical.com/Tv3yjGbGpiqm6erVt45ezK)

#### Component File Structure

```structure

src
|__ screens/
      |__ Home.jsx
      |__ PlayersList.jsx
      |__ PlayersEdit.jsx
      |__ PlayersAdd.jsx
      |__ PlayersDetails.jsx
      |__ SignUp.jsx
      |__ SignIn.jsx
      |__ UserProfile.jsx
|__ services/
      |__ apiConfig.jsx
      |__ users.jsx
      |__ players.jsx

```

#### Time Estimates

| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form     |    L     |     2 hrs      |       X       |      X      |
| Setup Home Page      |    H     |     2 hrs      |       X       |      X      |
| Render PlayerList    |    H     |     3 hrs      |       X       |      X      |
| Render PlayerEdit    |    H     |     3 hrs      |       X       |      X      |
| Render PlayerMoments |    H     |     3 hrs      |       X       |      X      |
| UserProfile          |    H     |     3 hrs      |       X       |      X      |
| UserProfile showcase |    M     |     3 hrs      |       X       |      X      |
| Authorization        |    H     |     2 hrs      |       X       |      X      |
| Authentication       |    H     |     3 hrs      |       X       |      X      |
| Backend controllers  |    H     |     3 hrs      |       X       |      X      |
| Backend models       |    L     |     1 hrs      |       X       |      X      |
| Create CRUD Actions  |    H     |     3 hrs      |       X       |      X      |
| TOTAL                |          |     31 hrs     |       X       |      X      |

<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1VTcqX-fW4dFph7RBKzOZ9_mdYBFljrVL/view?usp=sharing)
<br>

---

## Post-MVP

- User showcase
- User search
- Player search
- Player sort

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
