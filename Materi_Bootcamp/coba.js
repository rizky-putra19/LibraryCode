const daftarHadir = [{
    nama: "Rizky",
    umur: 29
}, {
    nama: "Luny",
    umur: 28
}, {
    nama: "Alula",
    umur: 3
}, {
    nama: "Sakha",
    umur: 1
}];

function cetak(name, age) {
    return `Hadir dengan ${name}, dan usia ${age}, `
};

let kehadiran = []

daftarHadir.map((data) => {
    kehadiran += cetak(data.nama, data.umur)
});

console.log(kehadiran);

let urutanUsia = []

daftarHadir.map((data) => {
    urutanUsia.push(data.umur)
});

urutanUsia.sort((a, b) => {return a - b});

console.log(urutanUsia);