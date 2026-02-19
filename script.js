document.getElementById('instagram').addEventListener('click', function(){
  window.open("https://www.instagram.com", "_blank");
});

document.getElementById('linkedin').addEventListener('click', function(){
  window.open("https://www.linkedin.com", "_blank");
});

document.getElementById('youtube').addEventListener('click', function(){
  window.open("https://www.youtube.com", "_blank");
});

document.getElementById('tiktok').addEventListener('click', function(){
  window.open("https://www.tiktok.com", "_blank");
});

document.getElementById('porto').addEventListener('click', function(){
  window.open("https://www.porto.com", "_blank");
});

const btn = document.querySelectorAll("button");
btn.forEach(function(btn){
    btn.addEventListener('mouseover', function(){
        btn.style.backgroundColor = "#3862af";
    });

    btn.addEventListener('mouseout', function(){
        btn.style.backgroundColor = "#4071cd";
    });
});