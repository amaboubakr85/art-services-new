let play = document.getElementById('play')
let plays = document.querySelectorAll('.plays')
if (plays.length > 0) {
  plays.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.parentElement.style.opacity = '0'
      item.parentElement.style.zIndex = '0'
      let playV = item.parentElement.nextElementSibling

      playV.play()
      playV.controls = true
    })
  })
}

let prices = document.querySelectorAll('.prices .links ul li')
prices.forEach((item) => {
  item.addEventListener('click', function (e) {
    // item.sibl.classList.remove('active')
    // item.classList.add('active')
    ;[...item.parentElement.children].forEach((sib) => sib.classList.remove('active'))
    item.classList.add('active')
    let cat = item.getAttribute('data-class')
    console.log(cat)
    let videos = document.querySelector('.videos-price')
    let photos = document.querySelector('.photos-price')
    if (cat == '.videos-price') {
      photos.style.display = 'none'
      videos.style.display = 'block'
    } else {
      photos.style.display = 'block'
      videos.style.display = 'none'
    }
  })
})

let albums = document.querySelectorAll('.albums .links ul li')
if (albums) {
  albums.forEach((item) => {
    item.addEventListener('click', function () {
      ;[...item.parentElement.children].forEach((sib) => sib.classList.remove('active'))
      item.classList.add('active')
      let cat = item.getAttribute('data-class')
      console.log(cat)
      let allImages = document.querySelectorAll('.albums .albums-images')
      allImages.forEach((item) => {
        item.classList.add('d-none')
      })
      document.querySelector(`.albums .albums-images${cat}`).classList.remove('d-none')
      document.querySelector(`.albums .albums-images${cat}`).classList.add('d-grid')
    })
  })
}

let allImages = document.querySelectorAll('.albums .albums-images')
allImages.forEach((item) => {
  item.classList.add('d-none')
})
document.querySelector(`.albums .albums-images.foods`).classList.remove('d-none')
document.querySelector(`.albums .albums-images.foods`).classList.add('d-grid')

$(document).ready(function () {
  $('.albums-images').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Artlanguage Agency</small>'
      },
    },
  })
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  animateOut: 'fadeOut',
  animateIn: 'flipInX',
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 450,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: false,
      loop: true,
    },
  },
})
