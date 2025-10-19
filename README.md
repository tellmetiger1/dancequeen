# Dance Queen Q Website

A beautiful, responsive static website for Dance Queen Q dance studio in Arlington Heights, IL.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, elegant design with gold/pink/black color scheme
- **Interactive Elements**: Smooth animations, modals, and form validation
- **Multiple Pages**: Home, Classes, Competition Team, Teachers, and Contact
- **Contact Forms**: Registration and contact forms with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Pages

1. **Home (index.html)**: About us, studio philosophy, and dance styles
2. **Classes (classes.html)**: Class schedule, registration form, and FAQs
3. **Competition Team (competition.html)**: Team members, achievements, and information
4. **Teachers (teachers.html)**: Teacher profiles with detailed bios and qualifications
5. **Contact (contact.html)**: Contact form, studio information, and map

## Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript**: Interactive functionality and form validation
- **Google Fonts**: Playfair Display and Lato typography
- **Font Awesome**: Icons for enhanced visual appeal

## File Structure

```
dancequeen/
├── index.html          # Homepage
├── classes.html        # Classes page
├── competition.html    # Competition team page
├── teachers.html       # Teachers page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── prd.md             # Product Requirements Document
└── README.md          # This file
```

## Getting Started

### Local Development

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

### GitHub Pages Deployment

1. Push the code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Colors
The main color scheme is defined in CSS variables:
- Primary Gold: `#d4af37`
- Dark Gold: `#b8941f`
- Text: `#2c2c2c`
- Light Text: `#666`

### Content
- Update teacher information in `teachers.html`
- Modify class schedule in `classes.html`
- Change studio information in `contact.html` and footer sections
- Replace placeholder images with actual photos

### Forms
The contact and registration forms currently use client-side validation. For production:
- Integrate with Formspree, EmailJS, or similar service
- Add server-side form handling
- Implement email notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and assets
- Minified CSS and JavaScript (for production)
- Fast loading times
- Mobile-first responsive design

## Future Enhancements

- Online payment integration
- Dynamic class calendar
- Student portal/login system
- Blog section
- Video gallery
- Advanced form handling

## License

© 2024 Dance Queen Q. All rights reserved.

## Contact

For questions about this website or Dance Queen Q studio:
- Email: dancequeenq77@gmail.com
- Address: 4230/4232 N Arlington Heights Rd, Arlington Heights, IL 60004
