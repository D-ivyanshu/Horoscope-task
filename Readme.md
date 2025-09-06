Daily Horoscope & Journal App

A minimal React Native app that combines daily horoscopes with personal journaling.
It allows users to check their horoscope for the day, select their zodiac sign, and write daily reflections that are stored locally on their device.

Features

Select zodiac sign via dropdown

View today’s horoscope (static for now)

Navigate between Home and Journal screens

Write and save daily reflections (local storage)

View past journal entries

Tech Stack

Framework: React Native

Navigation: React Navigation

Local Storage: AsyncStorage

UI: Custom styled components

Installation & Setup

Clone this repository and run locally:

# Clone repo

git clone https://github.com/your-username/astrojournal.git
cd astrojournal

# Install dependencies

npm install

# Start Expo project

npx expo start

Run on device or emulator:

Press i for iOS simulator

Press a for Android emulator

Scan QR code using Expo Go app

📂 Project Structure
/AstroJournal
├── /src
│ ├── /screens
│ │ ├── Home.tsx
│ │ ├── Journal.tsx
│ ├── /components
│ │ ├── Dropdown.js
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ ├── Horoscope.tsx
│ │ ├── JournalCard.tsx
│ │ ├── JournalHeader.tsx
│ │ ├── JournalInput.tsx
│ ├── /services
│ │ ├── horoscopeService.ts
│ │ ├── journalService.ts
│ │ ├── notificationService.ts
│ ├── /navigation
│ │ ├── navigation.tsx
│ ├── /utils
│ │ ├── theme.ts
│ │ ├── common.ts
│ ├── /constants
│ │ ├── constants.ts
│ ├── App.js
│ ├── navigation.js
├── package.json
├── README.md

Roadmap / Future Enhancements

This is just the beginning. Planned improvements include:

Horoscope Features

Show daily, weekly, monthly predictions

Add love, career, health categories

Journal Features

Auto-save journal entries (remove manual save step)

Add tags or moods for filtering entries

Enable search and sort functionality

UI Improvements

Dark mode / custom themes

Smooth animations & transitions

Personalized zodiac animations

Enhancements

Share horoscope or journal reflections

AI-powered insights & recommendations from journal text
