//dark mode
const toggleButton = document.getElementById('dark-mode-toggle');
const lightImage = document.getElementById('dark-mode-toggle-light');
const darkImage = document.getElementById('dark-mode-toggle-dark');            

// Function to apply the theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      lightImage.classList.remove('hidden');
      darkImage.classList.add('hidden');
      
   } else {
      document.documentElement.removeAttribute('data-theme');   
      lightImage.classList.add('hidden');
      darkImage.classList.remove('hidden');
   }
   localStorage.setItem('theme', theme); // Save the theme preference
};

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (savedTheme) {
   applyTheme(savedTheme);
} else {
   applyTheme(mediaQuery.matches ? 'dark' : 'light');
}

// Listener for changes in system preference
mediaQuery.addEventListener('change', (e) => {
   if (!localStorage.getItem('theme')) { // Only change if no saved preference
       applyTheme(e.matches ? 'dark' : 'light');
   }
});

// Toggle button functionality
toggleButton.addEventListener('click', () => {
   const currentTheme = document.documentElement.getAttribute('data-theme');
   applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});