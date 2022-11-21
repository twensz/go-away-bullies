# PANDUAN MENGERJAKAN PROYEK DENGAN GITHUB
## LANGKAH 1
### CLONE PROJECT

<ul>
  <li>Buka folder untuk menyimpan repository, setelah itu buka terminal dan jalankan perintah berikut :</li>
</ul>

```bash
git clone https://github.com/twensz/go-away-bullies.git
```

<ul>
  <li>Setelah berhasil di clone, JANGAN LUPA UNTUK NPM INSTALL agar node_modules dapat terpasang dan packagenya bisa berjalan dengan baik</li>
</ul>

```bash
npm install
```

## LANGKAH 2
### CARA MENGERJAKAN TASK

<ul>
  <li>Membuat branch baru dengan format (nama-kamu/nama-fitur) contoh (syidan/login)</li>
  <li>Kemudian checkout ke branch yang telah dibuat melalui terminal "git checkout nama-branch"</li>
  
  ```bash
git checkout nama-branch
```

  <li>Coding sampe muntah, jangan lupa commit setiap sudah menyelesaikan checkpoint</li>
  
  ```bash
git commit -m 'pesan commit'
```

  <li>Untuk menghindari konflik lakukan git pull sebelum git push, caranya adalah <i>git pull origin main</i></li>
</ul>

### CARA SUBMIT TASK

<ul>
  <li>Caranya tinggal git push aja</li>
</ul>

```
  git push
```

## LANGKAH 3

<ul>
  <li>Checkout kembali ke branch main "git checkout main"</li>
</ul>

```
git checkout main
```

<ul>
  <li>Lakukan git pull kembali dengan cara "git pull origin main"</li>
</ul>

```
git pull origin main
```

<ul>
  <li>Hapus branch yang telah di push jika dirasa sudah tidak digunakan</li>
</ul>

```
git branch -D nama-branch
```
