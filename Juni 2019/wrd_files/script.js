//zuti okvir

var x = document.querySelectorAll(".VilaKolonaOkvir");

x.forEach(function(element) {
    element.addEventListener('click', function() {
        this.style.borderColor = 'yellow';
        for (var j = 0; j < x.length; j++) {
            if (this != x[j]) {
                x[j].style.borderColor = 'white';
            }
        }
    })
})

//responsive

var dugme = document.querySelector("#IzbornikDugme");
var menu = document.querySelector("#Izbornik");
menu.style.height = "0px";

dugme.addEventListener("click", function() {
    if (menu.style.height == "0px") {
        menu.style.height = menu.scrollHeight + "px";
    } else {
        menu.style.height = "0px";
    }
})

//validacija

$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
);

$("#forma").validate({
    rules: {
        dostavaIme: {
            regex: /[A-Za-z]{1,}/
        },
        dostavaAdresa: {
            regex: /[A-Za-z]{1,}/
        },
        dostavaPostanskiBroj: {
            regex: /^[0-9]{5}$/
        },
        dostavaTelefon: {
            regex: /^\+[0-9]{3}\-[0-9]{2}\-[0-9]{3}\-[0-9]{4}$/
        }
    }


})


//HTTTPS

function dohvati(url, fun) {
    var zahtjev = new XMLHttpRequest();

    zahtjev.onload = function() {
        if (zahtjev.status === 200) {
            fun(JSON.parse(zahtjev.responseText));
        } else {
            alert("Server javlja grešku: " + zahtjev.statusText);
        }
    }

    zahtjev.onerror = function() {
        alert("Greška u komunikaciji sa serverom.");
    };

    zahtjev.open("GET", url, true);
    zahtjev.send(null);
}

dohvati('http://onlineshop.wrd.app.fit.ba/api/ispit20190622/Narudzba/GetAll', function(x) {
    x.forEach(function(el) {

        // var noviRed = document.createElement('tr');
        // document.querySelector('tbody').appendChild(noviRed);

        // var noviEl = document.createElement('td');
        // noviEl.innerHTML = el.narudzbaId;
        // noviRed.appendChild(noviEl);

        // var noviEl = document.createElement('td');  // copy and paste, mijenja se samo vrijednost koju dodjeljujemu u innerHTML
        // noviEl.innerHTML = el.datumNarudzbe;
        // noviRed.appendChild(noviEl);

        // var noviEl = document.createElement('td');
        // noviEl.innerHTML = el.dostavaIme;
        // noviRed.appendChild(noviEl);

        // var noviEl = document.createElement('td');
        // noviEl.innerHTML = el.dostavaAdresa;
        // noviRed.appendChild(noviEl);

        // var noviEl = document.createElement('td');
        // noviEl.innerHTML = el.dostavaPostanskiBroj;
        // noviRed.appendChild(noviEl);

        // var noviEl = document.createElement('td');
        // noviEl.innerHTML = el.dostavaTelefon;
        // noviRed.appendChild(noviEl);

        // var noviEl = document.createElement('td');
        // noviEl.innerHTML = el.napomena;
        // noviRed.appendChild(noviEl);

        // isto kao i ovo gore samo koristeci Jquery

        var body = $('tbody');
        var red = $('<tr></tr>').appendTo(body);        // u tabelu dodajemo novi red
        $('<td>' + el.narudzbaId + '</td>').appendTo(red);      // za svaki red u kolonu ubacujemo vrijednosti
        $('<td>' + el.datumNarudzbe + '</td>').appendTo(red);
        $('<td>' + el.dostavaIme + '</td>').appendTo(red);
        $('<td>' + el.dostavaAdresa + '</td>').appendTo(red);
        $('<td>' + el.dostavaPostanskiBroj + '</td>').appendTo(red);
        $('<td>' + el.dostavaTelefon + '</td>').appendTo(red);
        $('<td>' + el.napomena + '</td>').appendTo(red);

    })
})


document.querySelector('#btn').addEventListener('click', function() {

    if (!$("#forma").valid()) {  // UNOS U INPUTIMA MORA BITI VALIDAN DA BI SE POSLAO
        alert('Ne moze');
        return;
    }

    var obj = {
        dostavaAdresa: document.querySelector('#dostavaAdresa').value,
        dostavaIme: document.querySelector('#dostavaIme').value,
        dostavaPostanskiBroj: document.querySelector('#dostavaPostanskiBroj').value,
        dostavaTelefon: document.querySelector('#dostavaTelefon').value,
        napomena: document.querySelector('#napomena').value
    };

    var strJson = JSON.stringify(obj); // PRETVARAMO U JSON

    var zahtjev = new XMLHttpRequest();

    var mojUrl = 'http://onlineshop.wrd.app.fit.ba/api/ispit20190622/Narudzba/Dodaj';

    var zahtjev = new XMLHttpRequest();

    zahtjev.onload = function() {
        if (zahtjev.status === 200) {
            alert('Podaci poslani');
        } else {
            alert("Server javlja grešku: " + zahtjev.statusText);
        }
    }

    zahtjev.onerror = function() {
        alert("Greška u komunikaciji sa serverom.");
    };

    zahtjev.open("POST", mojUrl, true);
    zahtjev.setRequestHeader('Content-type', 'application/json');
    zahtjev.send(strJson);

    document.querySelector('#dostavaAdresa').value = '';
    document.querySelector('#dostavaIme').value = '';
    document.querySelector('#dostavaPostanskiBroj').value = '';
    document.querySelector('#dostavaTelefon').value = '';
    document.querySelector('#napomena').value = '';

})