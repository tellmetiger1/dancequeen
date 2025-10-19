# Deployment Guide for Dance Queen Q Website

## Option 1: Private Repository with GitHub Actions (Recommended)

### Setup Steps:

1. **Create a private repository** on GitHub
2. **Push your code** to the private repository
3. **Enable GitHub Pages** in repository settings:
   - Go to Settings > Pages
   - Source: "GitHub Actions"
4. **Push to main branch** - the workflow will automatically deploy

### Benefits:
- ✅ Source code stays private
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ Professional approach

---

## Option 2: Public Repository (Simple but less secure)

### Setup Steps:

1. **Create a public repository** on GitHub
2. **Push your code** to the repository
3. **Enable GitHub Pages** in repository settings:
   - Go to Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main" / "root"

### Benefits:
- ✅ Easiest setup
- ✅ Free hosting
- ✅ Automatic deployments

### Drawbacks:
- ❌ Source code is publicly visible
- ❌ Anyone can see your development history

---

## Option 3: Separate Public Repository for Website Only

### Setup Steps:

1. **Keep your main repository private**
2. **Create a new public repository** (e.g., `dancequeenq-website`)
3. **Copy only the website files** to the new repository:
   - `index.html`
   - `classes.html`
   - `competition.html`
   - `teachers.html`
   - `contact.html`
   - `styles.css`
   - `script.js`
4. **Enable GitHub Pages** on the new repository

### Benefits:
- ✅ Source code stays private
- ✅ Clean separation
- ✅ Easy to manage

### Drawbacks:
- ❌ Need to maintain two repositories
- ❌ Manual deployment process

---

## Recommended Approach: Private Repo + GitHub Actions

I've already set up the GitHub Actions workflow file (`.github/workflows/deploy.yml`) for you. This is the most professional approach:

1. **Create a private repository** on GitHub
2. **Push your code** to the private repository
3. **Enable GitHub Pages** with "GitHub Actions" as the source
4. **The website will automatically deploy** when you push to main

This gives you the best of both worlds: private source code and free hosting with automatic deployments.

## Custom Domain Setup

If you want to use a custom domain (e.g., `dancequeenq.com`):

1. **Add a CNAME file** to your repository with your domain name
2. **Configure DNS** to point to GitHub Pages
3. **Enable HTTPS** in repository settings

## Form Handling

For production use, you'll want to add form handling:

### Option A: Formspree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form actions in HTML files

### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Configure email service
3. Add EmailJS script to your pages

## Performance Optimization

For production, consider:

1. **Minify CSS and JavaScript**
2. **Optimize images** (compress and use WebP format)
3. **Add a favicon** (currently missing - causes 404 error)
4. **Enable GZIP compression** (GitHub Pages handles this automatically)

## Monitoring and Analytics

Consider adding:
- Google Analytics for visitor tracking
- Google Search Console for SEO monitoring
- Uptime monitoring service

## Security Considerations

- Never commit sensitive information (API keys, passwords)
- Use environment variables for configuration
- Regularly update dependencies
- Monitor for security vulnerabilities
