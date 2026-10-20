
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");
const resetButton = document.getElementById("resetButton");
const darkMode = document.getElementById("darkMode");
const message = document.getElementById("message");
const navLinks = document.querySelectorAll(".nav-link");

const initialLikes = 24;
let likes = initialLikes;

// Add one like
likeButton.addEventListener("click", function () {
    likes++;
    likeCount.textContent = likes;
    message.textContent = "Thanks for your like!";
});

// Reset likes to the original count
resetButton.addEventListener("click", function () {
    likes = initialLikes;
    likeCount.textContent = likes;
    message.textContent = "Likes have been reset.";
});

// Toggle dark mode
darkMode.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");

    darkMode.setAttribute("aria-checked", String(isDark));
    message.textContent = isDark
        ? "Dark mode enabled."
        : "Light mode enabled.";
});

// Highlight the selected navigation link
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});
