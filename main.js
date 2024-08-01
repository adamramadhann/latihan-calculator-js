//  menangkap id yang mentipan angka 
const display = document.getElementById('display');

// membuat variabel untuk menangkap angka 
let angkaSaatIni = '';
let angkaSetelahnya  = '';
let operation = '';


// fungsi untuk menambahkan angka kedisplay 
function iniAngka(number) {

    // membuat condisional rendering menggunakan if yang membuat angka tidakboleh memiliki  titik dua contoh 2.2. dan nilai . kedua akan dikembalikan jadi nya 2.2
    if ( number === '.' && angkaSaatIni.includes('.')) return;

    if ( operation === '' ) {
        angkaSaatIni += number;
        display.textContent = angkaSaatIni;
    } else {
        // jika operator sudah memiliki angka masukan angka ke angka sebelumnya
        angkaSetelahnya += number;
        display.textContent = angkaSetelahnya;
    }
}



function pilihOperation(atm) {
    if (angkaSaatIni === '') return;
    operation = atm;
    display.textContent = '';
}




function aritmatika() {
    let hasil;
    const pertama = parseFloat(angkaSaatIni);
    const keDua = parseFloat(angkaSetelahnya);

    switch(operation) {
        case '+' :
            hasil = pertama + keDua;
            break;
        case '-' :
            hasil = pertama - keDua;
            break;
        case '*' : ``
            hasil = pertama * keDua;
            break;
        case '/' :
            hasil = pertama / keDua;
            break;
        default :
            return;
    }



    // tampilkan hasil perhitungan dan riset variabel
    display.textContent = hasil;
    angkaSaatIni = hasil.toString();
    angkaSetelahnya = '';
    operation = '';
}




function bersihkan() {
    angkaSaatIni = '';
    angkaSetelahnya = '';
    operation = '';
    display.textContent = 0;
}