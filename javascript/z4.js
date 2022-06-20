let petro = `Петро`;
let tovar = `Airpods 2`;
let cena = 4000;
let garantia = 1;
let garantia_vartist = 350;
let dostavka = 60;
let suma = cena+garantia_vartist+dostavka;
console.log(`Вітаю,${petro}!Ваше замовлення:

${tovar} за ціною-${cena}грн
Гарантія на ${garantia}за вартістю-${garantia_vartist}грн
вартість доставки-${dostavka}грн

прийнято та буде оброблено протягом 24 години.

Загальна вартість замовлення-${suma}грн`);