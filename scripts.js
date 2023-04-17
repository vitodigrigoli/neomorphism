const popup__form = document.getElementById("popup__form")
const loader = document.querySelector(".arc")
const text_popup = document.getElementById("rs_form")

const togglePopup = () => { popup__form.classList.toggle("popup--active")}
/*
(function() {
                emailjs.init('ddVupeAA7v4I3fL4a');
            })();
*/

document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    text_popup.innerHTML = "Stiamo inviando il tuo messaggio. Attendi";
    togglePopup()
    loader.classList.remove('d-none')

    const val = document.getElementById('hp').value;

    if(val == '') {
        emailjs.sendForm('service_yj1hoag', 'template_vq4tbhk', event.target)
        .then(function() {
            loader.classList.add('d-none')
            text_popup.innerHTML = "Il tuo messaggio è stato inviato correttamente";
            event.target.reset()
        
        }, function(error) {
            text_popup.innerHTML = "Invio non riuscito! Riprova di nuovo";					
        });
    }
    
});