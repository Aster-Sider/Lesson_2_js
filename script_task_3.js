let number_months = prompt ('Напишіть число місяця яке відповідає даному сизону', "") 
if (number_months == '12' || number_months == '1' || number_months == '2') {
    alert ('Це зима')
}

else if(number_months == '3' || number_months == '4' || number_months == '5') {
    alert ('Це весна')
}

else if(number_months == '6' || number_months == '7' || number_months == '8') {
    alert ('Це літо')
}

else if(number_months == '9' || number_months == '10' || number_months == '11') {
    alert ('Це осінь')
}

else {
    alert ('Ви ввели дані, які не нележать сезонам')
}