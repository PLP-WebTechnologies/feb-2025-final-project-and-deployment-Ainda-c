<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dadius Ainda | Portfolio</title>
    <link rel ="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/contact.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/projects.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <div class="cursor"></div>
    <!-- Header -->
     <header id="header">
        <div class="container">
            <div class="logo">
                <a href="#hero">DA</a>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="#hero" class="nav-link active">Home</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#projects" class="nav-link">Projects</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </nav>
            <div class="theme-toggle">
                <div class="toggle-circle"></div>
            </div>
            <div class="menu-toggle">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
     </header>

     <!-- Mobile Menu -->
     <div class="mobile-menu">
        <ul>
            <li><a href="#hero" class="mobile-nav-link">Home</a></li>
            <li><a href="#about" class="mobile-nav-link">About</a></li>
            <li><a href="#projects" class="mobile-nav-link">Projects</a></li>
            <li><a href="#contact" class="mobile-nav-link">Contact</a></li>
        </ul>
     </div>

     <!-- Hero Section -->
     <section id="hero" class="section">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="animate-in">Hello, I'm <span>Dadius Ainda</span></h1>
                    <h2 class="animate-in delay-1">Front-End Developer</h2>
                    <p class="animate-in delay-2">I create beautiful and functional websites.</p>
                    <div class="hero-buttons animate-in delay-3">
                        <a href="#projects" class="btn btn-primary">View my work</a>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
                    </div>
                    <div class="hero-image animate-in delay-2">
                        <div class="shape"></div>
                        <img src="images/prof.jpg" alt="Hero Image">
                    </div>
                    <div class="scroll-indicator animate-in delay-4">
                        <span class="text">Scroll</span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
        </div>
     </section>

     <!-- About Section-->
      <section id="about" class="section">
        <div class="container">
            <div class="section-header">
                <h2>About Me</h2>
                <p>Get to know more about me, my skills, and what i do</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Who am I</h3>
                    <p>I'm a Front-end Developer based in kenya, Nairobi with a passion in for creating
                        intuitive and dynamic user experiences.</p>
                    <p>I enjoy turning complex problems into simple and intuitive designs.When I'm not coding
                        or pushing pixels, you'll find me cooking or exploring the outdoors.</p>
                    <div class="about-buttons">
                        <a href="#" class="btn btn-outline">Download CV</a>
                    </div>
                </div>
                <div class="skills">
                    <h3>My Skills</h3>
                    <div class="skill-grid">
                        <div class="skill-item">
                            <div class="skill-icon">
                                <img src="images/html5.jpg" alt="HTML5">
                            </div>
                            <div class="skill-info">
                                <h4>HTML5</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" data-level = "95"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-icon">
                                <img src="images/css3-original.jpg" alt="CSS3">
                            </div>
                            <div class="skill-info">
                                <h4>CSS3</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" data-level="90"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-icon">
                                <img src="images/javascript.jpg" alt="JavaScript">
                            </div>
                            <div class="skill-info">
                                <h4>JavaScript</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" data-level="80"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-icon">
                                <img src="images/reac.jpg" alt="React">
                            </div>
                            <div class="skill-info">
                                <h4>React</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" data-level="75"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-icon">
                                <img src="images/git.jpg" alt="Git">
                            </div>
                            <div class="skill-info">
                                <h4>Git</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" data-level="85"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-icon">
                                <img src="images/python.jpg" alt="Python">
                            </div>
                            <div class="skill-info">
                                <h4>Python</h4>
                                <div class="skill-level">
                                    <div class="skill-progress" data-level="90"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <!-- projects Section-->
       <section id="projects" class="section">
        <div class="container">
            <div class="section-header">
                <h2>My Projects</h2>
                <p>A selection of my recent work</p>
            </div>
            <div class="project-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="web">Web Development</button>
                <button class="filter-btn" data-filter="design">UI/UX Design</button>
                <button class="filter-btn" data-filter="app">Mobile App</button>
            </div>
            <div class="projects-grid">
                <div class="project-card" data-category="web">
                    <div class="project-image">
                        <img src="images/project1.jpg" alt="Project 1">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="icon-link"></i>View Project</a>
                                <a href="#" class="project-link"><i class="icon-github"></i>Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>E-commerce Website</h3>
                        <p>A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.</p>
                        <div class="project-tags">
                            <span class="tag">HTML</span>
                            <span class="tag">CSS</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">API</span>
                        </div>
                    </div>
                </div>
                <div class="project-card" data-category="design">
                    <div class="project-image">
                        <img src="images/project2.jpg" alt="project 2">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="icon-link"></i>View Project</a>
                                <a href="#" class="project-link"><i class="icon-github"></i>Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>Dashboard UI Design</h3>
                        <p>A modern dashboard interface for a financial analytics application with data visualization</p>
                        <div class="project-tags">
                            <span class="tag">Figma</span>
                            <span class="tag">UI/UX</span>
                            <span class="tag">Prototype</span>
                        </div>
                    </div>
                </div>
                <div class="project-card" data-category="app">
                    <div class="project-image">
                        <img src="images/project3.jpg" alt="project 3">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="icon-link"></i>View Project</a>
                                <a href="#" class="project-link"><i class="icon-github"></i>Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>Fittness Tracking App</h3>
                        <p>A mobile application for tracking workouts, nutrition, and health metrics with progress visualization</p>
                        <div class="project-tags">
                            <span class="tag">React Native</span>
                            <span class="tag">Firebase</span>
                            <span class="tag">UX Research</span>
                        </div>
                    </div>
                </div>
                <div class="project-card" data-category="web">
                    <div class="project-image">
                        <img src="images/project4.jpg" alt="project 4">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="icon-link"></i>View Project</a>
                                <a href="#" class="project-link"><i class="icon-github"></i>Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>Task Management System</h3>
                        <p>A web application for team collaboration with task assignments, deadlines, and progress tracking.</p>
                        <div class="project-tags">
                            <span class="tag">JavaScript</span>
                            <span class="tag">Node.js</span>
                            <span class="tag">MongoDB</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
       </section>

       <!--Contact Section-->
       <section id="contact" class="section">
        <div class="container">
            <div class="section-header">
                <h2>Get In Touch</h2>
                <p>Let's talk about your project or just say hello</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon"><i class="icon-location"></i></div>
                    </div>
                    <div class="contact-details">
                        <h3>Location</h3>
                        <p>Kenya, Nairobi</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="icon-mail"></i></div>
                    <div class="contact-details">
                        <h3>Email</h3>
                        <p>dadiusainda@gmail.com</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="icon-phone"></i></div>
                    <div class="contact-details">
                        <h3>+2547 437 965 84</h3>
                    </div>
                </div>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="icon-github"></i>Github</a>
                     <a href="#" class="social-link"><i class="icon-linkedin"></i>linkedin</a>
                      <a href="#" class="social-link"><i class="icon-twitter"></i>twitter</a>
                </div>
            </div>
            <div class="contact-form">
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
       </section>

       <!-- Footer -->
        <footer id="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-logo">
                        <a href="#hero">DA</a>
                    </div>
                    <div class="copyright">
                        <p>&copy; 2025 Dadius Ainda. All Rights Reserved.</p>
                    </div>
                    <div class="back-to-top">
                        <a href="#hero" id="scrollToTop">Back to Top</a>
                    </div>
                </div>
            </div>
        </footer>
        <!--Javascript files -->
        <script src="js/main.js"></script>
        <script src="js/animations.js"></script>
        <script src="js/cursor.js"></script>
        <script src="js/form.js"></script>
        <script src="js/navigation.js"></script>
        <script src="js/projects.js"></script>
        <script src="js/theme.js"></script>
</body>
</html>





















# Final Project and Deployment

## Objectives
Build a fully functional web application.
Apply HTML, CSS, and JavaScript concepts learned.
Deploy the project using GitHub Pages, Netlify, or Vercel.

## Instructions
Choose one of the following project ideas:
Blog Website: Implement a multi-page site with navigation.
Ecommerce Website: Implement a multi-page site with navigation.

>[!NOTE]
> - Include at least:
> - A responsive design.
> - JavaScript interactivity.
> - A deployment link.

## Tasks

Create a well-structured HTML5 document.
Use at least 5 different HTML elements.
Ensure semantic correctness.

Good luck and happy coding! 🚀💻
