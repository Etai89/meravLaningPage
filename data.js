$(document).ready(() => {
    $('#send').on('click', (event) => {
        event.preventDefault()
        
        const fullName = $("#fullName").val()
        const email = $("#email").val()
        const phone = $('#phone').val()
        
        const userData = JSON.parse(localStorage.getItem('userData')) || []
        
        const isExistingUser = userData.some(user => 
            user.fullName === fullName && user.email === email && user.phone === phone
        )

        if (isExistingUser) {
            alert("הפרטים שלך כבר נשלחו!")
            return
        }

        const newInfo = { fullName, email, phone }
        userData.push(newInfo)
        localStorage.setItem('userData', JSON.stringify(userData))

        const webHookUrl = 'https://hook.eu2.make.com/18qsiiaugonp4ocrl35wxvaa5qosilbi'

        if (fullName === '') {
            alert("נא למלא שם מלא בבקשה")
            return
        }
        if (!email.includes('@')) {
            alert('נא למלא דואר אלקטרוני תקין')
            return
        }
        if (phone.length < 10) {
            alert('בבקשה למלא מספר טלפון תקין')
            return
        }


        $.ajax({
            url: webHookUrl,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(newInfo),
            success: function () {
                $("#fullName").val('')
                $("#email").val('')
                $("#phone").val('')
                console.log('Data sent successfully')
            },
            error: function (xhr, status, error) {
                console.error("Error submitting lead:", error)
            }
        })
    })

})
