import { useEffect } from 'react';
import './App.css';


function App() {
  useEffect(() => {
    let currentIndex = 0;
    const portfolioData = [{id:1,title:'Neural Network',description:'Advanced AI system with deep learning capabilities for predictive analytics and pattern recognition.',image:'images/neural-network.jpg',tech:['TensorFlow','Python','CUDA']},{id:2,title:'Quantum Cloud',description:'Next-generation cloud infrastructure leveraging quantum computing for unprecedented processing power.',image:'images/quantum-cloud.jpg',tech:['AWS','Kubernetes','Docker']},{id:3,title:'Blockchain Vault',description:'Secure decentralized storage solution using advanced encryption and distributed ledger technology.',image:'images/blockchain-vault.jpg',tech:['Ethereum','Solidity','Web3']},{id:4,title:'Cyber Defense',description:'Military-grade cybersecurity framework with real-time threat detection and automated response.',image:'images/cyber-defense.jpg',tech:['Zero Trust','AI Defense','Encryption']},{id:5,title:'Data Nexus',description:'Big data processing platform capable of analyzing petabytes of information in real-time.',image:'images/data-nexus.jpg',tech:['Apache Spark','Hadoop','Kafka']},{id:6,title:'AR Interface',description:'Augmented reality system for immersive data visualization and interactive experiences.',image:'images/ar-interface.jpg',tech:['Unity','ARCore','Computer Vision']},{id:7,title:'IoT Matrix',description:'Intelligent IoT ecosystem connecting millions of devices with edge computing capabilities.',image:'images/iot-matrix.jpg',tech:['MQTT','Edge AI','5G']}];
    
    const updateCarousel=()=>{const items=document.querySelectorAll('.carousel-item');const indicators=document.querySelectorAll('.indicator');const totalItems=items.length;const isMobile=window.innerWidth<=768;const isTablet=window.innerWidth<=1024;items.forEach((item,index)=>{let offset=index-currentIndex;if(offset>totalItems/2)offset-=totalItems;else if(offset<-totalItems/2)offset+=totalItems;const absOffset=Math.abs(offset);const sign=offset<0?-1:1;item.style.transition='all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';let spacing1=isMobile?280:isTablet?340:400;let spacing2=isMobile?420:isTablet?520:600;let spacing3=isMobile?550:isTablet?650:750;if(absOffset===0){item.style.transform='translate(-50%, -50%) translateZ(0) scale(1)';item.style.opacity='1';item.style.zIndex='10';}else if(absOffset===1){const rotation=isMobile?25:30;const scale=isMobile?0.88:0.85;item.style.transform=`translate(-50%, -50%) translateX(${sign*spacing1}px) translateZ(-200px) rotateY(${-sign*rotation}deg) scale(${scale})`;item.style.opacity='0.8';item.style.zIndex='5';}else if(absOffset===2){const rotation=isMobile?35:40;const scale=isMobile?0.75:0.7;item.style.transform=`translate(-50%, -50%) translateX(${sign*spacing2}px) translateZ(-350px) rotateY(${-sign*rotation}deg) scale(${scale})`;item.style.opacity='0.5';item.style.zIndex='3';}else if(absOffset===3){const rotation=isMobile?40:45;const scale=isMobile?0.65:0.6;item.style.transform=`translate(-50%, -50%) translateX(${sign*spacing3}px) translateZ(-450px) rotateY(${-sign*rotation}deg) scale(${scale})`;item.style.opacity='0.3';item.style.zIndex='2';}else{item.style.transform='translate(-50%, -50%) translateZ(-500px) scale(0.5)';item.style.opacity='0';item.style.zIndex='1';}});indicators.forEach((indicator,index)=>{indicator.classList.toggle('active',index===currentIndex);});};
    
    const nextSlide=()=>{currentIndex=(currentIndex+1)%portfolioData.length;updateCarousel();};
    const prevSlide=()=>{currentIndex=(currentIndex-1+portfolioData.length)%portfolioData.length;updateCarousel();};
    
    const carousel=document.getElementById('carousel');const indicatorsContainer=document.getElementById('indicators');if(carousel&&indicatorsContainer){portfolioData.forEach((data,index)=>{const item=document.createElement('div');item.className='carousel-item';item.innerHTML=`<div class="card"><div class="card-number">0${data.id}</div><div class="card-image"><img src="${data.image}" alt="${data.title}"></div><h3 class="card-title">${data.title}</h3><p class="card-description">${data.description}</p><div class="card-tech">${data.tech.map(tech=>`<span class="tech-badge">${tech}</span>`).join('')}</div><button class="card-cta">Explore</button></div>`;carousel.appendChild(item);const indicator=document.createElement('div');indicator.className='indicator'+(index===0?' active':'');indicator.onclick=()=>{currentIndex=index;updateCarousel();};indicatorsContainer.appendChild(indicator);});updateCarousel();}
    
    const particlesContainer=document.getElementById('particles');if(particlesContainer){for(let i=0;i<15;i++){const particle=document.createElement('div');particle.className='particle';particle.style.left=Math.random()*100+'%';particle.style.top=Math.random()*100+'%';particle.style.animationDelay=Math.random()*20+'s';particle.style.animationDuration=(18+Math.random()*8)+'s';particlesContainer.appendChild(particle);}}
    
    const animateCounter=(element)=>{const target=parseInt(element.dataset.target);const duration=2000;const step=target/(duration/16);let current=0;const counter=setInterval(()=>{current+=step;if(current>=target){element.textContent=target;clearInterval(counter);}else{element.textContent=Math.floor(current);}},16);};
    
    const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.querySelectorAll('.stat-number').forEach(number=>{if(!number.classList.contains('animated')){number.classList.add('animated');animateCounter(number);}});}});},{threshold:0.5});const statsSection=document.querySelector('.stats-section');if(statsSection)observer.observe(statsSection);
    
    const nextBtn=document.getElementById('nextBtn');const prevBtn=document.getElementById('prevBtn');const menuToggle=document.getElementById('menuToggle');const navMenu=document.getElementById('navMenu');const header=document.getElementById('header');const contactForm=document.getElementById('contactForm');if(nextBtn)nextBtn.onclick=nextSlide;if(prevBtn)prevBtn.onclick=prevSlide;const autoRotate=setInterval(nextSlide,5000);const handleKeydown=(e)=>{if(e.key==='ArrowLeft')prevSlide();if(e.key==='ArrowRight')nextSlide();};document.addEventListener('keydown',handleKeydown);const handleResize=()=>updateCarousel();window.addEventListener('resize',handleResize);if(menuToggle&&navMenu){menuToggle.onclick=()=>{navMenu.classList.toggle('active');menuToggle.classList.toggle('active');};}const handleScroll=()=>{if(header){header.classList.toggle('scrolled',window.scrollY>100);}const sections=document.querySelectorAll('section[id]');const navLinks=document.querySelectorAll('.nav-link');const scrollPosition=window.scrollY+100;sections.forEach(section=>{const sectionTop=section.offsetTop;const sectionHeight=section.offsetHeight;const sectionId=section.getAttribute('id');if(scrollPosition>=sectionTop&&scrollPosition<sectionTop+sectionHeight){navLinks.forEach(link=>{link.classList.remove('active');const href=link.getAttribute('href').substring(1);if(href===sectionId){link.classList.add('active');}});}});};window.addEventListener('scroll',handleScroll);const navLinks=document.querySelectorAll('.nav-link');navLinks.forEach(link=>{link.onclick=(e)=>{e.preventDefault();const targetId=link.getAttribute('href').substring(1);const targetSection=document.getElementById(targetId);if(targetSection){const headerHeight=header.offsetHeight;const targetPosition=targetSection.offsetTop-headerHeight;window.scrollTo({top:targetPosition,behavior:'smooth'});navMenu.classList.remove('active');menuToggle.classList.remove('active');}};});const categoryTabs=document.querySelectorAll('.category-tab');categoryTabs.forEach(tab=>{tab.onclick=()=>{categoryTabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');};});if(contactForm){contactForm.onsubmit=(e)=>{e.preventDefault();const formData=new FormData(contactForm);const data=Object.fromEntries(formData);alert(`Thank you ${data.name}! Your message has been transmitted successfully.`);contactForm.reset();};}return()=>{clearInterval(autoRotate);document.removeEventListener('keydown',handleKeydown);window.removeEventListener('resize',handleResize);window.removeEventListener('scroll',handleScroll);if(statsSection)observer.unobserve(statsSection);};},[]);
  
  return (

    <div className="App">
     
      {/* Loader */}
      {/* <div className="loader" id="loader">
        <div className="loader-content">
          <div className="loader-prism">
            <div className="prism-face"></div>
            <div className="prism-face"></div>
            <div className="prism-face"></div>
          </div>

          <div
            style={{
              color: "var(--accent-purple)",
              fontSize: "18px",
              textTransform: "uppercase",
              letterSpacing: "3px"
            }}
          >
            Refracting Reality...
          </div>
        </div>
      </div> */}
      
    <header class="header" id="header">
        <nav class="nav-container">
            <a href="#home" class="logo">
                <div class="logo-icon">
                    <div class="logo-prism">
                        <div class="prism-shape"></div>
                    </div>
                </div>
                <span class="logo-text">
                    <span class="prism">Education </span>
                    <span class="flux">App</span>
                </span>
            </a>
            
            <ul class="nav-menu" id="navMenu">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#stats" class="nav-link">Metrics</a></li>
                <li><a href="#skills" class="nav-link">Arsenal</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
                <li><a href="#Login" class="nav-link">Login</a></li>
                
            </ul>
            
            
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
 <section class="skills-section1" id="skills">
        <div class="skills-container">
            <div class="section-header">
                <h2 class="section-title">All Courses</h2>
                {/* <p class="section-subtitle">Mastery of cutting-edge technologies and frameworks</p> */}
            </div>
            
            <div class="skill-categories">
                <div class="category-tab active"data-category="all">All </div>
                <div class="category-tab" data-category="Demo">Demo</div>
                <div class="category-tab" data-category="backend">Backend</div>
                <div class="category-tab" data-category="cloud">Cloud & DevOps</div>
                <div class="category-tab" data-category="emerging">Emerging Tech</div>
                <div class="category-tab " data-category="all">All Skills</div>
                <div class="category-tab" data-category="Demo">Demo</div>
                <div class="category-tab" data-category="backend">Backend</div>
                <div class="category-tab" data-category="cloud">Cloud & DevOps</div>
                <div class="category-tab" data-category="emerging">Emerging Tech</div>
                <div class="category-tab" data-category="all">All Skills</div>
                <div class="category-tab" data-category="Demo">Demo</div>
                <div class="category-tab" data-category="backend">Backend</div>
                <div class="category-tab" data-category="cloud">Cloud & DevOps</div>
                <div class="category-tab" data-category="emerging">Emerging Tech</div>
            </div>

            <div class="skills-hexagon-grid" id="skillsGrid">
              
            </div>
        </div>
    </section>
   
    <section class="hero" id="home">
        <div class="carousel-container">
            <div class="carousel" id="carousel">
                
            </div>
            
            <div class="carousel-controls">
                <button class="carousel-btn" id="prevBtn">‹</button>
                <button class="carousel-btn" id="nextBtn">›</button>
            </div>
            
            <div class="carousel-indicators" id="indicators">
                
            </div>
        </div>
    </section>

    
    <section class="philosophy-section" id="about">
        <div class="philosophy-container">
            <div class="prism-line"></div>
            
            <h2 class="philosophy-headline">
                Refracting Ideas<br/>Into Reality
            </h2>
            
            <p class="philosophy-subheading">
                At PRISM FLUX, we transform complex challenges into elegant solutions through the convergence of 
                cutting-edge technology and visionary design. Every project is a spectrum of possibilities 
                waiting to be discovered.
            </p>
            
            <div class="philosophy-pillars">
                <div class="pillar">
                    <div class="pillar-icon">💎</div>
                    <h3 class="pillar-title">Innovation</h3>
                    <p className="pillar-description">
                        Breaking boundaries with revolutionary approaches that redefine industry standards and push the limits of what's possible. Elevate your designs with premium vector stickers from <a href="#" rel="nofollow" target="_blank">Comming Soon</a>.
                    </p>
                </div>
                
                <div class="pillar">
                    <div class="pillar-icon">🔬</div>
                    <h3 class="pillar-title">Precision</h3>
                    <p className="pillar-description">
                        <p>
  Meticulous attention to detail ensures every pixel, every line of code, and every interaction is perfectly crafted by{" "}
  <a
    href="#"
    rel="nofollow"
    target="_blank"
    style={{
      color: "var(--accent-cyan)",
      textDecoration: "none"
    }}
  >
    Comming Soon
  </a>
  , enhanced with stunning visuals from{" "}
  <a
    href="#"
    rel="nofollow"
    target="_blank"
    style={{
      color: "var(--accent-cyan)",
      textDecoration: "none"
    }}
  >
    Comm
  </a>
  
</p>

                    </p>
                </div>
                
                <div class="pillar">
                    <div class="pillar-icon">∞</div>
                    <h3 class="pillar-title">Evolution</h3>
                    <p class="pillar-description">
                        Continuous adaptation and growth, staying ahead of trends while building timeless solutions for tomorrow. Boost your productivity with the easy-to-use timer tools at <a href="#" rel="nofollow" target="_blank">Comming Soon</a>.
                    </p>
                </div>
            </div>
            
            <div class="philosophy-particles" id="particles">
               
            </div>
        </div>
    </section>

    
    <section class="stats-section" id="stats">
        <div class="section-header">
            <h2 class="section-title">Performance Metrics</h2>
            <p class="section-subtitle">Real-time analytics and achievements powered by cutting-edge technology</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">🚀</div>
                <div class="stat-number" data-target="150">0</div>
                <div class="stat-label">Projects Completed</div>
                <p class="stat-description">Successfully delivered enterprise-level solutions across multiple industries with 100% on-time completion rate.</p>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">⚡</div>
                <div class="stat-number" data-target="99">0</div>
                <div class="stat-label">Client Satisfaction %</div>
                <p class="stat-description">Maintaining excellence through continuous feedback loops and agile development methodologies.</p>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">🏆</div>
                <div class="stat-number" data-target="25">0</div>
                <div class="stat-label">Industry Awards</div>
                <p class="stat-description">Recognized globally for innovation in digital transformation and technological advancement.</p>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">💎</div>
                <div class="stat-number" data-target="500">0</div>
                <div class="stat-label">Code Commits Daily</div>
                <p class="stat-description">Continuous integration and deployment with automated testing ensuring maximum code quality.</p>
            </div>
        </div>
    </section>

    {/* <section class="skills-section" id="skills">
        <div class="skills-container">
            <div class="section-header">
                <h2 class="section-title">Technical Arsenal</h2>
                <p class="section-subtitle">Mastery of cutting-edge technologies and frameworks</p>
            </div>
            
            <div class="skill-categories">
                <div class="category-tab active" data-category="all">All Skills</div>
                <div class="category-tab" data-category="Demo">Demo</div>
                <div class="category-tab" data-category="backend">Backend</div>
                <div class="category-tab" data-category="cloud">Cloud & DevOps</div>
                <div class="category-tab" data-category="emerging">Emerging Tech</div>
            </div>

            <div class="skills-hexagon-grid" id="skillsGrid">
              
            </div>
        </div>
    </section> */}

    
    <section class="contact-section" id="contact">
        <div class="section-header">
            <h2 class="section-title">Initialize Connection</h2>
            <p class="section-subtitle">Ready to transform your vision into reality? Let's connect.</p>
        </div>
        
        <div class="contact-container">
            <div class="contact-info">
                <a href="#" target="_blank" class="info-item">
                    <div class="info-icon">📍</div>
                    <div class="info-text">
                        <h4>Location</h4>
                        <p>Silicon Valley, CA 94025</p>
                    </div>
                </a>
                
                <a href="#" class="info-item">
                    <div class="info-icon">📧</div>
                    <div class="info-text">
                        <h4>Email</h4>
                        <p></p>
                    </div>
                </a>
                
                <a href="tel:+15551234567" class="info-item">
                    <div class="info-icon">📱</div>
                    <div class="info-text">
                        <h4>Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </a>
                
                <a href="#" target="_blank" class="info-item">
                    <div class="info-icon">📅</div>
                    <div class="info-text">
                        <h4>Schedule Meeting</h4>
                        <p>Book a consultation</p>
                    </div>
                </a>
            </div>
            
            <form class="contact-form" id="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required/>
                </div>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                
                <button type="submit" class="submit-btn">Transmit Message</button>
            </form>
        </div>
    </section>

   
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="footer-logo">
                    <div class="logo-icon">
                        <div class="logo-prism">
                            <div class="prism-shape"></div>
                        </div>
                    </div>
                    <span class="logo-text">
                        <span class="prism">Education</span>
                        <span class="flux">App</span>
                    </span>
                </div>
                <p class="footer-description">
                    Refracting complex challenges into brilliant solutions through the convergence of art, science, and technology.
                </p>
                <div class="footer-social">
                    <a href="#" class="social-icon">f</a>
                    <a href="#" class="social-icon">t</a>
                    <a href="#" class="social-icon">in</a>
                    <a href="#" class="social-icon">ig</a>
                </div>
            </div>
            
            <div class="footer-section">
                <h4>Services</h4>
                <div class="footer-links">
                    <a href="#">Web Development</a>
                    <a href="#">App Development</a>
                    <a href="#">Cloud Solutions</a>
                    <a href="#">AI Integration</a>
                </div>
            </div>
            
            <div class="footer-section">
                <h4>Company</h4>
                <div class="footer-links">
                    <a href="#">About Us</a>
                    <a href="#">Our Team</a>
                    <a href="#">Careers</a>
                    <a href="#">Press Kit</a>
                </div>
            </div>
            
            <div class="footer-section">
                <h4>Resources</h4>
                <div class="footer-links">
                    <a href=" ">Documentation</a>
                    <a href="">API Reference</a>
                    <a href="#blog">Blog</a>

                    <a href=" ">Support</a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="copyright">
                © 2026 Education App. All rights reserved.
            </div>
            <div class="footer-credits">
                Designed by <a href="https://shubhamtravels111.wordpress.com/" rel="nofollow" target="_blank">@111.HAKKER </a>
            </div>
        </div>
    </footer>
        
     
    </div>
  );
}

export default App;
