# Keeper App

## Overview

Keeper App is a React-based note-keeping application where users can create, view, and delete notes effortlessly.

## Features

- **Create Notes:** Add new notes with a title and content.
- **View Notes:** Each note is displayed individually with its title and content.
- **Delete Notes:** Easily remove notes you no longer need.

## How to Run

1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser at [http://localhost:3000](http://localhost:3000).

## Components

1. **App.jsx:** Main component managing note state.
2. **Header.jsx:** Displays the app name in an `<h1>` element.
3. **Footer.jsx:** Renders a footer with a dynamic copyright message.
4. **Note.jsx:** Represents an individual note with a title and content.

## Challenges

1. **Add Note Functionality:**
   - Create a constant for title and content.
   - Pass the new note to App.
   - Add the new note to an array.
   - Render separate Note components for each item.

2. **Delete Note Functionality:**
   - Implement a callback from Note to trigger delete.
   - Use `filter` to remove the note.
   - Pass an ID for deletion.

## Additional Features (Optional)

- **Styling:** Enhance UI with CSS or styling library.
- **Persistence:** Implement local storage for note persistence.
- **Editable Notes:** Allow users to edit existing notes.
