//js

var link = window.location.href;

//menu

var bars = document.querySelector(".bars");

var menu = document.querySelector(".menu");

bars.addEventListener("click", (event) => {
    const fa = bars.querySelector(".fa");

    menu.classList.toggle("show");

    fa.classList.toggle("fa-times");
});

//sayari

const wrapper = document.querySelector(".wrapper");

const sayari = document.querySelectorAll(".sayari");

sayari.forEach((s) => {
    const ogHtml = s.innerHTML;

    const newContent = "<div class='sayari-wrapper'><p class='sayari-text'>" + ogHtml + "<br></br><span class='s-author'></span></p><div class='s-share'><span class='fab fa-whatsapp s-wa'></span><span class='fab fa-twitter s-tw'></span><span class='fab fa-telegram s-tl'></span><span class='fab fa-linkedin s-ln'></span><span class='c-stext'><i class='fa fa-clipboard'></i> Copy</span><span class='s-capture'><i class='fa fa-image'></i> Snap</span></div><span class='s-alert'></span></div>";

    s.innerHTML = newContent;

    const phrases = document.querySelectorAll(".sayari-wrapper .sayari-text");

    for (const phrase of phrases) {
        const words = phrase.innerHTML.split(" ");

        words[2] = `<span>${words[2]}</span>`;

        words[3] = `<span>${words[3]}</span>`;

        words[4] = `<span>${words[4]}</span>`;

        words[5] = `<span>${words[5]}</span>`;
         
        
        
        // this would return the second word

        phrase.innerHTML = words.join(" ");
    }
});

//share

var sbtns = document.querySelectorAll(".s-share span");

sbtns.forEach((sbtn) => {
    sbtn.addEventListener("click", (x) => {
        //text to copy

        const t = x.target.parentElement.parentElement;

        const txttocopy = t.querySelector(".sayari-text").innerText;

        if (x.target.matches(".s-wa")) {
            var url = "https://api.whatsapp.com/send?text=" + txttocopy;

            window.open(url, "_blank");
        } else if (x.target.matches(".s-ln")) {
            var url = "http://www.linkedin.com/shareArticle?mini=true&url=" + txttocopy + " - " + link;

            window.open(url, "_blank");
        } else if (x.target.matches(".s-tw")) {
            var url = "https://www.twitter.com/intent/tweet?url=" + link + "&text=" + txttocopy;

            window.open(url, "_blank");
        } else if (x.target.matches(".s-tl")) {
            var url = "https://telegram.me/share/url?url=" + link + "&text=" + txttocopy;

            window.open(url, "_blank");
        } else {
            preventDefault();
        }
    });
});

const elems = document.querySelectorAll(".c-stext");

elems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        // Get the text from the element that contains the text you want to copy

        const txtholder = elem.parentElement.parentElement;

        var copiedtxt = txtholder.querySelector(".sayari-text").innerText;

        var ta = document.createElement("textarea");

        navigator.clipboard.writeText(copiedtxt);

        //alerts

        const alertSpan = txtholder.querySelector(".s-alert");
        alertSpan.innerHTML = " Great! Copied";
        alertSpan.classList.add("show");

        setTimeout(() => {
            alertSpan.classList.remove("show");
        }, 3000);
    });
});

document.querySelector(".tr-head").addEventListener("click", (itm) => {
    document.querySelector(".lang-all").classList.toggle("show");
});

document.querySelectorAll(".s-author").forEach((x) => {
    x.innerHTML = "- SayariHub";
});

var date = new Date();

var year = date.getFullYear();

document.querySelector(".year").innerText = year;

document.querySelectorAll(".s-capture").forEach((click) => {
    click.addEventListener("click", capture);
});

function capture(x) {
    
    const xparent = this.parentElement.parentElement;
    const alertSnap = xparent.querySelector(".s-alert");
    alertSnap.classList.add("show");
    this.style.background="#dc00da";
    setTimeout(() => {
            alertSnap.classList.remove("show");
        }, 5000);
    
    alertSnap.innerHTML = " Wait! Downloading ";

    const captureElement = xparent.querySelector(".sayari-text");

    html2canvas(captureElement)
        .then((canvas) => {
            canvas.style.display = "none";

            document.body.appendChild(canvas);

            return canvas;
        })

        .then((canvas) => {
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

            const a = document.createElement("a");

            a.setAttribute("download", "my-image.png");

            a.setAttribute("href", image);

            a.click();

            canvas.remove();
        });
}

//loadmore

const hiddenItems = [...document.querySelectorAll(".sayari")];

const loadmore = document.querySelector(".showmore");

hiddenItems.splice(0, 14).forEach((elem) => {
    elem.style.display = "block";

    setTimeout(() => {
        elem.classList.add("show");
    }, 1000);
});

loadmore.addEventListener("click", loadImage);

function loadImage(e) {
    e.preventDefault();

    hiddenItems.splice(0, 14).forEach((elem) => {
        elem.style.display = "block";

        setTimeout(() => {
            elem.classList.add("show");
        }, 500);

        window.scrollTo(0, wrapper.scrollHeight);
    });

    if (hiddenItems.length == 0) {
        loadmore.innerText = "No More Quotes ";

        loadmore.disabled = true;

        loadmore.style.opacity = "0.7";
    }
}

document.querySelector(".joinus").addEventListener("click", (e) => {
    const txt = document.querySelector(".emailjoin");

    const smessage = document.querySelector(".sayari-sucess-msg");

    document.querySelector(".sayari-sucess-msg").style.display = "block";
    if (txt.value === "") {
        smessage.innerText = " Enter your email...";
    } else {
        smessage.innerHTML = txt.value + " success. ";
    }

    txt.value = "";
});

function openCard() {
    const ov = document.createElement("div");

    ov.className = "ov";

    ov.addEventListener("click", function () {
        document.body.removeChild(ov);

        g.classList.remove("show");
    });

    const g = document.querySelector(".gt-card");

    g.classList.add("show");

    document.body.appendChild(ov);
}
