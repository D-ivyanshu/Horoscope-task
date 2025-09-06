# Daily Horoscope & Journal App
A minimal mobile application built with React Native that combines daily horoscopes with personal journaling. It allows users to check their horoscope for the day, select their zodiac sign, and write daily reflections that are stored locally on their device.

### Features
- Zodiac Sign Selection: Choose your zodiac sign from a dropdown menu.

- Daily Horoscopes: View today's horoscope (currently static content).

- Journaling: Write and save daily reflections.

- Past Entries: View and manage your past journal entries.

- Screen Navigation: Seamlessly navigate between the Home and Journal screens.

### Images for reference
<img width="300" height="500" alt="1  register" src="https://github.com/user-attachments/assets/ececd639-93e5-48e4-b75c-69b93375aa49">
<img width="300" height="500" alt="1  register" src="https://github.com/user-attachments/assets/6dc2102e-4b82-4fbb-bc4e-aa2db3988d13">

### Tech Stack
Framework: React Native

Navigation: React Navigation

Local Storage: AsyncStorage

UI: Custom styled components

### Installation & Setup
Follow these steps to get the app running on your local machine.

```
git clone [https://github.com/D-ivyanshu/Horoscope-task.git)
cd astrojournal
npm install
npx expo start
```

 
### Project Structure
The project is organized to promote clean and maintainable code.

```
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
│ └── navigation.js
├── package.json
└── README.md
```

## Roadmap & Future Enhancements
This is an initial version of the app, with many planned improvements:

#### Horoscope Features
- Show daily, weekly, and monthly predictions.

- Add love, career, and health categories.

#### Journal Features
- Auto-save journal entries (remove the manual save step).

- Add tags or moods for filtering entries.

- Enable search and sort functionality.

#### UI Improvements
- Implement a dark mode and custom themes.

- Add smooth animations and transitions.
- Include personalized zodiac animations.

#### General Enhancements
- Add the ability to share horoscopes or journal reflections.

- Integrate AI-powered insights and recommendations based on journal text.
