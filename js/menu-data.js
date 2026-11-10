// Semua data menu ada di file ini. Format: "Nama|Harga dalam ribuan" dipisah titik koma.
const WA = '6282186937907'; // 0821-8693-7907 a.n. Fitriah
const f = (p, s) => s.split(',').map(n => n + '|' + p).join(';');

const FAV = [ // [file foto, emoji cadangan, nama, harga, deskripsi]
 ['pindang_patin.jpg','🥘','Pindang Patin','Rp 35.000','Ikan patin berkuah segar, hangat dan gurih.'],
 ['aneka_seruit.jpg','🌶️','Aneka Seruit','Tanya harga','Hidangan khas Lampung dengan sambal seruit.'],
 ['gurame_bakar.jpg','🐟','Gurame Bakar Jumbo','Rp 85.000','Gurame ukuran jumbo dibakar harum, cocok untuk berbagi.'],
 ['patin-bakar.jpg','🐟','Patin Bakar Jumbo','Rp 75.000','Patin ukuran jumbo dengan bumbu bakar yang meresap.'],
 ['seafood-tumpah.jpg','🦐','Paket Seafood','Mulai Rp 65.000','Seafood dengan saus, tersedia 1, 2, dan 4 porsi.'],
 ['ayam-bakaar.jpg','🍗','Aneka Olahan Ayam','Mulai Rp 35.000','Cah jamur lada hitam, goreng mentega, saus tiram, dan goreng tepung.']
];

const BANNER = [ // [foto, emoji cadangan, tema warna, judul, teks, tombol, tujuan]
 ['banner-1.png','🐟','','ANEKA SERUIT RUMAH MAKAN BUNDA FITRI','Pindang, ikan bakar, seruit, sampai seafood. Menu ikan sudah termasuk nasi, sambal, dan lalapan lengkap.','Lihat menu','#menu'],
 ['banner-2.png','🍲','t2','PAKET KELUARGA mulai Rp 200.000','Paket Ber 4, Ber 6, dan Paket Jumbo Ber 8, lengkap dengan es teh dan es jeruk.','Lihat paket','#paket'],
 ['banner-3.png','🦐','t3','PAKET SEAFOOD TUMPAH','Seafood dengan saus, mulai Rp 65.000 untuk 1 porsi.','Pesan sekarang','#pesan'],
 ['banner-4.png','🍜','','NEW MENU: Uyeh Isem','Uyeh isem patin, gabus, dan nila,','Lihat menu','#menu']
];

const PAKET = [ // [nama, harga, label, isi "item|jumlah"]
 ['Paket Ber 4','Rp 200.000','','Pindang Patin|1;Nila Bakar|1;Gurame Bakar|1;Tahu & Tempe Goreng|1;Es Teh|2;Es Jeruk|2'],
 ['Paket Ber 6','Rp 300.000','','Pindang Patin|1;Pindang Baung|1;Nila Bakar|2;Gabus Bakar|1;Patin Bakar|1;Tahu & Tempe Goreng|1;Es Teh|3;Es Jeruk|3'],
 ['Paket Jumbo (Ber 8)','Rp 450.000','Meput Lesung','Pindang Patin|1;Pindang Baung|2;Nila Bakar|2;Gabus Bakar|1;Gurame Bakar|1;Patin Bakar|1;Tahu & Tempe Goreng|1;Cah Kangkung|1;Es Teh|4;Es Jeruk|4']
];

const MENU = {
 'Ikan': [
  ['Olahan Kuah','Pindang Patin|35;Pindang Baung Biasa|45;Pindang Baung Sedang|55'],
  ['Olahan Bakar / Goreng','Gurame Bakar/Goreng|65;Nila Bakar/Goreng|35;Lele Bakar|25;Lele Goreng|20;Gabus Bakar|55;Gabus Goreng|50;Patin Bakar|45;Patin Goreng|45;Bawal Bakar/Goreng|35;Ikan Seluang|30;Ikan Lais|30'],
  ['Olahan Ungkep','Ungkep Nila|35;Ungkep Patin|35;Ungkep Baung|55']],
 'Jumbo': [
  ['Ikan Special Jumbo','Pindang Kepala Simba|70;Pindang Kepala Baung|70;Gurame Bakar Jumbo|85;Gabus Bakar Jumbo|95;Patin Bakar Jumbo|75'],
  ['Menu Tambahan dan Pelengkap','Nasi Tambah|7;Extra Sambel|10;Kuah Pindang|5;Pete Bakar/Goreng|10;Tahu dan Tempe Goreng|10;Jeroan Ayam Goreng|15']],
 'Nasi & Sop': [
  ['Aneka Nasi Goreng','Nasi Goreng Biasa|15;Nasi Goreng Pete Teri|25;Nasi Goreng Telor Asin|25;Nasi Goreng Special|30;Nasi Goreng Seafood|40'],
  ['Olahan Sop','Sop Iga|45;Sop Sapi|45;Sop Kambing|45;Sop Ayam Kampung|35;Sop Ayam Potong|35']],
 'Chinese Food': [
  ['Olahan Ayam','Ayam Cah Jamur Lada Hitam|35;Ayam Goreng Mentega|45;Ayam Saos Tiram|45;Ayam Goreng Tepung|35'],
  ['Sayur Olahan Tumis','Capcay Biasa|20;Capcay Ayam|30;Capcay Seafood|40;Capcay Spesial|40;Cah Kangkung|10;Cah Kol|15;Cah Toge|15'],
  ['Seafood dan Saus','Paket Seafood 1 Porsi|65;Paket Seafood 2 Porsi|120;Paket Seafood 4 Porsi|220']],
 'Menu Baru': [
  ['Mie dan Bihun','Bihun Goreng|30;Mie Goreng|30;Kwetiau Goreng|30'],
  ['Uyeh Isem','Uyeh Isem Patin|35;Uyeh Isem Gabus|35;Uyeh Isem Nila|35']],
 'Minuman': [
  ['Aneka Jus Buah','Jus Tomat|10;' + f(15,'Jus Naga,Jus Alpukat,Jus Mangga,Jus Nanas')],
  ['Minuman Nyegerin','Es Teh|5;Es Jeruk|8;Lemon Tea|10;Es Tawar|2;Mangga Squash|10;Strawberry Squash|10;Leci Squash|10;Lemon Squash|10;Sky Blue Squash|10;Virgin Mint|10;Jeruk Nipis Madu|10;Air Mineral|5;Teh Hangat|5;Teh Tawar|5'],
  ['Aneka Coffee','Kopi Hitam|5;Original|10;Kopi Lanang|15;Kopi Susu|10'],
  ['Aneka Milk Shake',f(15,'Vanilla Milk,Kopi Gula Aren Milk,Red Velvet,Taro Milk,Matcha Milk,Coklat Milk,Brown Sugar Milk,Kopi Caramel,Kopi Pandan,Kopi Vanilla')],
  ['Aneka Cemilan',f(15,'Kentang Goreng,Sosis Goreng,Otak-Otak Goreng,Bakso Goreng,Nugget Goreng')]]
};
