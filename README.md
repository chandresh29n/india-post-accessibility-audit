# India Post Accessibility Audit

A beginner-friendly full-stack demonstration project created as part of an accessibility and repository architecture audit.

## Project Overview

This project audits the India Post website and documents accessibility and performance observations. It also includes a sample Postal Services Directory built using HTML, CSS, JavaScript, Node.js and Express.

## Lighthouse Audit Results

| Category | Score |
|---|---:|
| Performance | 92/100 |
| Accessibility | 97/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |

## Key Audit Findings

1. Touch targets need sufficient size and spacing.
2. Render-blocking resources affect loading performance.
3. Image delivery can be improved.
4. Cache lifetimes can be optimized.
5. Unused JavaScript affects page efficiency.

Keyboard navigation was manually tested using Tab, Shift + Tab and Enter.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Vite
- Lighthouse
- GitHub

## Project Structure

```text
india-post-accessibility-audit/
├── client/
│   ├── src/
│   │   ├── app.js
│   │   └── style.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   │   └── index.js
│   └── package.json
├── docs/
│   ├── screenshots/
│   ├── accessibility-audit.md
│   └── architecture.md
├── tests/
│   └── accessibility/
├── .gitignore
└── README.md
```

## How to Run Locally

### Requirements
- Node.js
- npm

### Start Backend

```bash
cd server
npm install
npm run dev
```

Backend runs at `http://localhost:5000`.

### Start Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the localhost URL provided by Vite.

## Features

- Postal services directory
- Search and filter functionality
- Frontend and backend integration
- Responsive layout
- Basic accessibility considerations

## Screenshots

See `docs/screenshots/` for Lighthouse results and application screenshots.

## Disclaimer

This is an educational demonstration project. It is not affiliated with or connected to the official India Post backend or services.

## Author

Chandresh N

B.Tech Computer Science and Engineering Student
