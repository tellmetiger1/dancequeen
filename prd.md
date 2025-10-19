# Dance Queen Q – Website Product Requirements Document (PRD)

## 1. Overview

**Product Name:** Dance Queen Q Website  
**Purpose:** Create a visually appealing and informative static website to promote the Dance Queen Q dance studio, showcase teachers and students, and enable class registration and communication.  
**Hosting:** GitHub Pages (static site)  
**Tech Stack:**
- HTML, CSS, JavaScript (Vanilla or lightweight framework such as Vue.js optional)
- GitHub Pages for hosting
- Optional: Formspree / EmailJS for contact form email submission
- Optional: Google Sheets or Airtable integration for class registration tracking

## 2. Goals and Objectives

| Goal | Description |
|------|-------------|
| Brand Presence | Provide an elegant and professional digital presence for Dance Queen Q |
| Information Hub | Allow visitors to learn about classes, teachers, and studio philosophy |
| Engagement | Encourage visitors to register for classes or join the competition team |
| Accessibility | Ensure the site works across devices (desktop, tablet, mobile) |
| Scalability | Design modular structure to support future features (payments, schedule automation, etc.) |

## 3. Target Audience

- **Primary:** Students and parents in Arlington Heights area seeking dance classes
- **Secondary:** Dance competition judges, event organizers, and potential sponsors
- **Tertiary:** Visitors interested in studio philosophy or exploring dance opportunities

## 4. Site Structure & Navigation

### Header
- Logo (top-left)
- Navigation bar (top-right): About Us | Join Our Classes | Our Competition Team | Meet Our Teachers | Contact Us

### Footer
- Studio Info (address, email)
- Social Media (optional future addition)
- Copyright © Dance Queen Q

## 5. Page Sections

### 1. About Us
**Title:** About Dance Queen Q  
**Text:**
> Welcome to Dance Queen Q, where passion meets precision. Our studio is dedicated to nurturing dancers of all ages and skill levels in a supportive and inspiring environment.

**Icons (with labels):**
- Chinese Dance 🩰
- Ballet 🩰
- Jazz 💃
- Hip Hop 🕺
- Contemporary 🎭

### 2. Join Our Classes
**Title:** Join Our Classes  
**Text:**
> Explore our diverse class offerings and find the perfect fit for your dance journey.

**Class Schedule Example Table:**

| Time | Monday | Tuesday | Wednesday | Thursday | Friday |
|------|--------|---------|-----------|----------|--------|
| 4:00 PM | Ballet I | Jazz I | Ballet II | Hip Hop I | Contemporary I |
| 5:30 PM | Jazz II | Ballet III | Hip Hop II | Jazz III | Ballet IV |
| 7:00 PM | Adult Jazz | Adult Ballet | Adult Hip Hop | Adult Contemporary | Open Studio |

**Features:**
- Online registration form (HTML form)
- Payment integration (optional future phase)
- FAQs (expandable accordion format)

### 3. Our Competition Team
**Title:** Our Competition Team  
**Text:**
> Meet our award-winning dancers who represent Dance Queen Q at regional and national competitions.

**Layout:**
- 4 photo thumbnails in grid view
- Clicking a photo opens modal view with dancer name and optional caption

### 4. Meet Our Teachers
**Title:** Meet Our Teachers  
**Text:**
> Our experienced instructors bring passion, technique, and mentorship to every class.

**Profiles:**

| Name | Profile Details |
|------|----------------|
| Ruiqi Liu | Founder & Artistic Director, specializing in Chinese dance and choreography. |
| Brandon | Hip Hop instructor, experienced performer and youth mentor. |
| Kevin | Ballet & Contemporary teacher, national competition coach. |
| Myka | Jazz instructor with creative choreography background. |
| Inna | Ballet technique specialist and youth performance coach. |

**UX:**
- Teacher cards → Click → Pop-up modal with bio + full photo

### 5. Contact Us
**Title:** Contact Us  
**Text:**
> We'd love to hear from you! Reach out with questions or to schedule a trial class.

**Form Fields:**
- Name (required)
- Email (required)
- Message (required)
- Submit Button → Sends email to dancequeenq77@gmail.com

**Implementation Suggestion:**
Use Formspree, EmailJS, or GitHub Pages-compatible static form service.

**Studio Info:**
> Dance Queen Q Studio  
> 4230/4232 N Arlington Heights Rd  
> Arlington Heights, IL 60004  
> Email: dancequeenq77@gmail.com

### 6. Studio Philosophy
**Text:**
> At Dance Queen Q, we believe in nurturing every student's unique potential. Our studio is built on respect—for students, parents, and teachers alike. We foster a positive and inclusive environment where communication and collaboration thrive. We are proud to be a community where everyone feels seen, heard, and supported.

### 7. Community Message
**Text:**
> Dance Queen Q is more than a dance studio—it's a family. We value strong relationships and open communication with parents and students. Together, we create a space where dancers grow not only in skill but in confidence and character.

### 8. Competition Philosophy
**Text:**
> Students at Dance Queen Q are encouraged to participate in dance competitions based on their personal goals and readiness. We support each dancer's journey, whether they aim to perform, compete, or simply enjoy the art of dance.

## 6. Design Requirements

| Element | Specification |
|---------|---------------|
| Color Palette | Elegant and minimal — White background, Gold/Pink/Black accents |
| Typography | Header: Playfair Display or Montserrat, Body: Lato or Open Sans |
| Layout | Responsive, mobile-friendly (flexbox/grid) |
| Imagery | High-quality photos of dancers, teachers, and studio environment |
| Animation | Smooth fade-ins or slide-ins for sections (optional, lightweight JS/CSS) |

## 7. Future Enhancements (Phase 2)

- Online Payment Integration (Stripe / PayPal)
- Dynamic Class Calendar using Google Calendar API
- Student Portal / Member Login
- Blog Section for event updates and achievements
- Video Gallery (performances and rehearsals)

## 8. Success Metrics

| Metric | Target |
|--------|--------|
| Page Load Speed | < 2 seconds |
| Mobile Responsiveness | 100% compatibility |
| Visitor Engagement | 30% of visitors click "Join Our Classes" |
| Form Submissions | Minimum 5 new inquiries per month |
| SEO Ranking | Appear on first page for "Dance studio Arlington Heights IL" |

## 9. Timeline (Initial Phase)

| Phase | Deliverables | Duration |
|-------|--------------|----------|
| 1. Planning | Finalize copy, assets, and GitHub repo setup | 1 week |
| 2. Design | Layout design in Figma or similar | 1 week |
| 3. Development | HTML/CSS/JS static site coding | 2 weeks |
| 4. Testing | Responsive & email form testing | 1 week |
| 5. Launch | Deploy to GitHub Pages | 1 day |
