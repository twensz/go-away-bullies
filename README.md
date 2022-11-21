# PANDUAN MENGERJAKAN PROYEK DENGAN GITHUB
## LANGKAH PERTAMA
### CLONE PROJECT

Langkah pertama yang harus dilakukan adalah clone project, caranya adalah:
<ul>
  <li>buat folder terlebih dahulu di laptop teman-teman</li>
</ul>

```bash
git clone https://github.com/twensz/go-away-bullies.git
```

<ul>
  <li>setelah berhasil di clone, JANGAN LUPA UNTUK NPM INSTALL agar node_modules nya dapat terpasang dan packagenya bisa berjalan dengan baik</li>
</ul>

```bash
npm install
```

## CARA MENGERJAKAN TASK
(mungkin udah pada tau caranya, tapi saya tulis aja)
Langkah pertama yang harus dilakukan antara lain adalah:

<ul>
  <li>membuat branch di akun github teman-teman formatnya seperti ini (1-nama-task), ganti nomer sesuai urutan tasknya ya guys</li>
  <li>kemudian checkout ke branch yang telah dibuat melalui terminal (git checkout nama_branch)</li>
  <li>gass ngoding sesuai tugas</li>
  <li>INI PENTING UNTUK MENGHINDARI TERJADINYA CONFLICT, (LAKUKAN GIT PULL TERLEBIH DAHULU SEBELUM MENGIRIM/PUSH PEKERJAANYA YA GUYS), caranya adalah (git pull origin main)
	tujuanya adalah barangkali ada tmen yang lain yang sudah ngepush jadi perlu kita sejajari dulu timelinenya sehingga ketika kita ngepush tidak terjadi error</li>
</ul>

satu langkah lagi guys

## CARA SUBMIT TASK
(gampang kok ini)
setelah pekerjaan selesai dan sudah melakukan pull, langkah terahir push

<ul>
  <li>caranya tinggal git push aja</li>
</ul>

```
  git push
```

## TERUS APA SETELAH ITU?
nah setelah langkah-langkah diatas telah dilakukan, sebenarnya udah selesai, sedikit aja yang perlu dilakukan lagi

<ul>
  <li>yang pertama setelah melakukan push, checkout kembali ke branch main (git checkout main)</li>
</ul>

```
git checkout main
```

<ul>
  <li>kemudian lakukan git pull kembali dengan cara (git pull origin main)</li>
</ul>

```
git pull origin main
```

<ul>
  <li>dan langkah terahir adalah hapus branch yang telah di kerjakan jika dirasa pekerjaan yang telah di push sudah benar dan tidak ada yang perlu diperbaiki lagi</li>
</ul>
