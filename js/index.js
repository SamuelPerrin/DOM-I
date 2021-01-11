const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav
let nav = document.querySelector('nav');
let links = Array.from(document.querySelectorAll('nav a'));
for (i=1;i<7;i++) {
  links[i-1].textContent = siteContent.nav["nav-item-"+i]
  links[i-1].style.color = 'green'
}
let home = document.createElement('a')
home.textContent = "Home"
home.href = "#"
home.style.color = 'green'
let darkMode = document.createElement('a')
let darkBool = false;
if (darkBool) {
  darkMode.textContent = "Light Mode";
} else {
  darkMode.textContent = "Dark Mode";
}
darkMode.href = "#"
darkMode.style.color = 'green'
darkMode.addEventListener("click",handleClick)

nav.prepend(home)
nav.appendChild(darkMode)



// cta
let h1 = document.querySelector('h1');
// h1.textContent = siteContent.cta.h1;
h1.innerHTML = siteContent.cta.h1.replace(/\s/g, '<br>')


let button = document.querySelector('.cta button');
button.textContent = siteContent.cta.button;

let ctaIMG = document.querySelector('#cta-img');
ctaIMG.src = siteContent.cta['img-src'];

// main-content
let topContent = document.querySelector('.top-content');
let features = topContent.firstElementChild;
features.firstElementChild.textContent = siteContent['main-content']['features-h4'];
features.querySelector('p').textContent = siteContent['main-content']['features-content'];
let about = features.nextElementSibling;
about.firstElementChild.textContent = siteContent['main-content']['about-h4'];
about.querySelector('p').textContent = siteContent['main-content']['about-content'];
let middleIMG = document.querySelector('#middle-img');
middleIMG.src = siteContent['main-content']['middle-img-src'];
let services = document.querySelector('.bottom-content').firstElementChild;
services.firstElementChild.textContent = siteContent['main-content']['services-h4'];
services.querySelector('p').textContent = siteContent['main-content']['services-content'];
let product = services.nextElementSibling;
product.firstElementChild.textContent = siteContent['main-content']['product-h4']
product.querySelector('p').textContent = siteContent['main-content']['product-content']
let vision = product.nextElementSibling
vision.firstElementChild.textContent = siteContent['main-content']['vision-h4']
vision.querySelector('p').textContent = siteContent['main-content']['vision-content']

// contact
let contact = document.querySelector('.contact');
contact.firstElementChild.textContent = siteContent.contact['contact-h4']
contact.querySelectorAll('p')[0].innerHTML = siteContent.contact.address.replace('Street ','Street <br>')
contact.querySelectorAll('p')[1].textContent = siteContent.contact.phone
contact.querySelectorAll('p')[2].textContent = siteContent.contact.email

// footer
let footer = document.querySelector('footer')
footer.firstElementChild.textContent = siteContent.footer.copyright

// head
let title = document.querySelector('head title')
title.textContent = 'Great Idea!'

// Event Handlers
function handleClick() {
  let body = document.querySelector('body')
  if (!darkBool) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    darkBool = true;
    logo.src =  './img/logo-inverted.png';
    let mainContent = document.querySelector('.main-content');
    mainContent.style.borderTop = "2px solid white";
    mainContent.style.borderBottom = "2px solid white";
    h1.innerHTML = `DARK MODE<br>IS<br>AWESOME`;
    darkMode.textContent = 'Light Mode'
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    darkBool = false;
    logo.src = './img/logo.png';
    let mainContent = document.querySelector('.main-content');
    mainContent.style.borderTop = "2px solid black";
    mainContent.style.borderBottom = "2px solid black";
    h1.innerHTML = siteContent.cta.h1.replace(/\s/g, '<br>');
    darkMode.textContent = 'Dark Mode';
  }

}