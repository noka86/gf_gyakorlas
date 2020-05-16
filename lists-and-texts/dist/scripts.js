/*var names = ['Tomi', 'Marci', 'Dávid', 'Nóri'];
names.forEach(myFunction);

function myFunction(name) {
    $("ul").append("<li>name</li>");
} */

$("ul").append("<li>Hello World!</li>");

let names = ['Tomi', 'Marci', 'Dávid', 'Nóri'];
names.forEach((i) => {
    $("ul").append("<li>i</li>");
})

//('names[3]').css('weight', 'bold');