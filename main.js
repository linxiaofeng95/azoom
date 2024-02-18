// ScrollReveal
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.return-process .box',{delay:600,origin:'top'})
sr.reveal('.services-container .box',{delay:600,origin:'top'})
sr.reveal('.about-container .box',{delay:600,origin:'top'})
sr.reveal('.reviews-container .box',{delay:600,origin:'top'})
sr.reveal('.newsletter-container .box',{delay:400,origin:'top'})
sr.reveal('.contact-container .box',{delay:400,origin:'top'})


// login
// Hardcoded user data
const users = [
    { username: "user123", password: "password123" }
];
// Hardcoded admin data
const admins = [
    { username: "admin123", password: "adminpassword123" }
];
// Function to simulate user login
function loginUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    return user ? "User login successful" : "Invalid username or password";
}
// Function to simulate admin login
function loginAdmin(username, password) {
    const admin = admins.find(a => a.username === username && a.password === password);
    return admin ? "Admin login successful" : "Invalid username or password";
}
// Add event listener to login button
document.getElementById("sign-in").addEventListener("click", function() {
    const userType = prompt("Login as user or admin? (Type 'user' or 'admin')").toLowerCase();
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    if (userType === "user") {
        const result = loginUser(username, password);
        alert(result);
    } else if (userType === "admin") {
        const result = loginAdmin(username, password);
        alert(result);
    } else {
        alert("Invalid user type");
    }
});

//Submit at Main.html
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const location = encodeURIComponent(document.getElementById('location').value);
        const pickupDate = document.getElementById('pickupDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const url = `SelectCar.html?location=${location}&pickupDate=${pickupDate}&returnDate=${returnDate}`;
        window.location.href = url; // Redirect to SelectCar.html with query parameters
    });
});


function toggleLoginIdInput() {
    const loginIdInputBox = document.getElementById('loginIdInputBox');
    const loginIdInput = document.getElementById('loginId');
    if (document.getElementById('isMemberYes').checked) {
        loginIdInputBox.style.display = 'block'; 
        loginIdInput.removeAttribute('disabled'); 
    }
    else {
        loginIdInputBox.style.display = 'none'; 
        loginIdInput.setAttribute('disabled', true); 
    }
}


