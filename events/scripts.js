$ ('button').click(() => {
    console.log('Yeah, you clicked me')
})

$ ('#secondButton').click(() => {
    $('#firstButton').text('You have changed me')
})

$ ('#thirdButton').click(() =>{
    $('button').css('background', 'black')
})

/*$('#lastButton').click(() => {
    $('#lastButton).css('background', 'value='#0000FF')

})*/