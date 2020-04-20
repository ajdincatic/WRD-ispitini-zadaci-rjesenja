
var x = document.querySelectorAll('.VilaKolonaWrapper img');

x.forEach(function(element){
    element.addEventListener('click', function () {
        this.style.borderColor = 'yellow';
        for (var j = 0; j < x.length; j++) {
            if (this != x[j]) {
                x[j].style.borderColor = 'white';
            }
        }
        var roditelj = this.parentNode;
        //console.log(roditelj.children);
        document.querySelector('#Slika').value = roditelj.children[1].innerText;
        document.querySelector('input[name="CijenaPoDanu"]').value = roditelj.children[2].querySelector('span').innerText;
    })
})

// racunanje ukupne cijene

document.querySelector('input[name="BrojDana"]').addEventListener('change', function () {
    var CijenaPoDanu = parseInt(document.querySelector('input[name="CijenaPoDanu"]').value);
    var BrojDana = parseInt(document.querySelector('input[name="BrojDana"]').value);
    document.querySelector('input[name="IznosUkupno"]').value = CijenaPoDanu * BrojDana;
})

for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function () {
        if (document.querySelector('input[name="IznosUkupno"]').value == '')
            document.querySelector('input[name="IznosUkupno"]').value = '';
        else
            document.querySelector('input[name="IznosUkupno"]').value = parseInt(document.querySelector('input[name="CijenaPoDanu"]').value) * parseInt(document.querySelector('input[name="BrojDana"]').value);
    })
}


// dropdown menu

var el = document.querySelector('#Izbornik');
el.style.height = '0px';

document.querySelector('#IzbornikDugme').addEventListener('click', function () {
    if (el.style.height == '0px')
        el.style.height = el.scrollHeight + 'px';
    else
        el.style.height = '0px';
})

// $('#Izbornik').hide();

// $('#IzbornikDugme').on('click', function () {
//     $('#Izbornik').slideToggle('slow');
// })

