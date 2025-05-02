// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');
    });
});

// Modal logic
const modal = document.getElementById('modal');
const specialOfferBtn = document.getElementById('specialOfferBtn');
const closeModal = document.getElementById('closeModal');

specialOfferBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.add('hidden');
    }
});

specialOfferBtn.addEventListener('click', () => {
    specialOfferBtn.textContent = "Offer Activated!";
    specialOfferBtn.style.backgroundColor = "#4CAF50";
    document.getElementById('modal').classList.remove('hidden');
});


document.getElementById('hero').addEventListener('dblclick', () => {
    document.getElementById('gift').style.display = 'block';
});


document.getElementById('closeGift').addEventListener('click', () => {
    document.getElementById('gift').style.display = 'none';
});


// Image carousel
const images = ["images/pexels-leticia-alvares-1805702-30391094.jpg", "images/pexels-polina-tankilevitch-5419302.jpg", "images/pexels-rawan-ali-133113257-28122540.jpg"];
let currentIndex = 0;

const nextImageBtn = document.getElementById('nextImageBtn');
const galleryImage = document.getElementById('galleryImage');

nextImageBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert('You pressed the Enter key!');
    }
});




// Contact form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (!name) {
        alert("Name is required!");
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!email || !email.includes('@')) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        contactForm.reset();
    }
    formMessage.textContent = "Form submitted successfully!";
    formMessage.classList.remove('hidden');
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 3000);
});

// Accordion functionality
document.querySelectorAll('.accordion-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const open = answer.style.maxHeight;

        document.querySelectorAll('.accordion-answer').forEach(a => a.style.maxHeight = null);

        if (!open || open === "0px") {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
