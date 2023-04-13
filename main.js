//js 

var link = window.location.href;

//menu

var bars = document.querySelector(".bars");
var menu = document.querySelector(".menu");

bars.addEventListener("click", (event)=>{
  menu.classList.toggle("show");
})

//sayari

const sayari = document.querySelectorAll(".sayari");

sayari.forEach((s) =>{
  const ogHtml = s.innerHTML;
  
  const newContent= "<div class='sayari-wrapper'><p class='sayari-text'>"+ogHtml+"</p><div class='s-share'><span class='fa fa-whatsapp s-wa'></span><span class='fab fa-whatsapp s-wa'></span><span class='fab fa-twitter s-tw'></span><span class='fab fa-telegram s-tl'></span><span class='fab fa-linkedin s-ln'></span><span class='c-stext'>Copy</span></div><span class='s-alert'>Copied</span></div>";
  s.innerHTML = newContent;
  const phrases = document.querySelectorAll(".sayari-wrapper .sayari-text");
for (const phrase of phrases) {
  const words = phrase.innerHTML.split(' ');
  words[11] = `<span>${words[11]}</span>`; 
  words[5] = `<span>${words[5]}</span>`;
  words[6] = `<span>${words[6]}</span>`; 
  words[7] = `<span>${words[7]}</span>`;
  words[8] = `<span>${words[8]}</span>`; 
  words[9] = `<span>${words[9]}</span>`;
  words[10] = `<span>${words[10]}</span>`;
  
  // this would return the second word
  phrase.innerHTML = words.join(' ');
}
  
})






//share

var sbtns = document.querySelectorAll(".s-share span");

sbtns.forEach((sbtn)=>{
  sbtn.addEventListener("click", (x)=>{
    //text to copy
    const t = 
     x.target.parentElement.parentElement;
    const txttocopy = t.querySelector(".sayari-text").innerText;
    
    if (x.target.matches(".s-wa")){
      
        var url = "https://api.whatsapp.com/send?text="+ txttocopy;

        window.open(url, "_blank");
    
    }
   else if(x.target.matches(".s-ln")){
     var url = "http://www.linkedin.com/shareArticle?mini=true&url="+txttocopy + " - " + link;
     window.open(url, "_blank")
    }
    
    else if(x.target.matches(".s-tw")){
      var url = "https://www.twitter.com/intent/tweet?url=" + link + "&text="+txttocopy;
      window.open(url, "_blank");
     
    }
    else if(x.target.matches(".s-tl")){
      var url = "https://telegram.me/share/url?url="+link+"&text="+txttocopy;
      window.open(url, "_blank");
    }
    
    else {
      preventDefault();
    }
    
  });
});


const elems = document.querySelectorAll('.c-stext');

elems.forEach((elem) => {
  elem.addEventListener('click', (e) => {
   // Get the text from the element that contains the text you want to copy
   const copiedText = 
     e.target.parentElement.parentElement;
     
     var val = copiedText.querySelector(".sayari-text").innerText;
     
     var ta = document.createElement("textarea");
     ta.textContent = val;
     document.body.appendChild(ta);
     ta.select();
     document.execCommand("copy");
     document.body.removeChild(ta);
    //alerts
     
     const alertSpan = copiedText.querySelector(".s-alert");
     alertSpan.classList.add("show");
     
     setTimeout(()=>{
       alertSpan.classList.remove("show")
     },3000)
  })
})


