var counter3 = 0;
var counter4 = 0;
var countDatas = [
  {
    firstLine: "More than",
    numData: 10,
    lastLine: "years since our inception",
  },
  {
    firstLine: "More than",
    numData: 10,
    lastLine: "experts of different vocations",
  },
  { firstLine: "Over", numData: 20, lastLine: "educations" },
  { firstLine: "Over", numData: 30, lastLine: "regular customers" },
  { firstLine: " ", numData: 0, lastLine: "failed crisis communications" },
  { firstLine: "Over", numData: 50, lastLine: "independent projects" },
  { firstLine: "Over", numData: 200, lastLine: "press conference" },
];

var myCountUp = setInterval(setCountUp, 10);
function setCountUp() {
  if (counter3 > countDatas.length - 1) {
    counter3 = 0;
  }
  if (counter4 == 0) {
    startFadeIn();
  }
  var firstLineCount = document.getElementById("countFirstLine");
  var countNumbs = document.getElementById("numCount");
  var lastLineCount = document.getElementById("countLastLine");
  firstLineCount.innerHTML = countDatas[counter3].firstLine;
  lastLineCount.innerHTML = countDatas[counter3].lastLine;
  countNumbs.innerHTML = counter4;
  counter4++;
  if (counter4 > countDatas[counter3].numData - 1) {
    if (counter4 > countDatas[counter3].numData + 200) {
      startFadeOut();
    }
    if (counter4 > countDatas[counter3].numData + 299) {
      counter3++;
      counter4 = 0;
      firstLineCount.innerHTML = "";
      lastLineCount.innerHTML = "";
      countNumbs.innerHTML = "";
    } else {
      countNumbs.innerHTML = countDatas[counter3].numData;
    }
  }
}
function startFadeIn() {
  document.getElementById("numbsWrap").style.animationName = "fadeIn";
  document.getElementById("numbsWrap").style.animationDuration = "1s";
}
function startFadeOut() {
  document.getElementById("numbsWrap").style.animationName = "fadeOut";
  document.getElementById("numbsWrap").style.animationDuration = "2s";
}
var counter1 = 0;
var quotes = [
  {
    oneQuote:
      "Employees of the Agency Headline have excellent client approach, proactive thinking and find the best models of communication, respecting deadlines and never losing patience.",
    oneQuoteAutor: "LJUDMILA JEVTIĆ, OTP BANK SERBIA",
  },
  {
    oneQuote:
      "It is a pleasure to work with people who are dedicated to their work and who, due to personal traits, make your work responsibilities a pleasure.",
    oneQuoteAutor: "ANĐELINA KUZMANOVIĆ, KNAUF INSULATION BALKANS",
  },
  {
    oneQuote:
      "After working with number of agencies, D-Kit bought us with their directness, creativity, and great understanding for all our demands. They are always there to help us in the right way and turn our wishes into reality.",
    oneQuoteAutor: "MONIKA MILINKOVIĆ, FARMALOGIST MARKETING",
  },
  {
    oneQuote:
      "It is a rarity in this days and also a great pleasure when you have the opportunity to work with professional, smart, hard-working people and those who know their job well.",
    oneQuoteAutor: "AIDA ĐEDOVIĆ, EDITOR, PRVA TELEVISION",
  },
  {
    oneQuote:
      "What Tesla is in science. What Messi is in football. What Madonna is in music. What Đokovic is in tennis. That is agency Headline in communication business.",
    oneQuoteAutor: "SLOBODAN ŠARENAC, RADIO TELEVISION OF SERBIA",
  },
  {
    oneQuote:
      "Committed, resourceful, helpful... and very important for us in journalism - accurate and precise in arrangements.",
    oneQuoteAutor: "JULIJANA SIMIĆ, POLITIKA DAILY",
  },
];
var myQuote = setInterval(setQuote, 5000);

function setQuote() {
  var oneQuoteText = document.getElementById("quoteText");
  var quoteAutor = document.getElementById("quoteAutor");
  if (counter1 > quotes.length - 1) {
    counter1 = 0;
  }
  oneQuoteText.innerHTML = quotes[counter1].oneQuote;
  quoteAutor.innerHTML = quotes[counter1].oneQuoteAutor;
  counter1++;
}

var slidePictures = [
  {
    picTitle: "Siemens",
    picSourse: "./fotografijeProjekata/1Siemens1.jpg",
    id: 1,
    galery: "siemens",
  },
  {
    picTitle: "Game ofThrones",
    picSourse: "./fotografijeProjekata/2IgraPrestola.jpg",
    id: 2,
    galery: "got",
  },
  {
    picTitle: "Adidas tour Derrick Rose",
    picSourse: "./fotografijeProjekata/3adidasDR.jpg",
    id: 3,
    galery: "adidas",
  },
  {
    picTitle: "Microsoft Synergy",
    picSourse: "./fotografijeProjekata/4Sinergija1.jpg",
    id: 4,
    galery: "microsoft",
  },
  {
    picTitle: "EBRD",
    picSourse: "./fotografijeProjekata/5EBRD.jpg",
    id: 5,
    galery: "ebrd",
  },
  {
    picTitle: "“Be responsible” ",
    picSourse: "./fotografijeProjekata/6Budiodgovorna.png",
    id: 6,
    galery: "odgovornost",
  },
  {
    picTitle: "Baby Food Factory",
    picSourse: "./fotografijeProjekata/7BFF.jpg",
    id: 7,
    galery: "foodFactory",
  },
  {
    picTitle: "Alkaloid",
    picSourse: "./fotografijeProjekata/8Alkaloid.JPG",
    id: 7,
    galery: "alkaloid",
  },
  {
    picTitle: "WTE Group",
    picSourse: "./fotografijeProjekata/9wte.jpg",
    id: 7,
    galery: "wte",
  },
  {
    picTitle: "METRO Cash & Carry",
    picSourse: "./fotografijeProjekata/10metro1.jpg",
    id: 7,
    galery: "metro",
  },
];
document.getElementById("leftArrow").addEventListener("click", goLeft);
document.getElementById("rightArrow").addEventListener("click", goRight);
var counter2 = 0;
var carouselTimeout;
function goRight() {
  clearTimeout(carouselTimeout);
  if (counter2 > slidePictures.length - 1) {
    counter2 = 0;
  }
  var slideWrap = document.getElementById("slideWrap");
  slideWrap.innerHTML = "";

  var picT1 = document.createElement("h2");
  picT1.setAttribute("class", "picTitle");
  slideWrap.appendChild(picT1);
  var picT2 = document.createElement("h2");
  picT2.setAttribute("class", "picTitle");
  slideWrap.appendChild(picT2);
  var picT3 = document.createElement("h2");
  picT3.setAttribute("class", "picTitle");
  slideWrap.appendChild(picT3);
  var picT4 = document.createElement("h2");
  picT4.setAttribute("class", "picTitle");
  slideWrap.appendChild(picT4);
  var picT5 = document.createElement("h2");
  picT5.setAttribute("class", "lastPicTitle");
  slideWrap.appendChild(picT5);

  var firstSlide = document.createElement("div");
  firstSlide.setAttribute("class", "oneSliderDiv");
  var firstPic = document.createElement("div");
  firstPic.setAttribute("class", "firstPicDiv");
  firstSlide.appendChild(firstPic);

  var secondSlide = document.createElement("div");
  secondSlide.setAttribute("class", "oneSliderDiv");
  var secondPic = document.createElement("div");
  secondPic.setAttribute("class", "secondPicDiv");
  secondSlide.appendChild(secondPic);

  var thirdSlide = document.createElement("div");
  thirdSlide.setAttribute("class", "oneSliderDiv");
  var thirdPic = document.createElement("div");
  thirdPic.setAttribute("class", "thirdPicDiv");
  thirdSlide.appendChild(thirdPic);

  var fourthSlide = document.createElement("div");
  fourthSlide.setAttribute("class", "oneSliderDiv");
  var fourthPic = document.createElement("div");
  fourthPic.setAttribute("class", "fourthPicDiv");
  fourthSlide.appendChild(fourthPic);

  var fifthSlide = document.createElement("div");
  fifthSlide.setAttribute("class", "oneSliderDiv");
  var lastPic = document.createElement("div");
  lastPic.setAttribute("class", "lastPicDiv");
  fifthSlide.appendChild(lastPic);

  slideWrap.appendChild(firstSlide);
  slideWrap.appendChild(secondSlide);
  slideWrap.appendChild(thirdSlide);
  slideWrap.appendChild(fourthSlide);
  slideWrap.appendChild(fifthSlide);

  firstPic.style.backgroundImage =
    "url(" + slidePictures[counter2].picSourse + ")";
  firstPic.addEventListener(
    "click",
    bigPopUpGalery.bind(null, slidePictures[counter2].galery)
  );

  secondPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 1)].picSourse + ")";
  secondPic.addEventListener(
    "click",
    bigPopUpGalery.bind(null, slidePictures[findCountRight(counter2, 1)].galery)
  );

  thirdPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 2)].picSourse + ")";
  thirdPic.addEventListener(
    "click",
    bigPopUpGalery.bind(null, slidePictures[findCountRight(counter2, 2)].galery)
  );

  fourthPic.style.backgroundImage =
    "url(" + slidePictures[findCountRight(counter2, 3)].picSourse + ")";
  fourthPic.addEventListener(
    "click",
    bigPopUpGalery.bind(null, slidePictures[findCountRight(counter2, 3)].galery)
  );

  lastPic.style.backgroundImage =
    "linear-gradient( to right, transparent, white), url(" +
    slidePictures[findCountRight(counter2, 4)].picSourse +
    ")";
  lastPic.addEventListener(
    "click",
    bigPopUpGalery.bind(null, slidePictures[findCountRight(counter2, 4)].galery)
  );

  picT1.innerHTML = slidePictures[counter2].picTitle;
  picT2.innerHTML = slidePictures[findCountRight(counter2, 1)].picTitle;
  picT3.innerHTML = slidePictures[findCountRight(counter2, 2)].picTitle;
  picT4.innerHTML = slidePictures[findCountRight(counter2, 3)].picTitle;
  counter2++;
  carouselTimeout = setTimeout(goRight, 5000);
}

goRight();
function findCountRight(xn, yn) {
  var z = xn + yn;
  if (z > slidePictures.length - 1) {
    z = z - slidePictures.length;
  }
  return z;
}
function goLeft() {
  counter2 -= 2;
  if (counter2 < 0) {
    counter2 = slidePictures.length - 1;
  }
  goRight();
}

function bigPopUpGalery(galeryName) {
  var bigPicture = document.getElementById("bigPic");
  bigPicture.style.display = "block";
  showNextPic(galeryName, 0);
}

function showNextPic(galeryName, index) {
  if (index > galeryPics[galeryName][1].length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = galeryPics[galeryName][1].length - 1;
  }
  var bigPicture = document.getElementById("bigPic");
  bigPicture.innerHTML = "";
  var picWrap = document.createElement("div");
  picWrap.setAttribute("class", "bigPicWrap");
  picWrap.style.display = "block";
  picWrap.style.backgroundImage =
    "url(" + galeryPics[galeryName][1][index] + ")";
  var closeSpan = document.createElement("span");
  closeSpan.setAttribute("class", "close");
  closeSpan.innerHTML = "&times;";
  picWrap.appendChild(closeSpan);
  var leftAr = document.createElement("div");
  leftAr.setAttribute("class", "slideArrowLeft");
  leftAr.innerHTML = "‹";
  var rightAr = document.createElement("div");
  rightAr.setAttribute("class", "slideArrowRight");
  rightAr.innerHTML = "›";
  var galeryText = document.createElement("div");
  galeryText.setAttribute("class", "galeryText");
  galeryText.innerHTML = galeryPics[galeryName][0];
  bigPicture.appendChild(galeryText);
  bigPicture.appendChild(leftAr);
  bigPicture.appendChild(picWrap);
  bigPicture.appendChild(rightAr);

  leftAr.addEventListener("click", function () {
    index--;
    showNextPic(galeryName, index);
  });
  rightAr.addEventListener("click", function () {
    index++;
    showNextPic(galeryName, index);
  });
  closeSpan.addEventListener("click", function () {
    bigPicture.style.display = "none";
  });
}

var galeryPics = {
  siemens: [
    ["Communication support for the 125th anniversary of Siemens in Serbia"],
    [
      "./fotografijeProjekata/1Siemens1.jpg",
      "./fotografijeProjekata/1Siemens2.jpg",
      "./fotografijeProjekata/1Siemens3.jpg",
      "./fotografijeProjekata/1Siemens4.jpg",
      "./fotografijeProjekata/1Siemens5.jpg",
    ],
  ],
  got: [
    [
      "Event organizing the announcement of the new season of the Game of Thrones series",
    ],
    ["./fotografijeProjekata/2IgraPrestola.jpg"],
  ],
  adidas: [
    [
      "Communication support on the Adidas D. Rose tour and the arrival of NBA star Derrick Rose in Serbia",
    ],
    ["./fotografijeProjekata/3adidasDR.jpg"],
  ],
  microsoft: [
    [
      "Communication support for Microsoft Synergy's largest IT and business conference (2017, 2018, 2019)",
    ],
    [
      "./fotografijeProjekata/4Sinergija1.jpg",
      "./fotografijeProjekata/4Sinergija17.jpg",
    ],
  ],
  ebrd: [
    [
      "Communication support to the EBRD Regional Conference, Consumer Rules Summit",
    ],
    ["./fotografijeProjekata/5EBRD.jpg"],
  ],
  odgovornost: [
    [
      "Integrated “Be responsible” communication campaign to raise awareness about prevention of cervical cancer",
    ],
    ["./fotografijeProjekata/6Budiodgovorna.png"],
  ],
  foodFactory: [
    ["Communication support for the opening of the Baby Food Factory"],
    ["./fotografijeProjekata/7BFF.jpg"],
  ],
  alkaloid: [
    [
      "Communication support for the introduction of a new addiction treatment for Alkaloid Skopje",
    ],
    ["./fotografijeProjekata/8Alkaloid.JPG"],
  ],
  wte: [
    [
      "Communication support for the construction of a water treatment plant for WTE Group",
    ],
    ["./fotografijeProjekata/9wte.jpg"],
  ],
  metro: [
    [
      "Support in promoting METRO Own Business Day 2019 - Gastro Party event at METRO Cash & Carry Center in Zemun. METRO Own Business Day is a project designed to provide practical and free support to freelancers, with the aim of encouraging and helping their promotion and greater visibility, which will help them grow their business.",
    ],
    [
      "./fotografijeProjekata/10metro1.jpg",
      "./fotografijeProjekata/10metro2.jpg",
      "./fotografijeProjekata/10metro3.jpg",
      "./fotografijeProjekata/10metro4.jpg",
      "./fotografijeProjekata/10metro5.jpg",
      "./fotografijeProjekata/10metro6.jpg",
    ],
  ],
};

document.getElementById("burgerMenu").addEventListener("click", showMenu);
function showMenu() {
  var mainH = document.getElementById("mainHeader");
  var tabs = document.getElementById("tabs");
  if (mainH.style.display == "none") {
    mainH.style.display = "block";
    tabs.style.display = "grid";
    document.getElementById("linkNaslovna").addEventListener("click", hideTabs);
    document.getElementById("linkONama").addEventListener("click", hideTabs);
    document.getElementById("linkUsluge").addEventListener("click", hideTabs);
    document.getElementById("linkKlijenti").addEventListener("click", hideTabs);
    document.getElementById("linkKontakt").addEventListener("click", hideTabs);
  } else {
    mainH.style.display = "none";
    tabs.style.display = "none";
  }
}
function hideTabs() {
  showMenu();
}
window.addEventListener("resize", screenWidthChange);
function screenWidthChange(event) {
  event.preventDefault();
  if (screen.width > 460) {
    document.getElementById("mainHeader").style.display = "block";
    document.getElementById("tabs").style.display = "grid";
  } else {
    document.getElementById("mainHeader").style.display = "none";
    document.getElementById("tabs").style.display = "none";
  }
}
