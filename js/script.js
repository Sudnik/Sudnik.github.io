var textInputSet = document.querySelectorAll("input, textarea");

for (var i = 0; i < textInputSet.length; i++) {
  textInputSet[i].addEventListener("blur", function(event) {
    event.target.setAttribute("value", event.target.value);
  });
}

var link = document.querySelector(".feedback-btn");

if (link) {
  var popup = document.querySelector(".feedback-popup");
  var popupMask = document.querySelector(".feedback-popup-mask");

  var close = popup.querySelector(".feedback-popup-close-btn");
  var form = popup.querySelector(".feedback-form");

  var login = popup.querySelector("[name=feedback-name-line]");
  var email = popup.querySelector("[name=feedback-email-line]");
  var message = popup.querySelector("[name=feedback-body-line]");

  if(!('undefined'==typeof(window.Storage))) {
    var storage = localStorage.getItem("login");
  }

  link.addEventListener("click", function(event) {
    event.preventDefault();

    if (storage) {
      login.value = storage;
      login.setAttribute("value", storage);
    }

    popup.classList.add("modal-content-show");
    popupMask.classList.add("modal-content-mask-show");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    popupMask.classList.remove("modal-content-mask-show");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !message.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
    else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        popupMask.classList.remove("modal-content-mask-show");
      }
    }
  });
}
