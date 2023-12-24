# React Music Player

A simple React music player component that allows users to play, pause, skip forward, skip backward, fast forward, and repeat songs. The player also displays the current song's information, cover image, and progress bar.

## Features

- Play and pause songs.
- Skip to the next or previous song.
- Fast forward and rewind within the current song.
- Repeat the current song.
- Display of song information, cover image, and progress bar.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Icons: A collection of popular icons for React projects.
- CSS: Styling for the player components.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>

2. Install dependencies:
   ```bash
   npm install


3. Run the application
   ```bash
   npm run dev

## How to Use

Upon launching the application, you'll see the cover image, song information, and progress bar.

**Control Playback:**
- Use the play/pause button to start or pause the current song.

**Navigate Between Songs:**
- Click the skip forward button to move to the next song.
- Click the skip backward button to move to the previous song.

**Fast Forward and Rewind:**
- Use the fast forward button to skip forward within the current song.
- Use the rewind button to go back within the current song.

**Repeat:**
- Click the repeat button to start the current song from the beginning.


## Code Overview

- **Player Component (`Player.jsx`):** The main component that includes the header, cover image, music information, player progress, and controls.
- **Controls Component (`Controls.jsx`):** Controls for play/pause, skip forward, skip backward, fast forward, and repeat.
- **MusicInfo Component (`MusicInfo.jsx`):** Displays artist and song title information.
- **PlayerProgress Component (`PlayerProgress.jsx`):** Displays the progress bar, current time, and total duration.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Any contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
