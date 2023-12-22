class website{
  constructor(){
    this.header = document.querySelector("header");
    this.data();
  }
  data(){
    data.forEach((value) =>{
      switch(value.name){
        case "header":
          this.buttonReadmore();
          this.headervalue(value);
          this.previewvalue(value);
          break;
        case "about":
          this.about_infoValue(value);
          break;
        case "details":
          this.title_details(value);
          this.icons_details(value);
          break;
        case "featured-projects":
          this.title_featured_projects(value);
          this.wrapper__featured_projects(value);
          break;
        case "services":
          this.title_services(value);
          this.icons_services(value);
          this.progress_wrapper(value);
          break;
      }
    });
  }
  progress_wrapper(value){
    let divparent = document.querySelector(".services-progress-wrapper");
    value.progress_bar.forEach((el) =>{
      let div = document.createElement("div");
      let secdiv = document.createElement("div");
      div.appendChild(secdiv);
      let textdiv = document.createElement("div");
      textdiv.textContent = el.percent;
      let titlediv = document.createElement("div");
      titlediv.textContent = el.title;
      div.appendChild(titlediv);
      secdiv.appendChild(textdiv);
      divparent.appendChild(div);
    });
    
  }
  iconsServices_text(el,value){
    if(el.classList.contains("focus")){
      value.icons_text.forEach((elicon) =>{
        if(elicon.index  ==parseInt(el.classList[0])){
          if(document.querySelector(".removeServices") && document.querySelector(".removeServicesh3")){
            document.querySelector(".removeServices").remove();
            document.querySelector(".removeServicesh3").remove();
          }
          let divparent = document.querySelector(".icons-wrapper-text");
          let div = document.createElement("div");
          let h3 = document.createElement("h3");
          h3.className = "removeServicesh3";
          h3.textContent = elicon.h3;
          let p = document.createElement("p");
          p.textContent = elicon.p;
          let p_second = document.createElement("p");
          p_second.textContent = elicon.p_second;
          div.className = "removeServices";
          div.appendChild(p);
          div.appendChild(p_second);
          divparent.appendChild(h3);
          divparent.appendChild(div);
        }
      });
  }
  }
  icons_ServicesClick(value){
    value.childNodes[0].classList.add("focus"); 
    
    value.childNodes.forEach((el)=>{
      this.iconsServices_text(el,this.valueServices);
      el.addEventListener("click", ()=>{
        if(window.getComputedStyle(el).backgroundColor == "rgb(141, 153, 174)"){
          value.childNodes.forEach((child) =>{child.classList.remove("focus")});
          el.classList.add("focus")
          this.iconsServices_text(el,this.valueServices);
        }else{
          this.iconsServices_text(el,this.valueServices);
        }
        
      });
    });
  }
  icons_services(value){
    this.valueServices = value;
    let divparent = document.querySelector(".icons-wrapper");
    let i = 0;
    value.links.forEach((el) =>{
      let div = document.createElement("div");
      div.classList.add(i);
      i++
      let img = document.createElement("img");
      img.setAttribute("src", el.link);
      div.appendChild(img);
      divparent.appendChild(div);
    });
    this.icons_ServicesClick(divparent);
  }
  title_services(value){
    let divparent = document.querySelector(".title-services");
    let h2 = document.createElement("h2");
    h2.textContent = value.h2;
    let p = document.createElement("p");
    p.textContent = value.p;
    divparent.appendChild(h2);
    divparent.appendChild(p);
  }
  wrapper__featured_projects(value){
    let divparent = document.querySelector(".wrapper");
    value.links.forEach((el) =>{
      let div = document.createElement("div");
      div.style.backgroundImage = el.link;
      let h3 = document.createElement("h3");
      if(el.h3){
        h3.textContent = el.h3;
        div.appendChild(h3);
        divparent.appendChild(div);
      }else{
        let p = document.createElement("p");
        p.textContent = el.p;
        div.appendChild(p);
        let button = document.createElement("button");
        button.textContent = "Submit Now";
        div.appendChild(button);
        divparent.appendChild(div);

      }

    });
  }
  title_featured_projects(value){
    let divparent = document.querySelector(".title-featured");
    let h2 = document.createElement("h2");
    h2.textContent = value.h2;
    let p = document.createElement("p");
    p.textContent = value.p;
    divparent.appendChild(h2);
    divparent.appendChild(p);

  }
  icons_text(el,value){
    if(el.classList.contains("focus")){
      value.icons_text.forEach((elicon) =>{
        if(elicon.index  ==parseInt(el.classList[0])){
          if(document.querySelector(".remove") && document.querySelector(".removeh3")){
            document.querySelector(".remove").remove();
            document.querySelector(".removeh3").remove();
          }
          let divparent = document.querySelector(".icons-text");
          let div = document.createElement("div");
          let h3 = document.createElement("h3");
          h3.className = "removeh3";
          h3.textContent = elicon.h3;
          let p = document.createElement("p");
          p.textContent = elicon.p;
          let p_second = document.createElement("p");
          p_second.textContent = elicon.p_second;
          div.className = "remove";
          div.appendChild(p);
          div.appendChild(p_second);
          divparent.appendChild(h3);
          divparent.appendChild(div);
        }
      });
  }
}
  iconsClick(value){
    value.childNodes[0].classList.add("focus"); 
    
    value.childNodes.forEach((el)=>{
      this.icons_text(el,this.value);
      el.addEventListener("click", ()=>{
        if(!el.classList.contains("focus")){
          value.childNodes.forEach((child) =>{child.classList.remove("focus")});
          el.classList.add("focus")
          this.icons_text(el,this.value);
        }else{
          this.icons_text(el,this.value);
        }
        
      });
    });
  }
  icons_details(value){
    this.value = value;
    let divparent = document.querySelector(".icons-details");
    let i = 0;
    value.icons.forEach((el) =>{
      let div = document.createElement("div");
      div.classList.add(i);
      i++
      let img = document.createElement("img");
      img.setAttribute("src", el.icon);
      div.appendChild(img);
      divparent.appendChild(div);
    });
    this.iconsClick(divparent);

  }
  title_details(value){
    let div = document.querySelector(".details");
    let titlediv = document.querySelector(".title-details");
    let h2 = document.createElement("h2");
    h2.textContent = value.h2;
    titlediv.appendChild(h2);
    let p = document.createElement("p");
    p.textContent = value.p;
    titlediv.appendChild(p);

  }
  about_infoValue(value){
    let divimg = document.querySelector(".img-about");
    let img = document.createElement("img");
    img.setAttribute("src", value.imgUrl);
    divimg.appendChild(img);
    let divparent = document.querySelector(".about-info");
    let h3 = document.createElement("h3");
    h3.textContent = value.h3;
    let div = document.createElement("div");
    div.className = "text-about";
    let p = document.createElement("p");
    p.textContent = value.p;
    let p_hidden = document.createElement("p");
    p_hidden.textContent = value.p_hidden;
    p_hidden.classList.add("hidden-text","p-about");
    
    div.appendChild(p);
    div.appendChild(p_hidden);
    divparent.prepend(div);
    divparent.prepend(h3);
    
  }
  buttonReadmore(){
    let readmore = document.querySelector(".about-readmore");
    readmore.addEventListener('click', () => {
      let text = document.querySelector(".p-about");
      if (text.classList.contains('hidden-text')) {
        readmore.textContent = "Close";
        text.style.display = 'block';
        setTimeout(function () {
          text.style.opacity = '1';
        }, 10); 
        text.classList.remove('hidden-text');
      } else {
        
        text.style.opacity = '0';
        text.addEventListener('transitionend', function () {
          text.style.display = 'none';
        }, {once: true});
        text.classList.add('hidden-text');
        readmore.textContent = "Read more";
      }
  });
  }
  previewvalue(value){
    let div = document.createElement("div");
    div.className = "preview";
    let h1  = document.createElement("h1");
    h1.textContent = value.h1;
    let p = document.createElement("p");
    p.textContent = value.p;
    div.appendChild(h1);
    div.appendChild(p);
    let section = document.querySelector(".preview-background");
    section.appendChild(div);
  }
  headervalue(value){
        let img = document.createElement("img");
        let nav = document.createElement("nav");
        img.setAttribute("src",value.logourl);
        this.header.appendChild(img);
        value.links.forEach((el) =>{
          let a = document.createElement("a");
          a.textContent = el.value;
          a.setAttribute("href", el.href);
          nav.appendChild(a);
        }); 
        this.header.appendChild(nav);
  }

}
let init = new website();
let scroll = 0;
window.onscroll = () =>{
  let header = document.querySelector("header");
  let top = window.pageYOffset;
  if (scroll > top) {
    header.className = "visible";
  } else if (scroll < top) {
    header.className = "hidden";
  }
  scroll = top;
};
