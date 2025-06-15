// === Animation au Scroll ===
const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
window.addEventListener('load', () => {
    handleScrollAnimation();
});

// === Envoi du Formulaire via EmailJS ===
document.getElementById("rdv-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Envoi via EmailJS
    emailjs.send("service_i4vhv7n", "template_z8nj39r", {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value,
        jour: document.getElementById("jour").value,
        heure: document.getElementById("heure").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        console.log("Message envoyé avec succès !", response);
        const confirmation = document.getElementById('confirmation');
        confirmation.style.display = 'block';
        confirmation.classList.add('visible');
        setTimeout(() => {
            confirmation.classList.remove('visible');
            confirmation.style.display = 'none';
        }, 5000);

        // Réinitialisation du formulaire
        document.getElementById("rdv-form").reset();

    }, function(error) {
        alert("❌ Une erreur s'est produite : " + error.text);
        console.error("Erreur EmailJS:", error);
    });
});
