# 🎓 Prepforge

Prepforge is your intelligent job interview preparation assistant. Powered by **Next.js**, **Firebase**, **TailwindCSS**, **Vapi AI**, and **Google Gemini**, it offers an immersive and modern platform where users can create, conduct, and get feedback on mock interviews with AI-powered voice agents.

## 🤖 Introduction

Prepforge is a voice-interview training web app built to help developers and job seekers experience and learn how to integrate AI into real-world applications. With a combination of modern tools and intelligent agents, Prepforge simulates realistic job interviews and provides actionable AI feedback in real time.

Whether you're learning AI integration or preparing for your next big opportunity, Prepforge offers a hands-on, dynamic environment.

---

## ⚙️ Tech Stack

| Tech         | Purpose                                      |
|--------------|----------------------------------------------|
| **Next.js**  | Full-stack React framework for web app       |
| **Firebase** | Authentication and real-time data storage    |
| **TailwindCSS** | Utility-first styling for modern UI       |
| **Vapi AI**  | Voice-based AI agents for interviews         |
| **shadcn/ui**| Accessible and beautiful UI components       |
| **Google Gemini** | LLM for feedback generation & Q&A       |
| **Zod**      | Schema validation for forms and API routes   |

---

## 🔋 Features

### 🔐 Authentication
- Secure Sign Up / Sign In with Firebase email-password auth.
- User session management built into the app with protected routes.

### 🧠 Create Interviews
- Start new interviews with a few clicks.
- Choose role-specific prompts powered by Google Gemini and Vapi voice agents.

### 🎧 AI Voice Interviews
- Experience AI-driven voice-based interviews.
- Built with Vapi's voice agents for realistic interaction.

### 📝 Real-time Feedback
- After the interview, get instant AI-generated feedback and improvement suggestions.
- Transcripts and scoring powered by Gemini.

### 📊 Dashboard
- View, manage, and organize past interviews.
- Filter by role, date, or performance score.

### 💡 Modern UI/UX
- Clean, responsive layout using TailwindCSS and shadcn/ui.
- Smooth navigation with accessible components.

### 📱 Responsive Design
- Fully optimized for mobile, tablet, and desktop.
- Great experience across all screen sizes.

---

## 🧱 Code Architecture

Prepforge follows a modular, scalable architecture:

```
/app
  ├── interview/           # Routes related to interviews
  ├── dashboard/           # User dashboard UI
  ├── auth/                # Login and register flows
  ├── layout.tsx           # Shared layout with header/footer
  └── page.tsx             # Landing page

/components
  ├── ui/                  # Reusable UI components (shadcn-based)
  └── interview/           # Specialized interview components

/lib
  ├── firebase.ts          # Firebase config
  ├── validators/          # Zod schemas
  └── vapi.ts              # Vapi voice agent logic

/hooks
  └── useAuth.ts           # Custom hooks for auth

/utils
  └── helpers.ts           # Utility functions

/styles
  └── globals.css          # Tailwind base styles
```

- **Type-Safe**: All forms and APIs use `Zod` for runtime validation.
- **Reusability**: All UI components are modular and easily extendable.
- **API Integration**: Voice and text AI responses from Gemini and Vapi are handled in clean utility modules.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/prepwise.git
cd prepwise
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file and add your Firebase and Vapi credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_VAPI_API_KEY=...
NEXT_PUBLIC_GEMINI_API_KEY=...
```

### 4. Run the dev server

```bash
npm run dev
```

---

## 🧪 Future Improvements

- 🌍 Multi-language support
- 📈 Interview performance analytics
- 🧑🏽‍💼 AI role persona customization
- 🗂 Export transcripts to PDF
- 🔔 Real-time notifications and reminders

---

## 📬 Feedback & Contributions

We’d love your input! Open an issue or submit a pull request to contribute. Prepforge is a project not just to prepare for interviews—but to **learn how to integrate AI into real-world apps**.

---

## 📄 License

MIT © 2025 - Prepforge Team

