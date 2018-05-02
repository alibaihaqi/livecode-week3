// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/

function drawLadder(row) {
    var awal = '';
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j <= i; j++) {
        if (j % 2 !== 0) {
            awal = awal + 'x';
            }
        else {
            awal = awal + 'o';
            }
        }
        awal = awal + '\n';
    // hanya code disini
    }
    return awal;
}
var tes =  drawLadder(6);
console.log(tes);
