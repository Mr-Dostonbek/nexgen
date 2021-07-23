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
