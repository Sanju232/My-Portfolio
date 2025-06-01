// For auto Close Navbar 
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true
        });
      }
    });
  });

//  for Toasts 
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
} 

// Profile Name change 
let value=["Web Developer","UI/UX Designer","Graphic Designer"];
let i=0;
setInterval(function(){
  document.querySelector(".name").innerHTML=value[i];
  i++;
  if(i==value.length){
    i=0;
  }
},1000);


// for dark mode 
const modeChange = document.querySelector('.mode-change');
const body = document.querySelector('body');
modeChange.addEventListener('click', () => {
  modeChange.classList.toggle('fa-moon');
  modeChange.classList.toggle('fa-sun');
  body.classList.toggle('dark-mode');  
});

modeChange.addEventListener('click', () => {
 document.querySelectorAll(".target").forEach(function(element) {
  element.classList.toggle("ttw");
});
});  