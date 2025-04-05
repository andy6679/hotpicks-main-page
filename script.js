// JavaScript to confirm navigation on link click
function confirmNavigation(event, link) {
    event.preventDefault();  // Prevent default link behavior
    const userConfirmed = confirm("Are you sure you want to go to this page?");
    if (userConfirmed) {
        window.location.href = link;  // Navigate to the link if confirmed
    }
}

// Adding event listeners to each link
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            const url = link.getAttribute("href");
            confirmNavigation(event, url);  // Trigger the confirmation function
        });
    });
});
