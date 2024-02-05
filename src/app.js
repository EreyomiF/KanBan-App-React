var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.add('hidden'); // Add 'hidden' class for the dark theme
} else {
    themeToggleDarkIcon.classList.add('hidden'); // Add 'hidden' class for the light theme
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // toggle dark mode class on the document element
    document.documentElement.classList.toggle('dark');

    // save theme preference in localStorage
    const isDarkMode = document.documentElement.classList.contains('dark');
    localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
});
