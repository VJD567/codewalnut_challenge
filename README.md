# React Timer App

A sophisticated timer application built with React, allowing users to create, manage, and run multiple timers simultaneously. The app features a modern UI, persistent storage, and real-time notifications.

## Features

- Create multiple timers with custom titles and descriptions
- Run multiple timers simultaneously
- Edit existing timers
- Notification system with sound alerts
- Responsive design for both desktop and mobile
- Local storage persistence
- Progress visualization for each timer

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Testing**: Vitest
- **Notifications**: React Toastify & Sonner
- **Icons**: Lucide React

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/VJD567/codewalnut_challenge.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Run tests**

   ```bash
   npm run test
   ```

---

## **Project Structure**

- `/src`
  - `/components` - React components
  - `/store` - Redux store configuration
  - `/utils` - Utility functions
  - `/types` - TypeScript type definitions

## **Key Components**

1. **Timer Management**
- Create timers with title, description, and duration
- Edit existing timers
- Delete timers
- Start/pause/restart functionality

2. **UI Features**
- Progress bars for visual feedback
- Responsive design
- Modal system for adding/editing timers
- Empty state visualization

3. **Notifications**
- Sound alerts when timers complete
- Visual notifications with dismiss option
- Different placement for desktop/mobile

## **Testing**

The project includes both unit and component tests:

```bash
Readme.md
```

# Run all tests
 ```bash
 npm test
 ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT license.