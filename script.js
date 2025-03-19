function confirmNavigation(event, link) {
    event.preventDefault();  
    const userConfirmed = confirm("Are you sure you want to go to this page?");
    if (userConfirmed) {
        window.open(link, "_blank");  // Open in a new tab
    }
}
