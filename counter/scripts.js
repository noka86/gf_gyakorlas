let counter = 0

$("#increase").click(() => {
    $('h3').text(counter +=1);
});

$('#decrease').click(()=> {
    $('h3').text(counter -=1);
})