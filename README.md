# macOS Desktop Clone

A beautiful and interactive web-based macOS desktop replica built with React and Vite. This project recreates the essential UI elements and functionality of macOS in a browser environment.

## 🎨 Features

### Core UI Components

- **Navigation Bar**: Top navigation bar with system menu and indicators
- **Dock**: Application dock at the bottom with app shortcuts and active window indicators
- **Control Center**: Settings and quick access panel with system controls
- **DateTime Display**: Real-time clock and date information
- **Wallpaper Switcher**: Dynamic background wallpaper selection

### Applications

- **Terminal/CLI**: Functional command-line interface emulator
- **GitHub Client**: Display and browse GitHub user information
- **Note App**: Create, edit, and manage notes
- **Resume**: Personal resume/CV display
- **Spotify**: Music player interface with playback controls

### Window Management

- **MacWindow Component**: Custom draggable and resizable window containers
- Smooth window animations and transitions
- Proper z-index stacking with focus management
- Window minimize, maximize, and close functionality

## 🚀 Getting Started


## 🏗️ Project Structure

```
src/
├── components/
│   ├── ControlCenter.jsx      - System control panel
│   ├── DateTime.jsx            - Clock and date display
│   ├── Dock.jsx                - Application dock
│   ├── Nav.jsx                 - Navigation bar
│   ├── WallpaperSwitcher.jsx   - Wallpaper management
│   └── windows/                - Application windows
│       ├── Cli.jsx             - Terminal emulator
│       ├── Github.jsx          - GitHub client
│       ├── MacWindow.jsx       - Window container
│       ├── Note.jsx            - Note application
│       ├── Resume.jsx          - Resume display
│       └── Spotify.jsx         - Music player
├── assets/                     - Data files (github.json)
├── App.jsx                     - Main App component
├── main.jsx                    - Entry point
└── app.scss                    - Global styles
public/
├── images/                     - UI images
├── wallpapers/                 - Background images
├── doc-icons/                  - Document icons
└── navbar-icons/               - Navigation bar icons
```

## 💻 Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
- **SCSS** - Styling with Sass
- **React RND** - Draggable and resizable components
- **React Console Emulator** - Terminal functionality
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting

## 🎯 Current Functionality

### Desktop Interface
- Fully interactive desktop environment with macOS-like aesthetics
- Real-time clock and calendar widget
- System control center with quick access toggles
- Dynamic wallpaper switching with multiple background options

### Window System
- Draggable and resizable application windows
- Proper window focus and z-index management
- Window title bars with close/minimize/maximize buttons
- Smooth animations and transitions

### Applications
- **Terminal**: Run commands with CLI emulator interface
- **GitHub**: View GitHub profile and repository information
- **Notes**: Simple note-taking application
- **Resume**: Display professional resume
- **Spotify**: Interactive music player interface

## 📝 Notes

- This is a frontend-only recreation for demonstration and educational purposes
- All applications have UI/UX implementations; some may have limited backend integration
- Styling closely matches modern macOS design patterns
- Fully responsive and works on different screen sizes

## 🔄 Future Improvements

- Enhanced window animations and effects
- Additional applications and utilities
- Improved terminal command support
- Backend integration for data persistence
- Mobile responsiveness optimizations
- Dark/Light theme toggle
- Additional customization options

---

*This project is a work in progress and will be continuously upgraded with new features and improvements.*
