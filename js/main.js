//up
let up = document.querySelector(".up")

window.onscroll = function()
{
  if(this.scrollY >= 900)
  {
    up.classList.add("show")
  }
  else
  {
    up.classList.remove("show")
  }
}
up.onclick = function()
{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// get slider items
let sliderTest = document.querySelector('.landing .box .seconed-image');

let prev = document.getElementById("prev")
let next = document.getElementById("next")

next.onclick = function()
{
  sliderTest.classList.add("active");
  next.classList.add("disabled")
  prev.classList.remove("disabled")
}
prev.onclick = function()
{
  sliderTest.classList.remove("active")
  prev.classList.add("disabled")
  next.classList.remove("disabled")
}

/*Prop type*/
let feat = document.querySelector(".feat")
let sellBtn = document.querySelector(".sell-btn")
let rentBtn = document.querySelector(".rent-btn")
//type
let sell = document.querySelectorAll(".sell")
let rent = document.querySelectorAll(".rent")
//fun
feat.onclick = function()
{
    feat.classList.add("active")
    sell.forEach(span => {
        span.classList.remove("disabled")
    })
    rent.forEach(span => {
        span.classList.remove("disabled")
    })
    sellBtn.classList.remove("active");
    rentBtn.classList.remove("active");
}
sellBtn.onclick = function()
{
    sellBtn.classList.add("active");
    sell.forEach(span => {
        span.classList.remove("disabled")
    })
    rent.forEach(span => {
        span.classList.add("disabled")
    })
    feat.classList.remove("active");
    rentBtn.classList.remove("active")
}
rentBtn.onclick = function()
{
  rentBtn.classList.add("active");
  rent.forEach(span => {
      span.classList.remove("disabled")
  })
  sell.forEach(span => {
      span.classList.add("disabled")
  })
  feat.classList.remove("active");
  sellBtn.classList.remove("active")
}