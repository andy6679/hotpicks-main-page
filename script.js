document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(function (link) {
        const url = link.getAttribute("href");

        // Check if the link is an external URL (contains 'http')
        if (url.startsWith("http")) {
            return; // Skip adding confirmation for external links
        }

        link.addEventListener("click", function (event) {
            confirmNavigation(event, url);
        });
    });
});
