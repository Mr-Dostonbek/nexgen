// Loading

const loading = document.querySelector('.loading');
const count = document.querySelector('.count');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(Loading, 30);

function Loading() {
  load++;

  if(load > 100) {
    clearInterval(int);
    loading.style.display = "none";
  }
  count.innerHTML = load;
}

// Loading end

// navbar start


window.addEventListener("scroll", function(){
  const header = document.querySelector('.wrapper');
  if(window.scrollY > 10) {
    header.classList.add("sticky");
  } else{
    header.classList.remove("sticky");
  }
});


// news section slider

new Glide(".images",{
  type: 'carousel',
  perView: 3,
  gap: 40,
  breakpoints: {
    1200:{
      perView: 3
    },
    1022:{
      perView: 2
    },
    767:{
      perView: 1
    }
  }
}).mount();