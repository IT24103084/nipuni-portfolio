# Nipuni Karunanayake — Portfolio

A modern, animated, dark-theme portfolio website built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**.

---

## 📁 Folder Structure

```
nipuni-portfolio/
├── index.html                  ← HTML entry point
├── package.json                ← Dependencies
├── vite.config.js              ← Vite config
├── tailwind.config.js          ← Tailwind config
├── postcss.config.js           ← PostCSS config
├── public/
│   └── favicon.svg             ← NK favicon
└── src/
    ├── main.jsx                ← React root
    ├── App.jsx                 ← Assembles all sections
    ├── index.css               ← Global styles + Tailwind
    ├── data.js                 ← ⭐ All your content lives here
    ├── components/
    │   ├── Navbar.jsx          ← Sticky nav with mobile menu
    │   ├── NeuralSphere.jsx    ← 3D animated hero visual (Three.js)
    │   ├── ParticleBackground.jsx  ← Canvas particle animation
    │   ├── SectionTag.jsx      ← Reusable pill label
    │   └── Footer.jsx          ← Footer links
    └── sections/
        ├── Hero.jsx            ← Hero with 3D sphere
        ├── About.jsx           ← About me + profile card
        ├── Skills.jsx          ← Skills grid
        ├── Projects.jsx        ← Project cards
        ├── Certifications.jsx  ← Certificate cards
        ├── Education.jsx       ← Timeline education
        └── Contact.jsx         ← Contact form + info
```

---

## 🚀 Running Locally

### 1. Prerequisites
- Node.js v18+ (download from https://nodejs.org)
- npm (comes with Node.js)

### 2. Setup

```bash
# Clone or copy this folder, then:
cd nipuni-portfolio

# Install all dependencies
npm install

# Start the development server
npm run dev
```

Visit: **http://localhost:5173**

### 3. Build for Production

```bash
npm run build
# Output goes to the /dist folder
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying on Vercel (Free)

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/nipuni-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com and sign in with GitHub
   - Click **"New Project"**
   - Import your `nipuni-portfolio` repository
   - Vercel auto-detects Vite — click **Deploy**
   - ✅ Done! Your portfolio is live at `https://nipuni-portfolio.vercel.app`

3. **Custom Domain (optional)**
   - In Vercel project settings → Domains → add your domain

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
# Follow prompts — select "Vite" framework
```

---

## ✏️ Customising Content

All your personal data is in one file: **`src/data.js`**

- Update `personalInfo` for name, bio, links, etc.
- Add/edit projects in the `projects` array
- Modify `skillCategories` to add or rename skills
- Edit `certifications` and `education` arrays

---

## 🎨 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| 3D Graphics | React Three Fiber + Three.js + Drei |
| Icons | Lucide React |
| Fonts | Syne (display) + DM Sans (body) |

---

## 📧 Setting Up the Contact Form

The form currently shows a success animation but doesn't send emails.
To wire it to real email delivery, use **Formspree** (free):

1. Go to https://formspree.io → create an account → New Form
2. Copy your form endpoint URL (e.g. `https://formspree.io/f/xabcdefg`)
3. In `src/sections/Contact.jsx`, replace the `handleSubmit` function:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' },
  })
  setSent(true)
  e.target.reset()
  setTimeout(() => setSent(false), 3500)
}
```

4. Add `name` attributes to each input field (e.g. `name="email"`)

---

Built with 💜 by Nipuni Karunanayake
