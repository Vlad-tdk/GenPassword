<script type="text/javascript">
(function() {
    var upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var low = 'abcdefghijklmnopqrstuvwxyz';
    var sym = '!@#№;%:&*()-_+=';
    var dig = '0123456789';

    function rnd(x, y) {
        var num;
        do {
            num = parseInt(Math.random() * 100);
            if (num >= x && num <= y) break;
        } while (true);
        return (num);
    }

    function gen_pass() {
        var znak = '';
        var pass = '';

        if (document.form_pass.upper.checked) znak = upp;
        if (document.form_pass.lower.checked) znak += low;
        if (document.form_pass.symbol.checked) znak += sym;
        if (document.form_pass.digit.checked) znak += dig;

        var n = parseInt(document.form_pass.numbers.value);
        for (var i = 0; i < n; i++) pass += znak[rnd(0, znak.length - 1)];

        document.form_pass.result.value = pass;
    }

    function gen() {
        if (document.form_pass.upper.checked || document.form_pass.lower.checked ||
            document.form_pass.symbol.checked || document.form_pass.digit.checked) {
            gen_pass();
        } else {
            alert('Выберите тип символов!');
            document.form_pass.upper.checked = true;
        }
    }

    with (document) {
        writeln('<form name="form_pass" style="width: 300px; padding: 3px; margin: 0 auto;' +
            'border: 2px solid #3366aa; text-align: center;">При генерации использовать:<br>' +
            '<input name="upper" type="checkbox">Заглавные буквы<br>' +
            '<input name="lower" type="checkbox">Маленькие буквы<br>' +
            '<input name="symbol" type="checkbox">Спецсимволы<br>' +
            '<input name="digit" type="checkbox">Цифры<br><br>Длина пароля: ' +
            '<select name="numbers"><option value="6" selected>6</option>');
        for (i = 7; i <= 20; i++) writeln('<option value=' + i + '>' + i + '</option>');
        writeln('</select><br><br>');
        writeln('<input type="button" value="Сгенерировать" onClick="gen()"><br><br>' +
            'Пароль: <input name="result" size="25" type="text" value=""></form>');
    }
})();
</script>
