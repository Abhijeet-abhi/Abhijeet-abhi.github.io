/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const aboutMeContent = `
            <h2 class="experience-title"></h2>
            <p class="experience-date"></p>
            <ul class="experience-list">
                <li>Hey there! 👋, Thanks for checking out my profile. I am a highly motivated Salesforce Developer who is dedicated to achieving exceptional results.</li>
                <li>With a strong background in transforming business processes, I have successfully implemented innovative solutions on the Salesforce platform.</li>
                <li>My expertise lies in developing and deploying robust Salesforce applications that enhance operational efficiency and drive organizational growth. I am passionate about creating user-friendly experiences that seamlessly integrate with existing systems.</li>
                <li>In my free time, I enjoy pursuing my hobbies, such as playing PC games, Traveling, and meeting new people. I also love spending time with my pup, who keeps me energized and happy.</li>
            </ul>
        `;

        const warpDriveContent = `
            <h2 class="experience-title">Salesforce Developer at WarpDrive</h2>
                        <div class = "experience-dateAndLocation">
            <p class="experience-date">August 2023 - Present</p>
            <p class="experience-location">Bengaluru, KA</p>
            </div>
            <ul class="experience-list">
                <li>Implemented Salesforce Service Cloud solutions for a leading appliance company, enhancing customer service and support for air conditioning and refrigerator products.</li>
                <li>Developed and managed solutions utilizing Lightning Web Components, Apex Classes, Apex Triggers, Code Bulkification, and Dynamic SOQL Queries.</li>
                <li>Handled Asynchronous classes and flows, including Record Triggered Flows, Scheduled Flow, Auto Launched Flow, and Screen Flow.</li>
                <li>Designed schema in Salesforce and its relationships, setting up application schema, security configurations, and user permissions through Profiles, Permission Sets, Roles, OWD, Validation rules, Formula fields, and Dynamic Page Layouts.</li>
                <li>Utilized Custom Metadata and Custom Setting features, and managed integrations by implementing and calling APIs for both inbound and outbound communications.</li>
            </ul>
        `;

        const masaiSchoolContent = `
            <h2 class="experience-title">Training at Masai School</h2>
            <div class = "experience-dateAndLocation">
            <p class="experience-date">April 2022 - August 2023</p>
            <p class="experience-location">Remote</p>
            </div>
            <ul class="experience-list">
                <li>Developed a strong understanding of Java programming, focusing on object-oriented principles and application development.</li>
                <li>Gained hands-on experience with Spring Boot for building and deploying web applications efficiently.</li>
                <li>Acquired skills in web design and development using HTML, CSS, and JavaScript, creating responsive and interactive user interfaces.</li>
                <li>Learned to manage and interact with databases using MySQL, including designing schemas, writing queries, and handling data.</li>
            </ul>
        `;

        function toggleContent(contentType) {
            const aboutData = document.getElementById('about__data');
            const aboutMeButton = document.getElementById('aboutMeButton');
            const warpDriveButton = document.getElementById('warpDriveButton');
            const masaiSchoolButton = document.getElementById('masaiSchoolButton');

            if (contentType === 'aboutMe') {
                aboutData.innerHTML = aboutMeContent;
                aboutMeButton.classList.add('active');
                warpDriveButton.classList.remove('active');
                masaiSchoolButton.classList.remove('active');
            } else if (contentType === 'warpDrive') {
                aboutData.innerHTML = warpDriveContent;
                warpDriveButton.classList.add('active');
                aboutMeButton.classList.remove('active');
                masaiSchoolButton.classList.remove('active');
            } else if (contentType === 'masaischool') {
                aboutData.innerHTML = masaiSchoolContent;
                masaiSchoolButton.classList.add('active');
                warpDriveButton.classList.remove('active');
                aboutMeButton.classList.remove('active');
            }
        }
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerview: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})