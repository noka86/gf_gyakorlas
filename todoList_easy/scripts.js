$('button').click (()=>{
    var add = $('#todo').val();
    $('ul').append('<li>' + add + '</li>');
})