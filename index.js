const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-btn');
const toggleBar = document.querySelector('.menu-btn i')
const sidebarAll = document.querySelectorAll('.sidebar li')
const servicesBtn = document.querySelector('.services')
const slideContainer = document.querySelector('.slider-container')
const reserveBtn = document.querySelector('.booking-btn')
const openbookingBtn = document.querySelector('.booking')
const closeBookingBtn = document.querySelector('.close-form')
const homePage = document.querySelector('.home-page')


menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('open')
    
    toggleBar.classList.toggle(`fa-xmark`)
    toggleBar.classList.toggle(`fa-bars`)    
});

sidebar.addEventListener('click',(event)=>{
    if (event.target.tagName === 'A' || event.target.tagName === 'LI'){
        sidebar.classList.remove('open')
        toggleBar.classList.remove('fa-xmark')
        toggleBar.classList.add('fa-bars')
    }    
})

// Image slider

const slider = document.querySelectorAll('.slider .slides')

let slideIndex = 0 //current slide 
let intervalId = null

//initialize the slide

document.addEventListener('DOMContentLoaded',slideInitializer)      //Dom content to load first

function slideInitializer (){

    if(slider.length > 0){
        slider[slideIndex].classList.add('show')
        intervalId = setInterval(nextSlide,5000)
    }   
}

function showSlide(index){

    if(index >= slider.length){
        slideIndex = 0
    }
    else if(index < 0){
        slideIndex = slider.length-1
    }

    slider.forEach(slide => {
        slide.classList.remove('show')
    })
    slider[slideIndex].classList.add('show')
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

document.querySelector('.close-slider').addEventListener('click', ()=>{
    // slideContainer.style.display = 'none'
    homePage.style.opacity = 1;
})

//>>>>>>>>>>>>>>>>>>> Booking Section <<<<<<<<<<<<<<<<<






// >>>>>>>>>>>>>>>>>>>>>>>>> Services Button <<<<<<<<<<<<<<<<<

// const servicesBtn = document.querySelector('.services')
// const dropList = document.querySelector('.services-link')

// servicesBtn.addEventListener('mouseover', ()=>{
//     dropList.style.opacity = 1;    
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SERVICES BUTTON <<<<<<<<<<<<<<<<<<<<<<<


servicesBtn.addEventListener('click', ()=> {
    slideContainer.style.display = 'block'
    homePage.style.opacity = 0;
})


// Selecting Payment Options

const paymentBtn = document.querySelector('#payment-options')
const mobilePay = document.querySelector('.mobile-pay')
const submitFormBtn = document.querySelector('.submitForm')
const bookingBtn = document.querySelector('.booking-modal')
const selectedVal = 'Mpesa'

paymentBtn.addEventListener('change',() => {
    if(paymentBtn.value === 'mpesa'){
        mobilePay.style.display = 'flex'
        mobilePay.style.transition = '0.5s ease'
    }
    else{
        mobilePay.style.display = 'none'
    }
    submitFormBtn.addEventListener('click', () => {
        mobilePay.style.display = 'none';
    })
})

console.log(paymentBtn[1].value)


//Modal for the reserve button 


// submitFormBtn.addEventListener('click', () => {
//     bookingBtn.style.display = 'flex';
//     // openbookingBtn.style.display = 'none'
// })

window.addEventListener('click', (e) => {

    if(e.target === bookingBtn){
        bookingBtn.style.display = 'none';
    }
    homePage.style.display = 'block'; 
})


// >>>>>>>>>>>>>>>>>>>>Opening Contact Us form

document.querySelector('.formInquiry').addEventListener('click', ()=>{
    document.querySelector('.booking-form').style.display = 'none';
    document.querySelector('.inquiry-container').style.display ='block'
})


// >>>>>>>>>>>>>>>>>>>>>>> Target Contact Icon

document.addEventListener('DOMContentLoaded', () =>{

    const contactMenu = document.querySelector('#contact-btn')

    contactMenu.addEventListener('click', (e) =>{
        e.preventDefault();

        const footerSection = document.querySelector('.footer-section')

        footerSection.scrollIntoView({behavior: "smooth"})
    });
});