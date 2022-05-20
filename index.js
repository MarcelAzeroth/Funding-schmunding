//Variables

//Nav
const hamburger = document.querySelector(".hamburger")
const navItems = document.querySelector(".nav-items")
const navShadow = document.querySelector(".nav-shadow")

//CTA Section
const bookmarkIcon = document.querySelector(".bookmark-desktop");
const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmarkImg = document.querySelector(".bookmark-desktop");
const bookmarkBtnDiv = document.querySelector(".bookmark-btn-div");

//Modal
const modal = document.querySelector(".backing-modal")
const closeModal = document.querySelector(".close-modal")
const cyanBtns = document.querySelectorAll(".cyan-btn")
const shadowRealm = document.querySelector(".shadow-realm")
const cardHeadlines = document.querySelectorAll(".card-headline")
const radioBtns = document.querySelectorAll('[name="radio"]')
const modalCards = document.querySelectorAll(".modal-card")

const successModal = document.querySelector(".success-modal")
const continueBtns = document.querySelectorAll(".continue-btn");
const gotItBtn = document.querySelector(".got-it")

//EventListeners

//Nav
hamburger.addEventListener("click", event => {
    navItems.classList.remove("hide-mobile")
    navShadow.classList.remove("hide");
})

navShadow.addEventListener("click", event => {
    navItems.classList.add("hide-mobile")
    navShadow.classList.add("hide");
})

//CTA Section
bookmarkBtn.addEventListener("click", event => {
    bookmarkBtn.classList.toggle("bookmark-btn-active")
    bookmarkBtnDiv.classList.toggle("bookmark-btn-div-active");
    if(bookmarkBtn.innerHTML === "Bookmark"){
        bookmarkBtn.innerHTML = "Bookmarked"
    } else {
        bookmarkBtn.innerHTML = "Bookmark"
    }
})

bookmarkIcon.addEventListener("click", event => {
    console.log("clicked")
    bookmarkBtn.classList.toggle("bookmark-btn-active")
    bookmarkBtnDiv.classList.toggle("bookmark-btn-div-active");
    if(bookmarkBtn.innerHTML === "Bookmark"){
        bookmarkBtn.innerHTML = "Bookmarked"
    } else {
        bookmarkBtn.innerHTML = "Bookmark"
    }
})

//Detail Section
cyanBtns.forEach(btn => {
    btn.addEventListener("click", event => {
    modal.classList.remove("hide")
    shadowRealm.classList.remove("hide")
    })
})

//Modal
closeModal.addEventListener("click", event => {
    modal.classList.add("hide")
    shadowRealm.classList.add("hide")
})

shadowRealm.addEventListener("click", event =>{
    modal.classList.add("hide")
    shadowRealm.classList.add("hide")
    successModal.classList.add("hide")
})

//Please refactor me

const pledgeActive = (element) => {
    modalCards.forEach(card => {
        card.classList.remove("modal-card-active")
        card.querySelector(".card-bottom").classList.add("hide")
    })
    element.parentNode.parentNode.parentNode.classList.add("modal-card-active")
    element.parentNode.parentNode.parentNode.querySelector(".card-bottom").classList.remove("hide");
}   

cardHeadlines.forEach(headline => {
    headline.addEventListener("click", event => {
        event.target.parentNode.parentNode.querySelector('[name="radio"]').checked = true;
        pledgeActive(event.target)
    })
})

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click", event => {
        modalCards.forEach(card => {
            card.classList.remove("modal-card-active")
            card.querySelector(".card-bottom").classList.add("hide")
            if(card.querySelector(".card-header .card-headline .pledge-amount")) {
                card.querySelector(".card-header .card-headline .pledge-amount").classList.remove("bold")
            }
        })
        event.target.parentNode.parentNode.classList.add("modal-card-active");
        event.target.parentNode.parentNode.querySelector(".card-bottom").classList.remove("hide")
        if(event.target.parentNode.querySelector(".card-header .card-headline .pledge-amount")){        
            event.target.parentNode.querySelector(".card-headline .pledge-amount").classList.add("bold")
            }   
    })
})

//Success Modal

continueBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        successModal.classList.remove("hide")
        modal.classList.add("hide")
    })
})

gotItBtn.addEventListener("click", event => {
    successModal.classList.add("hide")
    shadowRealm.classList.add("hide")
})

