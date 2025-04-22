# IEEE SB CEC Landing Page

This is a single-page landing website for the IEEE Student Branch, College of Engineering Chengannur (IEEE SB CEC). The site uses React with Vite for the frontend, plain CSS for styling, and GSAP with ScrollTrigger for scroll animations.

## Features

- **Hero Section:** Prominent display of the IEEE SB CEC title, a compelling tagline, and a clear Call-to-Action (CTA) button.
- **About Section:** A concise description of the branch, outlining its history, purpose, along with its Vision, Mission, and Core Values.
- **Latest Events Section:** Showcases recent or representative events with details including title, date, a brief description, and placeholder imagery.
- **Testimonials Section:** Features quotes from members with their name, role, and a placeholder image.
- **Footer:** Contains essential contact information, links to social media profiles, and a copyright notice.
- **Scroll Animations:** Engaging animations for elements or sections as they scroll into view, using GSAP and its ScrollTrigger plugin.
- **Responsive Design:** Adapts to various screen sizes from desktop to mobile with plain CSS.

## Technologies Used

- React (with Vite)
- Plain CSS for styling
- GSAP for animations
- ScrollTrigger plugin for scroll-based animations

## Setup and Running

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ieee-sb-cec-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the site.

## Building for Production

To build the application for production:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Project Structure

```
ieee-sb-cec-landing-page/
├── src/
│   ├── assets/             # Static assets like images
│   ├── components/         # React components
│   ├── styles/             # CSS files
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Entry point
├── public/                 # Public assets
├── index.html              # HTML template
└── package.json            # Project dependencies and scripts
```

## License

[MIT License](LICENSE)

## Acknowledgements

This project was created as part of a web development task for IEEE SB CEC.
