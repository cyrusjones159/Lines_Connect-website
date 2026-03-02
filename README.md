# Lines Connect Website

A portfolio website for Lines Connect - freelance artist and content creator.

## GitHub Pages Setup

This website is ready to be deployed to GitHub Pages. Follow these steps:

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `linesconnect-website`)
4. Choose "Public" (required for free GitHub Pages)
5. Don't initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Push Your Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/ (root)"
6. Click "Save"

### 4. Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

It may take a few minutes for the site to go live after enabling GitHub Pages.

## Project Structure

```
├── index.html              # Main landing page (home)
├── about/
│   └── index.html         # About page
├── contact/
│   └── index.html         # Contact page
├── portfolio/
│   └── index.html         # Portfolio page
├── store/
│   └── index.html         # Store page
└── assets/
    ├── css/               # Stylesheets
    ├── images/            # Images and graphics
    ├── icons/             # Social media icons
    └── js/                # JavaScript files
```

## Features

- Responsive design
- Portfolio gallery
- Contact form
- Store showcase
- Social media integration
- Live stream schedule

## Navigation

The main landing page provides navigation to:
- **Portfolio** - View artwork gallery
- **Store** - Browse available products
- **Contact** - Get in touch and view stream schedule
- **About** - Learn more about Lines Connect
- **Social Links** - YouTube, Instagram, TikTok, X, Twitch, Fiverr

## Local Development

To view the website locally, simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Notes

- Keep the `home` folder as is - it contains the original home page
- The root `index.html` is the main entry point for GitHub Pages
- All asset paths are relative to their page location
- The about page links back to the home page (root)
- Contact, Portfolio, and Store pages have breadcrumb navigation

## License

© Lines Connect. All rights reserved.
