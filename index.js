function angkaAcak() {
  return Math.floor(Math.random() * 50) + 1;
}

var arrayAcak = [];
for (var i = 0; i < 100; i++) {
  arrayAcak.push(angkaAcak());
}

console.info(arrayAcak);

var arrayAcak = [];

var arrGenap = [];
var arrGanjil = [];

for (var i = 0; i < arrayAcak.length; i++) {
  if (i % 2 === 0) {
    arrGenap.push(arrayAcak[i]);
  } else {
    arrGanjil.push(arrayAcak[i]);
  }
}

console.info("Array Ganjil:", arrGanjil);
console.info("Array Genap:", arrGenap);

var arrGenap = [];
var arrGanjil = [];

var minGenap = Math.min(...arrGenap);
var maxGenap = Math.max(...arrGenap);

var minGanjil = Math.min(...arrGanjil);
var maxGanjil = Math.max(...arrGanjil);

var sumGenap = arrGenap.reduce(function (acc, val) {
  return acc + val;
}, 0);

var sumGanjil = arrGanjil.reduce(function (acc, val) {
  return acc + val;
}, 0);

var medianGenap = sumGenap / arrGenap.length;
var medianGanjil = sumGanjil / arrGanjil.length;

console.info("Array Genap:");
console.info("Nilai Min:", minGenap);
console.info("Nilai Max:", maxGenap);
console.info("Total:", sumGenap);
console.info("Rata-rata:", medianGenap);

console.info("\nArray Ganjil:");
console.info("Nilai Min:", minGanjil);
console.info("Nilai Max:", maxGanjil);
console.info("Total:", sumGanjil);
console.info("Rata-rata:", medianGanjil);

var arrGenap = [];
var arrGanjil = [];

var minGenap = Math.min(...arrGenap);
var maxGenap = Math.max(...arrGenap);

var minGanjil = Math.min(...arrGanjil);
var maxGanjil = Math.max(...arrGanjil);

var sumGenap = arrGenap.reduce(function (acc, val) {
  return acc + val;
}, 0);

var sumGanjil = arrGanjil.reduce(function (acc, val) {
  return acc + val;
}, 0);

var medianGenap = sumGenap / arrGenap.length;
var medianGanjil = sumGanjil / arrGanjil.length;

if (minGenap > minGanjil) {
  console.info("Nilai Min > array genap");
} else if (minGanjil > minGenap) {
  console.info("Nilai Min > array ganjil");
} else {
  console.info("Nilai Min sama dengan kedua array");
}

if (maxGenap > maxGanjil) {
  console.info("Nilai Max > array genap");
} else if (maxGanjil > maxGenap) {
  console.info("Nilai Max > array ganjil");
} else {
  console.info("Nilai Max sama dengan kedua array");
}

if (sumGenap === sumGanjil) {
  console.info("Total memiliki nilai yang sama antara array genap dan ganjil");
} else {
  console.info("Total memiliki nilai yang berbeda antara array genap dan ganjil");
}

if (medianGenap > medianGanjil) {
  console.info("Rata-rata > array genap");
} else if (medianGanjil > medianGenap) {
  console.info("Rata-rata > array ganjil");
} else {
  console.info("Rata-rata sama dengan kedua array");
}

function angkaAcak() {
  return Math.floor(Math.random() * 50) + 1;
}

var arrayAcak = [];
for (var i = 0; i < 100; i++) {
  arrayAcak.push(angkaAcak());
}

var arrGenap = [];
var arrGanjil = [];

for (var i = 0; i < arrayAcak.length; i++) {
  if (i % 2 === 0) {
    arrGenap.push(arrayAcak[i]);
  } else {
    arrGanjil.push(arrayAcak[i]);
  }
}

var minGenap = Math.min(...arrGenap);
var maxGenap = Math.max(...arrGenap);
var minGanjil = Math.min(...arrGanjil);
var maxGanjil = Math.max(...arrGanjil);

var sumGenap = arrGenap.reduce(function (acc, val) {
  return acc + val;
}, 0);

var sumGanjil = arrGanjil.reduce(function (acc, val) {
  return acc + val;
}, 0);

var medianGenap = sumGenap / arrGenap.length;
var medianGanjil = sumGanjil / arrGanjil.length;

console.info("Array dengan 100 nilai acak:");
console.info(arrayAcak);

console.info("\nArray Genap (50 nilai):");
console.info("Nilai Min:", minGenap);
console.info("Nilai Max:", maxGenap);
console.info("Total:", sumGenap);
console.info("Rata-rata:", medianGenap);

console.info("\nArray Ganjil (50 nilai):");
console.info("Nilai Min:", minGanjil);
console.info("Nilai Max:", maxGanjil);
console.info("Total:", sumGanjil);
console.info("Rata-rata:", medianGanjil);

console.info("\nPerbandingan antara array Genap dan Ganjil:");
if (minGenap > minGanjil) {
  console.info("Nilai Min > array genap");
} else if (minGanjil > minGenap) {
  console.info("Nilai Min > array ganjil");
} else {
  console.info("Nilai Min sama dengan kedua array");
}

if (maxGenap > maxGanjil) {
  console.info("Nilai Max > array genap");
} else if (maxGanjil > maxGenap) {
  console.info("Nilai Max > array ganjil");
} else {
  console.info("Nilai Max sama dengan kedua array");
}

if (sumGenap === sumGanjil) {
  console.info("Total memiliki nilai yang sama antara array genap dan ganjil");
} else {
  console.info("Total memiliki nilai yang berbeda antara array genap dan ganjil");
}

if (medianGenap > medianGanjil) {
  console.info("Rata-rata > array genap");
} else if (medianGanjil > medianGenap) {
  console.info("Rata-rata > array ganjil");
} else {
  console.info("Rata-rata sama kedua dengan array");
}
