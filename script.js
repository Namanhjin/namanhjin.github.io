"use strict";
let mailInput = document.querySelector(".ent-mail");
let btnMailSubmit = document.querySelector(".submit");
let information = document.querySelector(".info-details");
let mailForm = document.querySelector(".mail-form");
let mailText = document.querySelector(".mail-text");
let form = document.querySelector("form");

let exp = document.querySelector(".exp");
let expContent = document.querySelector(".exp-content");
let expViewButton = document.querySelector(".exp-view-button");
let expViewMore = document.querySelector(".exp-view-more");

let edu = document.querySelector(".education");
let eduViewButton = document.querySelector(".edu-view-button");
let eduViewMore = document.querySelector(".edu-view-more");
let eduContent = document.querySelector(".edu-content");

let act = document.querySelector(".activities");
let actViewButton = document.querySelector(".act-view-button");
let actViewMore = document.querySelector(".act-view-more");
let actContent = document.querySelector(".act-content");

let hobby = document.querySelector(".hobby");
let hobbyViewButton = document.querySelector(".hobby-view-button");
let hobbyViewMore = document.querySelector(".hobby-view-more");
let hobbyContent = document.querySelector(".hb-content");

let lang = document.querySelector(".language");
let langViewButton = document.querySelector(".lang-view-button");
let langViewMore = document.querySelector(".lang-view-more");
let langContent = document.querySelector(".lang-content");

let skill = document.querySelector(".skill");
let skillViewMore = document.querySelector(".skill-view-more");
let skillViewButton = document.querySelector(".sk-view-button");
let skillContent = document.querySelector(".sk-content");

let hDownward = document.querySelector(".h-downward");
let eDownward = document.querySelector(".e-downward");

let submitMail = function () {
  mailForm.classList.add("hidden");
  information.classList.remove("hidden");
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (mailInput.value === "namanhhoaianh@gmail.com") {
    submitMail();
  } else {
    mailText.textContent = "Email không hợp lệ, vui lòng nhập lại";
    mailText.classList.remove("grey");
    mailText.classList.add("red");
  }
});

//exp
exp.addEventListener("mouseover", function (e) {
  expViewButton.setAttribute(
    "style",
    "background-color:#f4f5ba; color:black; display:flex;"
  );
  eDownward.classList.remove("hidden");
  exp.classList.add("b-bordered");
});
exp.addEventListener("mouseout", function (e) {
  expViewButton.setAttribute(
    "style",
    "background-color:white; color:white; display:none;"
  );
  eDownward.classList.add("hidden");
  exp.classList.remove("b-bordered");
});

expViewButton.addEventListener("click", function (e) {
  if (expContent.classList.contains("hidden")) {
    expContent.classList.remove("hidden");
    expViewButton.classList.add("hidden");
    expViewButton.textContent = "🔼 VIEW LESS";
  } else {
    expContent.classList.add("hidden");
    expViewButton.classList.remove("hidden");
    console.log(expViewButton.textContent);
    expViewButton.textContent = "🔽 VIEW MORE";
  }
});

//edu
edu.addEventListener("mouseover", function (e) {
  eduViewMore.classList.remove("hidden");
  edu.classList.add("b-bordered");
});
edu.addEventListener("mouseout", function (e) {
  eduViewMore.classList.add("hidden");
  edu.classList.remove("b-bordered");
});

eduViewButton.addEventListener("click", function (e) {
  if (eduContent.classList.contains("hidden")) {
    eduContent.classList.remove("hidden");
    eduViewButton.classList.add("hidden");
    eduViewButton.textContent = "🔼 VIEW LESS";
  } else {
    eduContent.classList.add("hidden");
    eduViewButton.classList.remove("hidden");
    eduViewButton.textContent = "🔽 VIEW MORE";
  }
});

//act
act.addEventListener("mouseover", function (e) {
  actViewMore.classList.remove("hidden");
  act.classList.add("b-bordered");
});
act.addEventListener("mouseout", function (e) {
  actViewMore.classList.add("hidden");
  act.classList.remove("b-bordered");
});

actViewButton.addEventListener("click", function (e) {
  if (actContent.classList.contains("hidden")) {
    actContent.classList.remove("hidden");
    actViewButton.classList.add("hidden");
    actViewButton.textContent = "🔼 VIEW LESS";
  } else {
    actContent.classList.add("hidden");
    actViewButton.classList.remove("hidden");
    actViewButton.textContent = "🔽 VIEW MORE";
  }
});

//hobby
hobby.addEventListener("mouseover", function (e) {
  hobbyViewButton.setAttribute(
    "style",
    "background-color:#f4f5ba; color:black; display:flex"
  );
  hDownward.classList.remove("hidden");
  hobby.classList.add("b-bordered");
});
hobby.addEventListener("mouseout", function (e) {
  hobbyViewButton.setAttribute(
    "style",
    "background-color:white; color:white; display:none"
  );
  hDownward.classList.add("hidden");
  hobby.classList.remove("b-bordered");
});

hobbyViewButton.addEventListener("click", function (e) {
  if (hobbyContent.classList.contains("hidden")) {
    hobbyContent.classList.remove("hidden");
    hobbyViewButton.classList.add("hidden");
    hobbyViewButton.textContent = "🔼 VIEW LESS";
  } else {
    hobbyContent.classList.add("hidden");
    hobbyViewButton.classList.remove("hidden");
    hobbyViewButton.textContent = "🔽 VIEW MORE";
  }
});

//lang
lang.addEventListener("mouseover", function (e) {
  langViewMore.classList.remove("hidden");
  lang.classList.add("b-bordered");
});
lang.addEventListener("mouseout", function (e) {
  langViewMore.classList.add("hidden");
  lang.classList.remove("b-bordered");
});

langViewButton.addEventListener("click", function (e) {
  if (langContent.classList.contains("hidden")) {
    langContent.classList.remove("hidden");
    langViewButton.classList.add("hidden");
    langViewButton.textContent = "🔼 VIEW LESS";
  } else {
    langContent.classList.add("hidden");
    langViewButton.classList.remove("hidden");
    langViewButton.textContent = "🔽 VIEW MORE";
  }
});

//skill
skill.addEventListener("mouseover", function (e) {
  skillViewMore.classList.remove("hidden");
  skill.classList.add("b-bordered");
});
skill.addEventListener("mouseout", function (e) {
  skillViewMore.classList.add("hidden");
  skill.classList.remove("b-bordered");
});

skillViewButton.addEventListener("click", function (e) {
  if (skillContent.classList.contains("hidden")) {
    skillContent.classList.remove("hidden");
    skillViewButton.classList.add("hidden");
    skillViewButton.textContent = "🔼 VIEW LESS";
  } else {
    skillContent.classList.add("hidden");
    skillViewButton.classList.remove("hidden");
    skillViewButton.textContent = "🔽 VIEW MORE";
  }
});
