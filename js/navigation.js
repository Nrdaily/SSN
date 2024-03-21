const header = document.querySelector('.header');
const footer = document.querySelector('footer');
const navBar = document.querySelector(".navbar");
const nav = document.querySelector('.nav-link');
const navClose = document.querySelector('#nav-toggle-close');
const navOpen = document.querySelector('#nav-toggle-open');


window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navBar.offsetHeight - 50
  ) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});

//  functio to open nav bar
const openNav = () => {
    nav.classList.add('active');
    nav.style.display = 'flex';
    navClose.style.display = 'inline-block';
    navOpen.style.display = 'none';
}
navOpen.addEventListener('click', openNav)


//  functio to close nav bar
const closeNav = () => {
    nav.style.display = 'none';
    navOpen.style.display = 'inline-block';
    navClose.style.display = 'none';
}
navClose.addEventListener('click', closeNav)

footer.innerHTML =`
<div class="footer-line"></div>
<div class="footer-wrapper">
    <div class="footer-top">
        <div class="footer-headline">
            <h2>Subscribe to our newsletter</h2>
            <p>
                Stay up to date with our news and articles
            </p>
        </div>
        <div class="footer-subscribe">
            <input type="email" spellcheck="false" placeholder="Your Email">
            <button>
                Sign Up
            </button>
        </div>
    </div>
    <div class="footer-columns">
        <div class="footer-logo">
            <h2>
                <svg width="1103" height="996" viewBox="0 0 1103 996" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
                </svg>
            </h2>
        </div>
        <div>
            <ul class="flex">
                <li><a  href="/index.html" title="home">Home</a></li>
                <li><a href="/products.html" title="Products">products</a></li>
                <li><a href="/blog.html" title="blog">Blog</a></li>
                <li><a href="/order.html" title="order">order</a></li>
                <li><a href="/contact.html" title="contact">Contact us</a></li>
                <li><a href="/about.html" title="About us">About us</a></li>
                <li><a href="cart.html" class="cart-btn" title="cart button">
                  <i class="fas fa-shopping-cart"></i> Cart
                </a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <div class='social-links'>
          <img src="img/payment.png">
        </div>
        <small>SSN-DL SHOP. <span id="year"></span>, All rights reserved</small>
    </div>
</div>
`;



document.getElementById("year").innerHTML = new Date().getFullYear();