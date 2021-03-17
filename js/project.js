document.addEventListener("DOMContentLoaded",() => {
const tabs = document.querySelectorAll(".nav-items"),
      tabsParent = document.querySelector(".nav"),
     tabsContent = document.querySelectorAll(".tab-content");


   

function hideT() {
    tabsContent.forEach(item => {
        item.style.display = "none";
    });

    tabs.forEach(item => {
item.classList.remove("nav-item_active");
    });

};


function showT(e=0) {
    tabsContent[e].style.display = "block";
    tabs[e].classList.add("nav-item_active");
    }
  
 


hideT();
 showT();

  tabsParent.addEventListener("click", (e) => {
   const target = e.target
// event.preventDefault()
// console.log(target)
   if(target && target.classList.contains("nav-item")){
    tabs.forEach((tabItem,i) => {
        if(target==tabItem){
            hideT();
            showT(i)
        }
     });
   }
 });


//  function myFunction(){
//    alert("alindi qaqa");
//  };

//  myFunction();



// tabs.forEach(item => {
//   item.addEventListener("click", (event) => {
//     const target = event.target


//     tabs.forEach((item, i) => {

//         if (target == item) {
//             hide()
//             show(i)
//         }
//     })


// })
// })


// function openCity(cityName,elmnt,color) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   document.getElementById(cityName).style.display = "block";
//   elmnt.style.backgroundColor = color;

// }
// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
 
// blogcards

class blogCard{
    constructor(src,alt,title,description,parentSelector) {
this.src = src;
this.alt = alt;
this.title = title;
this.description = description;
this.parent = document.querySelector(parentSelector);

}


render(){
const element = document.createElement("div");

element.className = 'col-sm-4'

element.innerHTML =`
<div class="single-blogs mb-30">
  <div class="blog-img">
    <img src=${this.src} alt="${this.alt}">
  </div>
  <div class="blogs-cap">
    <div class="date-info">
      <span class="blg_top">${this.title}</span> 
      <p class="blg_top2">Nov 30, 2020</p>
     
    </div>
    <h4>
      <a href="">${this.description}</a>
    </h4>
    <a href="" id="read" >Read more</a>

  </div>
</div>
   
`;

this.parent.append(element);
}
}

// const b = new blogCard();
// b.render();
// biz bunu belə yazdıqda gərək hər dəfə bir dəyişənə təyin edək ona görə altda ki daha mənalı və dinamikdir

   new blogCard(
    "images/blog1.webp",
    "blog1",
     'Health',
    'Amazing Places To Visit In Summer' ,
    " #dsaw #wasd  "
   ).render()

   new blogCard(
    "images/blog2.webp",
    "blog2",
     'Checkup',
    'Developing Creativithout  Visual' ,
    " #dsaw #wasd  "
   ).render()

   new blogCard(
    "images/blog3.webp",
    "blog3",
     'Operation',
    'Winter Photography Tips from Glenn' ,
    " #dsaw #wasd  "
   ).render()
// src="images/blog3.webp"


 });

 