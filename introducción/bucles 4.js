let a = 5

if (0 === a) {
    console.log('Is zero');
} else if (a > 0) {
    console.log('Is positive');
} else {
    console.log('Is negative');
}

while (3 < a) {
    a--
    console.log('While process');
}
do {
    a--
    console.log('Do while process');
} while (3 < a);

for (let index = 0; index <= 3; index++) {
    console.log('i am for');

}
const key = 'otoño'
switch (key) {
    case 'verano':
        console.log('es verano');
        break;
    case 'primavera':
        console.log('es primavera');

        break;
    case 'otoño':
        console.log('es otoño');

        break;
    case 'invierno':
        console.log('es invierno');

        break;

    default:
        break;
}