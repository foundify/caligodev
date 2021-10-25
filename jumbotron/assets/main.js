(function () {
  'use strict'
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
      }
    
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  $(function () {
    $('.requires-validation').find('input,select,textarea').on('focusout', function () {
        $(this).removeClass('is-valid is-invalid')
               .addClass(this.checkValidity() ? 'is-valid' : 'is-invalid');
    });
  });

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};

$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
      $(".open").toggleClass("hidden");
      $(".open").toggleClass("visible");
      $(".close").toggleClass("visible");
      $(".close").toggleClass("hidden");
  });
});

$("#step1btn").on("click", function() {
  $("#step2content").collapse('show');
  $("#step1content").collapse('hide');
});
$("#step1back").on("click", function() {
  $("#step2content").collapse('hide');
  $("#step1content").collapse('show');
});
$("#step2btn").on("click", function() {
  $("#step3content").collapse('show');
  $("#step2content").collapse('hide');
});
$("#step2back").on("click", function() {
  $("#step3content").collapse('hide');
  $("#step2content").collapse('show');
});

$('#startProject').on('hide.bs.collapse', function() {
  return false;
});

document.getElementById("industry").selectedIndex = -1;
document.getElementById("budget").selectedIndex = -1;

$(function(){
  $('input[type="url"]').on('blur', function(){
    var string = $(this).val();
    if (!string.match(/^https?:/) && string.length) {
      string = "http://" + string;
       $(this).val(string)
    }
  });
});