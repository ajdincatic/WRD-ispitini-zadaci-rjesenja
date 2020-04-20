
$(function () {
    document.querySelector('#email').onclick = function () {
        var ip = document.getElementById('username').value;
        var god = document.getElementById('godinaupisa').value;
        document.getElementById('email').value = ip.substring(0, 2) + '.' + ip.substring(ip.indexOf(' ') + 1, ip.indexOf(' ') + 5) + '-' + god + '@edu.fit.ba';
    }

    $.validator.addMethod(
        'regex',
        function (v, e, r) {
            return this.optional(e) || r.test(v);
        },
        'Ne radi'
    );

    $('#forma').validate({
        rules: {
            username: {
                minlength: 5,
                regex: /([A-Z]{1})([a-z]+)/
            },
            godinaupisa: {
                regex: /^\d{4}$/
            },
            brindeksa: {
                regex: /^([A-Z]{2})(\d{6})$/
            }
        },
        messages: {
            username: 'Unos nije validan !',
            godinaupisa: 'Unos nije validan !',
            brindeksa: 'Unos nije validan !'
        }
    });

    $('#snimi').on('click', function () {
        var valuta = $('#valuta').val();
        var indRazmjene = $('#indexrazmjene').val();
        localStorage.setItem('valuta', valuta);
        $('#accordion').append('<h3>' + localStorage.getItem('valuta') + '</h3><div>' + valuta + '-EUR ' + indRazmjene + '</div>');
        $('#accordion').accordion('refresh');
        $('#valuta').val('');
        $('#indexrazmjene').val('');
    })

})