let ask = prompt ('Ім’я', "")
if (ask == 'Катя'||'Юра') {
    password = prompt ('Пароль', ''); {
        if (password == 'ЛОГОС') {
            alert ('Ласкаво просимо!')
        }
        else {alert('Пароль невірний')}
    }
}
else if (ask == null) {
    alert ('Вхід скасовано')
}
else {
    alert ('Я вас незнаю!')
}