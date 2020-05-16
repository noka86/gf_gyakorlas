let color = 'purple';
let number = 10
let word = 'cool';

if (color === 'purple') {
    $(".first").css( "background" , "purple" );
}

if (number > 100) {
    $(".second").text("whoah, that's a big number")
}
else {
    $(".second").text("just a regular number, please")
}

if (word === "cool") {
    $(".third").text("power of DOM")
}
else {
    $(".fourth").text("power of DOM")
}