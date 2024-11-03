$(document).ready(()=>{
    const etaiPhone = $('#etaiPhone')

    const whatsapp = $('#whatsapp')
    const callMe = $('#call')
    const facebook = $('#facebook')
    const instagram = $('#instagram')

    const faceB = 'https://www.facebook.com/meravsixso'
    const insta = 'https://www.instagram.com/merav__cosmetics'

    function callMerav() {
        // Replace with your phone number
        window.location.href = "tel:+972548188376";
    }
    function callEtai() {
        // Replace with your phone number
        window.location.href = "tel:+972549832002";
    }
    function whatsAppMe() {
        // Replace with your phone number in the WhatsApp link
        const phoneNumber = "972548188376";
        const message = encodeURIComponent("היי אני מעוניינת לשמוע פרטים,");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }

    whatsapp.on('click', () => {
        whatsAppMe()
    })

    facebook.on('click', () => {
        window.open(faceB, '_blank')
    })

    instagram.on('click', () => {
        window.open(insta, '_blank')
    })
    callMe.on('click', () => {
        callMerav()
    })

    etaiPhone.on('click', () => {
        callEtai()
    })


    $('.zoomable').on('click', (event) => {
        // Remove the zoomed class from any currently zoomed image
        $('.zoomable.zoomed').not(event.target).removeClass('zoomed');
    
        // Toggle the 'zoomed' class on the clicked image
        $(event.target).toggleClass('zoomed');
    });
    
    
    
    
})