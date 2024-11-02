// Back to Top button functionality
window.onscroll = function() {
    const backToTopBtn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Search functionality
function searchNGO() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const ngos = document.querySelectorAll(".ngo-item");
    
    ngos.forEach(ngo => {
        const name = ngo.querySelector('h3').textContent.toLowerCase();
        if (name.includes(input)) {
            ngo.style.display = "";
        } else {
            ngo.style.display = "none";
        }
    });
}

// Filter NGOs by category
function filterCategory(category) {
    const ngos = document.querySelectorAll(".ngo-item");

    ngos.forEach(ngo => {
        if (category === 'all' || ngo.classList.contains(category)) {
            ngo.style.display = "";
        } else {
            ngo.style.display = "none";
        }
    });
}
