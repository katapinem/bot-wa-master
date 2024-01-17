const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const data = require('./data.json');


const client = new Client({
    puppeteer: {headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-extensions']}
});

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('qr', qr);
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (msg) => {
    console.log('msg', msg.body);

    if (msg.body == 'Info') {
        msg.reply(`Halo, Anda Terhubung dengan Service Informasi Kantor Pengadilan Tata Usaha Negara Tanjung Pinang. Jl. Ir. Sutami No.3, Sungai Harapan, Kec. Sekupang, Kota Batam, Kepulauan Riau 29424
        
Jam Kerja Pelayanan 
    Senin s/d kamis 08:00 - 16:30 WIb
    jumat 08:00 - 17:00 WIB

Istirahat
    Senin s/d Kamis 12.00 - 13.00 WIB
    Jumat 11.30 -13.00 WIB

Untuk pertanyaan dibawah ini, silahkan ketik “#(nomor pertanyaan)

Contoh : 
    Jika ingin bertanya terkait pertanyaan nomor 2, 
    maka ketik 2

MENU
1.Permohonan Informasi Elektronik
2.E-Katalog Informasi
3.Registrasi Layanan Disabilitas (RELASI)
4.Pendaftaran Perkara Banding Elektronik
5.Pengambilan salinan Penetapan/Putusan (yang belum berkekuatan hukum tetap)
6.Pendaftaran Perkara Upaya Hukum Peninjauan Kembali (PK)
7.Pendaftaran Perkara Penilaian Unsur Penyalahgunaan Wewenang
8.Pendaftaran Perkara Gugatan Elektronik
9.Pendaftaran Surat Kuasa
10.Contact`);   
} })

client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#1') {
        msg.reply(`Form Permohonan Informasi,untuk Informasi lengkap mengenai form permohonan informasi anda dapat melihat.tautan Berikut: https://ppid.ptun-tanjungpinang.go.id/form-permohonan-informasi/
    
Ketik Info untuk kembali ke Menu Utama.`);
}})

client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#2') {
        msg.reply(`E-KATALOG INFORMASI ini adalah daftar dari seluruh dokumen dan petunjuk serta panduan kerja yang ada di Pengadilan Tata Usaha NegaraTanjungpinang,yang dipublikasikan untuk membantu masyarakat pencari keadilan untuk mengakses informasi secara mudah dan cepat dan dari mana saja. 
untuk informasi E-Katalog sendiri berisi tentang dokumen 

    1.Pelayanan Perkara 
    2.emplate Gugatan Mandiri
    3.Standar Dan Maklumat Pelayanan

Untuk Informasi dan Selengkapnya Anda dapat mengunduh dokumen di Tautan berikut: https://cloud.ptun-tanjungpinang.go.id/s/e-katalog

Ketik Info untuk kembali ke Menu Utama.`);
}})

client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#3') {
        msg.reply(`REGISTRASI LAYANAN DISABILITAS (RELASI) merupakan layanan registrasi yang dilakukan secara elektronik untuk penyandang disabilitas, dengan layanan ini penyandang disabilitas bisa melakukan registrasi terlebih dahulu secara online sebelum datang ke pengadilan untuk memberitahu pihak pengadilan tentang tujuannya datang ke pengadilan,atau layanan apa yang ingin didapatkan dari pengadilan, sehingga pihak pengadilan bisa mempersiapkan terlebih dahulu terkait dokumen layanan yang diperlukan demi menghemat waktu pelayanan.
    
UNTUK Persyaratan Registrasi Layanan Disabilitas:
    1. Akses Internet
    2. Laptop atau Smartphone untuk mengakses Formulir Online
        
Sistem, Mekanisme, dan Prosedur:
    1. Melakukan Registrasi online.
    2. Cek Pesan Konfirmasi dari Petugas Pengadilan pada Whatsapp Anda
    3. Jika tidak dapat menggunakan layanan registrasi online, maka dapat menghubungi 
       langsung ke Pengadilan Tata Usaha Negara.
    
Biaya atau Tarif:
    - TIDAK DIPUNGUT BIAYA

Waktu Layanan:
    Senin s.d. Kamis pukul 09.00-16.00
        
Untuk Melakukan Registrasi Layanan Disabilitas,Anda dapat melihat Tautan Berikut: https://ppid.ptun-tanjungpinang.go.id/registrasi-layanan-disabilitas/
    
Ketik Info untuk kembali ke Menu Utama.`);
}})

client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#4') {
        msg.reply(`Untuk Informasi dan Pendaftaran Perkara Banding Elektronik Sebagai Berikut.
    
Persyaratan
    1.ldentitas Pemohon Banding berupa surat kuasa khusus, identitas penerima kuasa yang 
    masih berlaku, surat sumpah dan Kartu Tanda Advokat/ surat kuasa insidentil dilampirkan 
    dengan identitas penerima kuasa yang masih berlaku, penetapan suratkuasa insidentil dari 
    KPTUN, surat permohonan untuk menjadi kuasa insidentil jika ada
    
Sistem, Mekanisme dan Prosedur
    1. Petugas e-Court setiap waktu berkala bertugas melakukan pengecekan pada sistem 
       tersebut ± 5 menit
    2. Jika petugas mendapatkan adanya pendaftaran perkara banding melalui e-Court dan 
       pendaftaran tersebut telah selesai dilakukan oleh Pendaftar sampai dengan 
       pembayaran secara online maka petugas e-Court menginformasikan kepada 
       kasir dan Meja 3 ± 5 menit
    3. Kasir membuat SKUM atas pembayaran online tersebut serta memungut biaya PNBP 
       ± 5 menit
    4. Petugas Meja 3 membuat Akta Pernyataan Banding dan menyampaikan Akta 
       Pernyataan Banding tersebut kepada Panitera untuk ditandatangani ± 10 menit
    5. Petugas menginput Akta Pernyataan Banding yang telah ditandatangani 
       ke e-Court ± 5 menit
    
Biaya/Tarif
    Panjar biaya perkara dihitung berdasar pada Keputusan Ketua Pengadilan Tata Usaha 
    Negara Tanjung Pinang tentang Administrasi Biaya Perkara pada Pengadilan Tata Usaha 
    Negara Tanjung Pinang yang berlaku.
    
Poduk Layanan 
Akta pernyataan Banding yang telah ditandatangani Panitera dan diinput pada e­ Court.

Pengaduan Layanan 
    > Melalui aplikasi SIWAS:https://siwas.mahkamahagung.go.id/

    > Melalui SP4N LAPOR!: https://www.lapor.go.id/

    > Melalui nomor telepon BAWAS: (021) 290791

    > Melalui nomor telepon PTTUN Medan: (061) 6617552 - 6627855

    > Melalui nomor telepon PTUN Tanjung Pinang: (0778) 324299 atau 082170099229
    
Layanan Online
    https://ecourt.mahkamahagung.go.id/
         
Ketik Info untuk kembali ke Menu Utama.`);

}})

client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#5') {
        msg.reply(`Untuk informasi dan persyaratan Pengambilan salinan Penetapan/Putusan (yang belum berkekuatan hukum tetap)

Persyaratan 
    1. Pernohon mengajukan permohonan melalui petugas layanan menyatakan tujuannya 
       untuk pengambilan salinan Putusan/Penetapan.
    2. Menunjukkan identitas diri yang masih berlaku
    3. Melampirkan Pemberitahuan Putusan/Penetapan jika ada.
    4. Menunjukkan salinan surat kuasa khusus yang telah di daftarkan pada kepaniteraan 
       Hukum/salinan surat kuasa insidentil dilampir fotokopi identitas yang masih berlaku 
       penerima kuasa dan salinan penetapan surat kuasa insidentil dari KPTUN.
        
Sistem, Mekanisme dan Prosedur
    1. Pemohon hadir dan menyatakan untuk pengambilan salinan putusan penetapan 
       kepada petugas Pelayanan ± 5 menit
    2. Petugas pelayanan memeriksa identitas pemohon selanjutnya di cocokkan dengan 
       pihak yang berperkara dalam salinan Penetapan/Putusan tersebut ± 5 menit
    3. Petugas Pelayanan menyiapkan salinan serta menghitung biaya yang timbul atas 
       salinan tersebut ± 15 menit
    4. Petugas Pelayanan menyampaikan salinan tersebut kepada Panitera untuk ditanda 
       tangani ± 5 menit
    5. Petugas Pelayanan menyampaikan salinan tersebut serta meminta biaya yang timbul 
       kepada pemohon salinan ± 5 menit
        
Waktu Penyelesaian 
    35 Menit

Biaya/Tarif
    Biaya/Tarif sesuai dengan PP No. 5 Tahun 2019 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak 
yang Berlaku pada Mahkamah Agung dan Badan Peradifan yang Berada di bawahnya dan SK Ketua Pengadilan Tata Usaha Negara Tanjung Pinang 
tentang Administrasi Biaya Perkara pada Pengadilan Tata Usaha Negara Tanjung Pinang yang berlaku, dengan rincian:

        Penyerahan Turunan/Salinan Putusan/Penetapan: Rp.500,- (Per lembar)

        Leges         : Rp.10.000,-

        Materai       : Rp.10.000,-

        Penggandaan   : Rp.500,- (Per lembar)

        Cover Putusan : Rp.3.500,-

        Map Pengadilan : Rp.4.000,-

Produk Layanan
    1. Pemohon menerima salinan. 
    2. Pemohon mendapat bukti biaya yang 
    dibayarkan untuk salinan tersebut
        
Pengaduan Layanan 
    > Melalui aplikasi SIWAS:https://siwas.mahkamahagung.go.id/

    > Melalui SP4N LAPOR!: https://www.lapor.go.id/

    > Melalui nomor telepon BAWAS: (021) 290791

    > Melalui nomor telepon PTTUN Medan: (061) 6617552 - 6627855

    > Melalui nomor telepon PTUN Tanjung Pinang: (0778) 324299 atau 082170099229
        
Layanan Online
    https://ecourt.mahkamahagung.go.id/

Ketik Info untuk kembali ke Menu Utama.`);
}})


client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#6') {
        msg.reply(`Pendaftaran Perkara Upaya Hukum Peninjauan Kembali (PK) Prosedur pengajuan permohonan peninjauan kembali dapat dilakukan secara lisan atau secara tertulis oleh orang yang pernah menjadi salah satu pihak dalam sengketa perdata kepada Mahkamah Agung Republik Indonesia, melalui pengadilan negeri yang memutuskan perkaranya pada tingkat pertama.

Persyaratan 
    1. Pemohon Peninjauan Kembali / Kuasanya hadir menyatakan permohonan 
       Peninjauan Kembali dan menyerahkan alasan Peninjauan Kembali dan soft copy.
    2. Asli surat kuasa khusus yang telah di daftarkan pada kepaniteraan Hukum dilampiri 
       Fotokopi identitas yang masih berlaku penerima kuasa, Fotokopi surat sumpah 
       dan Fotokopi KTA / asli surat kuasa insidentil dilampir Fotokopi identitas yang masih 
       berlaku penerima kuasa, asli penetapan surat kuasa insidentil dari KPN, 
       surat permohonan untuk menjadi kuasa insidentil jika ada.
    3. Membayar biaya panjar perkara yang telah dihitung oleh petugas.

Sistem, Mekanisme dan Prosedur
    1. Pemohon Peninjauan Kembali / Kuasanya menyatakan Peninjauan 
       Kembali secara lisan serta menyerahkan Memori Peninjauan 
       Kembali kepada petugas Pelayanan ± 5 menit
    2. Petugas pelayanan rneneliti kelengkapan persyaratan formal permohonan 
       Peninjauan Kembali dengan di lengkapi ceklist penerimaan berkas perkara
       yang selanjutnya di tanda tangani oleh panitera Muda Perkara ± 10 menit
    3. Petugas menghitung panjar biaya perkara dan dituangkan dalam bentuk SKUM 
       selanjutnya diserahkan kepada Pemohon Peninjauan kembali / Kuasanya 
       untuk di bayarkan ke Bank ± 5 menit
    4. Petugas menerima bukti pembayaran panjar biaya perkara permohonan Peninjauan 
       Kembali tersebut ± 5 menit
    5. Petugas pelayanan memberikan cap tanda terima pada alasan Peninjauan Kembali 
       yang ditandatangani oleh Panitera ± 5 menit
    6. Petugas pelayanan membuat akta pernyataan Peninjauan Kembali dan tanda terima
    7. alasan peninjauan kembali yang ditandatangani oleh Pemohon dan Panitera ± 10 menit
    8. Petugas menyampaikan akta pernyataan Peninjauan Kembali alas an Peninjauan 
       Kembali kepada pemohon/kuasanya untuk selanjutnya ditandatangani pemohon/Kuasanya ± 5 menit

Waktu Penyelesaian 
    45 Menit

Biaya/Tarif
    Panjar biaya perkara dihitung berdasar pada Keputusan Ketua Pengadilan Tata Usaha Negara Tanjung Pinangtentang Administrasi Biaya Perkara pada Pengadilan Tata Usaha Negara Tanjung Pinang yang berlaku

Produk Layanan
    1. Pemohon Peninjauan Kembali / Kuasanya menerima salinan Akta pernyataan Peninjauan Kembali. 
    2. Pemohon Peninjauan Kembali / Kuasanya menerima salinan tanda terima alasan Peninjauan Kembali. 
    3. Pemohon Peninjauan Kembali / Kuasanya menerima salinan alasan Peninjauan Kembali. 
    4. Pemohon Peninjauan Kembali / kuasanya menerima salinan bukti setor uang panjar perkara dari bank serta Salinan SKUM yang dikeluarkan Kasir
 
Pengaduan Layanan 
    > Melalui aplikasi SIWAS:https://siwas.mahkamahagung.go.id/

    > Melalui SP4N LAPOR!: https://www.lapor.go.id/

    > Melalui nomor telepon BAWAS: (021) 290791

    > Melalui nomor telepon PTTUN Medan: (061) 6617552 - 6627855

    > Melalui nomor telepon PTUN Tanjung Pinang: (0778) 324299 atau 082170099229

Ketik Info untuk kembali ke Menu Utama.`);
}})


client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#7') {
        msg.reply(`Pendaftaran Perkara Penilaian Unsur Penyalahgunaan Wewenang.

Persyaratan 
    1. Membawa surat permohonan asli dan salinan surat permohonan sejumlah 5 / 
    menyesuaikan jumlah termohon softcopy Gugatan dalam bentuk file format MS. Word.
    2. Asli surat kuasa khusus yang telah di daftarkan pada kepaniteraan Hukum 
    dilampiri fotokopi
    3. identitas yang masih berlaku penerima kuasa, Fotokopi surat sumpah dan 
    Fotokopi KTA / asli surat kuasa insidentil dilampir Fotokopi identitas yang 
    masih berlaku penerima kuasa, asli penetapan surat kuasa insidentil dari KPTUN, 
    surat permohonan untuk menjadi kuasa insidentil.
    4. Fotokopi identitas / identitas yang masih berlaku pemohon.
    5. Fotokopi Keputusan dan/atau Peraturan Perundang-undangan pembentukan Sadan 
    Pemerintah yang bersangkutan dalam hal pemohon Sadan Pemerintahan, Keputusan 
    Pengangkatan jabatan pemohon pada saat keputusan dan/atau tindakan pemohon yang 
    dimohonkan penilaian itu diterbitkan dan/atau dilakukan dalam hal pemohon 
    pejabat pemerintah.
    6. Fotokopi Keputusan yang dimohonkan penilaian dan hasil pengawasan aparat 
    pengawas internal pemerintahan serta fotokopi bukti surat atau tulisan yang berkaitan 
    dengan alasan permohonan
    7. Membayar biaya panjar perkara yang telah di hitung oleh petugas

Sistem, Mekanisme dan Prosedur
    1. Permohonan / Kuasanya menyerahkan syarat - syarat tersebut kepada petugas 
     Pelayanan ± 5 menit
    2. Petugas Pelayanan meneliti kelengkapan berkas tersebut dengan dilengkapi ceklist 
     penerimaan berkas perkara yang selanjutnya di tanda tangani oleh panitera
     Muda Perkara ± 5 menit
    3. Panitera menerbitkan keterangan kelengkapan / tidak lengkap berkas perkara. 
     Apabila berkas lengkap Penggugat membayar biaya perkara,apabila berkas tidak lengkap, 
     berkas dikembalikan kepada Penggugat untuk dilengkapi dalam tenggang waktu 7 hari 
     kerja ± 10 menit
    4. Petugas menghitung panjar biaya perkara yang harus di bayar dan di tuangkan dalam bentuk SKUM 
      selanjutnya diserahkan kepada Pemohon / Kuasanya untuk di bayarkan ke Bank ± 5 menit
    5. Petugas menerima bukti pembayaran panjar biaya perkara selanjutnya memberikan
      nomor pada berkas perkara serta menuliskan nomor register pada gugatan asli 
      dan salinannya gugatan asli dan salinannya ± 5 menit
Waktu Penyelesaian 
    30 Menit

Biaya/Tarif
    Panjar biaya perkara dihitung berdasar pada Keputusan Ketua Pengadilan Tata Usaha 
    Negara Tanjung Pinang tentang Administrasi Biaya Perkara Pengadilan Tata Usaha Negara 
    Tanjung Pinang yang berlaku.

Produk Layanan
    1. Permohonan / Kuasanya menerima salinan permohonan yang telah mendapatkan 
    nomor perkara. 
    2. Pemohon / kuasanya menerima salinan bukti setor uang panjar perkara dari bank 
    serta salinan SKUM yang dikeluarkan Kasir.

Pengaduan Layanan 
    > Melalui aplikasi SIWAS:https://siwas.mahkamahagung.go.id/

    > Melalui SP4N LAPOR!: https://www.lapor.go.id/
    
    > Melalui nomor telepon BAWAS: (021) 290791
    
    > Melalui nomor telepon PTTUN Medan: (061) 6617552 - 6627855
    
    > Melalui nomor telepon PTUN Tanjung Pinang: (0778) 324299 atau 082170099229

Ketik Info untuk kembali ke Menu Utama.`);
}})


client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#8') {
        msg.reply(`Pendaftaran Perkara Gugatan Elektronik

Persyaratan 
    1. Jika Pendaftar adalah Advokat yang sudah terverifikasi dan tervalidasi oleh Pengadilan Tinggi maka Pengguna Terdaftar bisa langsung mendaftar perkara.
    2. Jika pendaftar adalah Pengguna lain maka langkah pertama pembuatan akun melalui Pengadilan tingkat pertama Setempat. Yang dimaksud pengguna lain yaitu Perorangan, Badan Hukum, Pemerintah, serta Kuasa lnsidentil.
    3. Jika pendaftar Pengguna lain telah mendapatkan akun, maka pendaftar dapat mengakses ecourt untuk pendaftaran perkara secara online.
    4. Persyaratan yang harus disiapkan dalam pendaftaran perkara e-Court antara lain: • ldentitas Penggugat / Pemohon • Softcopy gugatan/permohonan dalam bentuk MS word dan Pdf. • Softcopy bukti awal dalam bentuk Pdf.

Sistem, Mekanisme dan Prosedur
    1. Pengguna Terdaftar a. Petugas E-Court setiap waktu berkala bertugas melakukan pengecekan pada sistem tersebut ± 5 menit b. Jika petugas mendapatkan adanya pendaftaran perkara melalui e-Court dan pendaftaran tersebut telah selesai dilakukan oleh Pendaftar sampai dengan pembayaran secara online maka petugas e-Court menginformasikan kepada kasir ± 5 menit c. Kasir membuat SKUM atas pembayaran online tersebut serta memungut biaya PNBP dan Proses lalu meneruskan berkas ke Meja I ± 10 menit d. Meja I menginput register dan data umum dalam SIPP perkara tersebut ± 5 menit
    2. Pengguna Lain a. Pengguna hadir dan menyatakan ingin mendaftarkan perkara ke Petugas Pelayanan Terpadu Satu Pintu (PTSP) Kepaniteraan Perkara dengan menunjukkan berkas yang ingin didaftarkan beserta lampiran lainnya ± 5 menit b. Petugas Pelayanan Terpadu Satu Pintu (PTSP) Kepaniteraan Perkara mengisi ceklist Dokumen kemudian mengarahkan Pengguna ke Meja e-Court ± 5 menit c. Petugas Meja e-Court menerima pengguna dan meminta pengguna mengisi pernyataan memenuhi Perma Nomor 7 Tahun 2022 ± 5 menit d. Pengguna menyerahkan pernyataan persetujuan ke Petugas Meja e-Court ± 5 menit e. Petugas Meja e-Court membantu Pengguna mendaftarkan perkara hingga mendapat virtual account (pembayaran) ± 15 menit f. Petugas Meja e-Court setiap waktu berkala bertugas melakukan pengecekan pada sistem tersebut ± 5 menit g. Jika petugas mendapatkan adanya pendaftaran perkara melalui e-Court dan pendaftaran tersebut telah selesai dilakukan oleh Pendaftar sampai dengan pembayaran secara online maka petugas e-Court menginformasikan kepada kasir ± 5 menit h. Kasir membuat SKUM atas pembayaran online tersebut serta memungut biaya PNBP dan Proses lalu meneruskan berkas ke Meja I ± 10 menit i. Meja I menginput register dan data umum dalam SIPP perkara tersebut ± 5 menit
Waktu Penyelesaian 
    - Pengguna Terdaftar 25 (dua puluh lima)menit
    - Pengguna Lainnya 60 (enam puluh) menit


Biaya/Tarif
    Panjar biaya perkara dihitung berdasar pada Keputusan Ketua Pengadilan Tata Usaha Negara Tanjung Pinang tentang Administrasi Biaya Perkara pada Pengadilan Tata Usaha Negara Tanjung Pinang yang berlaku.


Produk Layanan
    Pendaftran perkara melalui E-COURT mendapatkan nomor perkara.

Pengaduan Layanan 
    > Melalui aplikasi SIWAS:https://siwas.mahkamahagung.go.id/

    > Melalui SP4N LAPOR!: https://www.lapor.go.id/
    
    > Melalui nomor telepon BAWAS: (021) 290791
    
    > Melalui nomor telepon PTTUN Medan: (061) 6617552 - 6627855
    
    > Melalui nomor telepon PTUN Tanjung Pinang: (0778) 324299 atau 082170099229

Ketik Info untuk kembali ke Menu Utama.`);
}})


client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#9') {
        msg.reply(`Pendaftaran Surat Kuasa  

Persyaratan 
    - Surat Kuasa Asli
    - Fotokopi Surat Kuasa
    - Fotokopi KTA
    - Fotokopi Berita Acara Sumpah
    - Fotokopi identitas yang masih berlaku

Sistem, Mekanisme dan Prosedur
    1. PTSP Loket 3 / Pelayanan Hukum : • Menerima berkas dan meneliti kelengkapan berkas permohonan ± 10 menit; • Meregister pendaftaran surat kuasa dan membubuhkan cap pendaftaran ± 10 menit;
    2. Panmud Hukum : • Menandatangani pendaftaran surat kuasa (Panmud Hukum) ± 5 menit.
    3. Petugas PTSP : • Menyerahkan berkas pendaftaran kepada pemohon, dan memungut serta menyetor PNBP kepada kasir ± 5 menit.
Waktu Penyelesaian 
    1. PTSP Loket 3 / Pelayanan Hukum :
       - Menerima berkas dan meneliti kelengkapan berkas permohonan ± 10 menit;
       - Meregister pendaftaran surat kuasa dan membubuhkan cap pendaftaran ± 10 menit;

    2. Panmud Hukum :
       - Menandatangani pendaftaran surat kuasa (Panmud Hukum) ± 5 menit.

    3. Petugas PTSP :
       - Menyerahkan berkas pendaftaran kepada pemohon, dan memungut serta menyetor PNBP kepada kasir ± 5 menit.

Biaya/Tarif
    Biaya/Tarif sesuai dengan Peraturan Pemerintah Nomor 5 Tahun 2019 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak yang berlaku pada Mahkamah Agung dan Badan Peradilan yang Berada di bawahnya (terlampir secara detail di lampiran waktu dan biaya) sebesar Rp.10.000,00

Produk Layanan
    Surat Kuasa terdaftar di Pengadilan

Pengaduan Layanan 
    > Melalui aplikasi SIWAS:https://siwas.mahkamahagung.go.id/

    > Melalui SP4N LAPOR!: https://www.lapor.go.id/
    
    > Melalui nomor telepon BAWAS: (021) 290791
    
    > Melalui nomor telepon PTTUN Medan: (061) 6617552 - 6627855
    
    > Melalui nomor telepon PTUN Tanjung Pinang: (0778) 324299 atau 082170099229

Ketik Info untuk kembali ke Menu Utama.`);
}})


client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#10') {
        msg.reply(`Kami beritahukan bahwa saat ini layanan Call Center hanya dibuka pada hari dan jam kerja.

	Berikut daftar nomor layanan Call Center di Pengadilan Tata Usaha Negara Tanjung Pinang:

    1. contact
        > Telp : (0778) 324299
        > Email : tanjungpinang@ptun.org
    
    2. Media Sosial
        > https://www.instagram.com/ptun_tanjung_pinang/
        > https://www.youtube.com/@PTUNTanjungPinang
		
	Ketik Info untuk kembali ke Menu Utama.`);
}})

client.on('message', async (msg) => {
    console.log('msg', msg.body);
    if (msg.body == '#2.1') {
        msg.reply(`Pelayanan Perkara 
        Dalam hal pendaftaran perkara Online, saat ini dikhususkan untuk Advokat. Pengguna terdaftar harus setelah mendaftar dan mendapatkan Akun, harus melalui mekanisme validasi Advokat oleh Pengadilan Tinggi tempat dimana Advokat disumpah, sedangkan pendaftaran dari Perseorangan atau Badan Hukum akan diatur lebih lanjut. Layanan dan Penjelasan singkat Pendaftaran Perkara Online
        untuk selengkapnya silahkan klik tautan berikut https://ecourt.mahkamahagung.go.id/


    
Ketik Info untuk kembali ke Menu Utama.`);
}})



client.initialize();
