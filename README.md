# 🇮🇳 India Votes - Election Process Education

> **This is the 2nd challenge for Google Prompt War by Alakesh Debnath.**

**India Votes** is an interactive, highly visual, and educational web application designed to help users understand the world's largest democratic exercise — the Indian Election Process.

## 🌟 Features

*   **Interactive EVM Simulator**: Experience a simulated voting machine (EVM) with visual VVPAT confirmation.
*   **Step-by-Step Timeline**: An accordion-style timeline explaining every phase from the initial Election Announcement to Government Formation.
*   **The Voter's Journey**: A tabbed guide walking first-time voters through Registration, Preparation, Polling Day, and Counting.
*   **Key Constitutional Bodies**: Learn about the Election Commission of India (ECI), Returning Officers, and Observers who ensure free and fair elections.
*   **Model Code of Conduct**: A clear breakdown of what is allowed and what is strictly banned during the campaign period.
*   **Knowledge Quiz**: An interactive 8-question quiz with instant feedback and scoring to test your knowledge of Indian democracy.

## 💻 Tech Stack

This project is built purely with native web technologies. No heavy frameworks or libraries required.

*   **HTML5**: Semantic and accessible structure.
*   **CSS3**: Modern styling utilizing CSS Variables, Flexbox/Grid, Glassmorphism, CSS animations, and responsive media queries.
*   **Vanilla JavaScript**: Handling interactive tabs, the voting simulator, the dynamic quiz engine, and scroll-triggered animations.

## 🚀 How to Run Locally

You can run this project locally in seconds:

1.  **Clone the repository** (or download the files).
2.  **Navigate to the project directory**:
    ```bash
    cd Election-process-education
    ```
3.  **Start a local server**. You can use any static file server. 
    *   *Using Python:*
        ```bash
        python -m http.server 8080
        ```
    *   *Using Node (live-server):*
        ```bash
        npx live-server
        ```
4.  **Open your browser** and navigate to `http://localhost:8080`.

## ☁️ Cloud Deployment

This project is "Cloud Ready" and comes pre-configured with files for the most popular modern hosting platforms.

### 1. Vercel (Recommended)
This repository includes a `vercel.json` file ensuring secure headers and clean URLs.
- Simply import this GitHub repository directly into your [Vercel Dashboard](https://vercel.com). Vercel will automatically detect the static files and deploy them instantly.

### 2. Google Firebase Hosting
A `firebase.json` file is included for seamless deployment to Google Cloud's Firebase.
- Run `firebase init hosting` (don't overwrite the existing `firebase.json`)
- Run `firebase deploy`

### 3. Docker Container (AWS, Google Cloud Run, DigitalOcean)
For enterprise/containerized environments, a production-ready `Dockerfile` running Nginx is included.
- **Build the image**: `docker build -t india-votes-app .`
- **Run the container**: `docker run -p 8080:80 india-votes-app`

## 📂 Project Structure

```
Election-process-education/
├── index.html     # Main HTML structure and content
├── style.css      # Styling, layout, animations, and responsive design
├── app.js         # Interactivity (Quiz, EVM, Timeline, Tabs)
├── hero-image.png # Custom generated hero illustration
├── bg-flag.png    # Indian flag abstract background
└── README.md      # Project documentation
```

---
*Made with 🧡 for Indian Democracy.*
