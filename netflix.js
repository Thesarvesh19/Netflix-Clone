function filterShows(category) {
    const allShows = document.getElementsByClassName('show-card'); // Get all series cards

    for (let i = 0; i < allShows.length; i++) {
        const show = allShows[i];

        // Show the series if it matches the category, hide it otherwise
        if (category === 'all') {
            show.style.display = 'block'; // Show all cards for "Home"
        } else if (show.classList.contains(category)) {
            show.style.display = 'block'; // Show only the selected category
        } else {
            show.style.display = 'none'; // Hide all other cards
        }
    }
}

function showLanguages(){
    if(document.getElementById('language-dropdown').style.display =='block'){
        document.getElementById('language-dropdown').style.display ='none';
    }
    else{
        document.getElementById('language-dropdown').style.display ='block'
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('language-button');
    const dropdown = document.getElementById('language-dropdown');

    // Toggle dropdown visibility on click
    button.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

