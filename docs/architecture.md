# Project Architecture – India Post Accessibility Audit

## 1. Introduction

This project establishes a maintainable full-stack development foundation based on an accessibility and performance audit of the India Post public-facing website.

The repository follows a monorepo-style structure, keeping frontend, backend, documentation and testing resources in one place.

The audit findings will guide the development of an accessible demonstration application.

## 2. Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Development and Testing
- Git and GitHub
- Google Chrome Lighthouse
- Keyboard accessibility testing
- Manual testing

## 3. Repository Structure

```text
india-post-accessibility-audit/
│
├── client/
│   ├── public/
│   │   └── .gitkeep
│   └── src/
│       └── .gitkeep
│
├── server/
│   └── src/
│       └── .gitkeep
│
├── docs/
│   ├── screenshots/
│   ├── accessibility-audit.md
│   └── architecture.md
│
├── tests/
│   └── accessibility/
│       └── .gitkeep
│
└── README.md
```

## 4. Architecture Boundaries

### Client
The client is responsible for:
- Displaying the user interface.
- Handling user interactions.
- Providing accessible navigation.
- Sending requests to the backend API.

### Server
The server is responsible for:
- Handling API requests.
- Processing application data.
- Returning structured JSON responses.
- Managing backend functionality.

### Documentation
The documentation directory contains:
- Accessibility audit reports.
- Architecture explanations.
- Screenshots and testing evidence.

### Tests
The tests directory contains:
- Accessibility testing resources.
- Frontend and backend testing files.
- Future automated test cases.

## 5. Frontend and Backend Communication

The frontend communicates with the backend using HTTP requests.

The backend exposes REST API endpoints and returns JSON responses.

Example:

`GET /api/services`

The server responds with a JSON list of demonstration services.

## 6. First Vertical Feature Slice

The first planned feature is a **Postal Services Directory**.

It will include:

1. A homepage with a simple navigation system.
2. A list of sample postal services.
3. A search option to find services.
4. A backend API to provide service information.
5. Accessible buttons, labels and keyboard navigation.

The feature will connect the frontend interface to the backend API, demonstrating a complete full-stack workflow.

This is a demonstration application and is not an official India Post service.

## 7. Local Development Setup

### Prerequisites
- Node.js (LTS version)
- npm
- Git
- Visual Studio Code or another code editor

### Planned setup commands

Clone the repository:

```bash
git clone https://github.com/chandresh29n/india-post-accessibility-audit.git
```

Move into the project directory:

```bash
cd india-post-accessibility-audit
```

Install backend dependencies after the server package configuration is created:

```bash
cd server
npm install
```

Start the backend after the server entry point is implemented:

```bash
npm run dev
```

## 8. Accessibility and Maintainability Goals

- Follow semantic HTML practices.
- Maintain visible keyboard focus indicators.
- Provide appropriate labels for interactive elements.
- Keep frontend and backend responsibilities separate.
- Use reusable and organized code.
- Document future changes.
- Test accessibility during development.

## 9. Future Improvements

- Implement automated accessibility tests.
- Add responsive layouts.
- Improve API error handling.
- Optimize images and JavaScript delivery.
- Add unit and integration tests.

## 10. Conclusion

This architecture provides a simple and maintainable foundation for full-stack development.

It separates frontend, backend, documentation and testing responsibilities while using the findings from the India Post audit to guide future improvements.

---

**Developed as part of the Rabtech Academy Full Stack Web Development Internship.**
