const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function openTab(event, tabName) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove the active class from all buttons
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected tab content and add active class to the button
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

function toggleSection(element) {
    const content = element.nextElementSibling; // Get the next sibling element (the content div)
    content.style.display = content.style.display === "block" ? "none" : "block"; // Toggle display
}