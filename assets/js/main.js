// document.addEventListener("contextmenu", (event) => event.preventDefault());
let halaman0 = document.getElementById("halaman0"),
  start = document.getElementById("start"),
  audio = document.getElementById("audio"),
  halaman1 = document.getElementById("halaman1"),
  buka = document.getElementById("buka"),
  halaman2 = document.getElementById("halaman2"),
  pesan1 = document.getElementById("pesan1"),
  pesan2 = document.getElementById("pesan2"),
  pesan3 = document.getElementById("pesan3"),
  pesan4 = document.getElementById("pesan4"),
  pesan5 = document.getElementById("pesan5"),
  pesan6 = document.getElementById("pesan6"),
  surprise = document.getElementById("surprise"),
  halaman3 = document.getElementById("halaman3"),
  halaman3m = document.getElementById("halaman3m"),
  halaman4 = document.getElementById("halaman4"),
  song = document.getElementById("song"),
  songm = document.getElementById("songm"),
  vid = document.getElementById("vid"),
  i1 = 0,
  i2 = 0,
  i3 = 0,
  i4 = 0,
  i5 = 0,
  i6 = 0,
  text1 = "Teruntuk kamu, sang Pelangi yang warnanya selalu memberi kebahagiaan, kami ucapkan Selamat teriring doa.",
  text2 = "Semua yang berawal dari Dinamika, kini berakhir sudah dengan Wisuda. Semoga kamu berbahagia dan merdeka dari jiwa-jiwa yang lara! Kamu adalah pejuang hebat dari ujung timur pulau Jawa, tak apa jauh dari orang tua, kamu selalu  memantapkan raga, dan berangan akan suka.",
  text3 =
    "Detik waktu seakan tak terasa. Mungkin seperti baru kemarin melangkahkan kaki di kampus Ali Wardhana, dengan sejuta angan penuh dengan asa, kini terlukis bersama kamu yang mengenakan toga, masih jelas kami ingat senyum mu yang begitu berseri. Menyambut pertemuan keluarga Pelangi, dengan tekad satu hati, berjuang bersama untuk saling menyemangati.",
  text4 =
    "Tahun-tahun itu sudah terlewat, meninggalkan kenangan suka cita, tangis, dan tawa. Terima kasih sudah bertahan diatas juangmu, juga bersama kami, kini keluarga Pelangi akan terus berperang kehangatan.",
  text5 =
    "Dengan selesainya perjalanan ini, masih banyak halang rintang yang akan menghadang, jangan ragu akan pilihan, tetap terus melangkah ke depan, demi terwujudnya cita dan angan. Kami selalu mendoakan agar kamu selalu dipenuhi dengan keberkahan.",
  text6 = "Cheers, Pelangi 2018-2019",
  kecepatan = 60;
function ngetikKalimat1() {
  if (i1 < text1.length) {
    pesan1.innerHTML += text1.charAt(i1);
    i1++;
    setTimeout(ngetikKalimat1, kecepatan);
  }
}
function ngetikKalimat2() {
  if (i2 < text2.length) {
    pesan2.innerHTML += text2.charAt(i2);
    i2++;
    setTimeout(ngetikKalimat2, kecepatan);
  }
}
function ngetikKalimat3() {
  if (i3 < text3.length) {
    pesan3.innerHTML += text3.charAt(i3);
    i3++;
    setTimeout(ngetikKalimat3, kecepatan);
  }
}
function ngetikKalimat4() {
  if (i4 < text4.length) {
    pesan4.innerHTML += text4.charAt(i4);
    i4++;
    setTimeout(ngetikKalimat4, kecepatan);
  }
}
function ngetikKalimat5() {
  if (i5 < text5.length) {
    pesan5.innerHTML += text5.charAt(i5);
    i5++;
    setTimeout(ngetikKalimat5, kecepatan);
  }
}
function ngetikKalimat6() {
  if (i6 < text6.length) {
    pesan6.innerHTML += text6.charAt(i6);
    i6++;
    setTimeout(ngetikKalimat6, kecepatan);
  }
}
start.addEventListener(
  "click",
  function () {
    audio.play();
    document.body.removeAttribute("style");
    halaman0.remove();
    setTimeout(function () {
      anime({
        targets: ".footer",
        translateY: [400, 0],
        easing: "easeInOutQuad",
        duration: 2000,
      });
    }, 700);
    setTimeout(function () {
      anime({
        targets: ".mesin, .footer2",
        translateY: [1000, 0],
        easing: "easeInOutQuad",
        duration: 4000,
      });
    }, 700);
    setTimeout(function () {
      halaman1.removeAttribute("style");
    }, 700);
  },
  false
);
buka.addEventListener(
  "click",
  function () {
    anime({ targets: ".halaman1", translateY: [0, -1000], duration: 4000 });
    setTimeout(function () {
      halaman1.remove();
    }, 1000);
    setTimeout(function () {
      halaman2.removeAttribute("style");
    }, 700);
    setTimeout(function () {
      anime({
        targets: ".kertasm",
        translateY: [100, 0],
        duration: 1000,
        easing: "easeInOutSine",
        opacity: 1,
      });
    }, 1000);
    setTimeout(function () {
      anime({
        targets: ".kertas",
        translateY: [100, 0],
        duration: 1000,
        easing: "easeInOutSine",
        opacity: 1,
      });
    }, 1000);
    setTimeout(function () {
      ngetikKalimat1();
    }, 3000);
    setTimeout(function () {
      ngetikKalimat2();
    }, 10000);
    setTimeout(function () {
      ngetikKalimat3();
    }, 28000);
    setTimeout(function () {
      ngetikKalimat4();
    }, 50000);
    setTimeout(function () {
      ngetikKalimat5();
    }, 63000);
    setTimeout(function () {
      ngetikKalimat6();
    }, 79000);
  },
  false
);
surprise.addEventListener(
  "click",
  function () {
    anime({ targets: ".halaman2", translateY: [0, -1000], duration: 4000 });
    setTimeout(function () {
      halaman2.remove();
    }, 1000);
    setTimeout(function () {
      halaman2a.remove();
    }, 1000);
    setTimeout(function () {
      halaman3.removeAttribute("style");
    }, 700);
    setTimeout(function () {
      halaman3m.removeAttribute("style");
    }, 700);
  },
  false
);
song.addEventListener(
  "click",
  function () {
    anime({ targets: ".halaman3", translateY: [0, -5000], duration: 4000 });
    setTimeout(function () {
      halaman3.remove();
    }, 1000);
    setTimeout(function () {
      halaman4.removeAttribute("style");
    }, 700);
  },
  false
);
songm.addEventListener(
  "click",
  function () {
    anime({ targets: ".halaman3-m", translateY: [0, -5000], duration: 4000 });
    setTimeout(function () {
      halaman3m.remove();
    }, 1000);
    setTimeout(function () {
      halaman4.removeAttribute("style");
    }, 700);
  },
  false
);
vid.addEventListener(
  "click",
  function () {
    audio.pause();
    vid.remove();
  },
  false
);
