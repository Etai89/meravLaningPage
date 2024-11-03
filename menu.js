$(document).ready(() => {
    const toggleOptions = () => {
        $('#option1').toggle()
        $('#option2').toggle()
    }

    $('#lakGel').toggle()
    $('#microBlading').toggle()
    $('#services').toggle()
    $('#aboutSection').toggle()

    toggleOptions()
    $('#showWork').on('click', () => {
        if ($('#services').is(':visible')) {
            $('#services').toggle()
        }
        if ($('#microBlading').is(':visible')) {
            $('#microBlading').toggle()
        }
        if ($('#lakGel').is(':visible')) {
            $('#lakGel').toggle()
        }
        if ($('#aboutSection').is(':visible')) {
            $('#aboutSection').toggle()
        }
        toggleOptions()
    })


    $('#option1').on('click', () => {
        $('#option2').toggle()
        $('#lakGel').toggle()
    })

    $('#option2').on('click', () => {
        $('#option1').toggle()
        $('#microBlading').toggle()
    })


    $('#showServices').on('click', () => {
        if ($('#option1').is(":visible")) {
            $('#option1').toggle()
        }
        if ($('#option2').is(":visible")) {
            $('#option2').toggle()
        }
        if ($('#microBlading').is(':visible')) {
            $('#microBlading').toggle()
        }
        if ($('#lakGel').is(':visible')) {
            $('#lakGel').toggle()
        }
        if ($('#aboutSection').is(':visible')) {
            $('#aboutSection').toggle()
        }
        $('#services').toggle()
    })

    $('#contactMe').on('click', () => {
        if ($('#option1').is(":visible")) {
            $('#option1').toggle()
        }
        if ($('#option2').is(":visible")) {
            $('#option2').toggle()
        }
        if ($('#microBlading').is(':visible')) {
            $('#microBlading').toggle()
        }
        if ($('#lakGel').is(':visible')) {
            $('#lakGel').toggle()
        }
        if ($('#services').is(':visible')) {
            $('#services').toggle()
        }
        if ($('#aboutSection').is(':visible')) {
            $('#aboutSection').toggle()
        }

        for(let i = 0; i<3; i++){
            $('#leaveDetails').fadeOut('800')
            $('#leaveDetails').fadeIn('1000')  
        }



    })

    $('#about').on('click', () => {
        if ($('#option1').is(":visible")) {
            $('#option1').toggle()
        }
        if ($('#option2').is(":visible")) {
            $('#option2').toggle()
        }
        if ($('#microBlading').is(':visible')) {
            $('#microBlading').toggle()
        }
        if ($('#lakGel').is(':visible')) {
            $('#lakGel').toggle()
        }
        if ($('#services').is(':visible')) {
            $('#services').toggle()
        }
        $('#aboutSection').toggle()

    })
})