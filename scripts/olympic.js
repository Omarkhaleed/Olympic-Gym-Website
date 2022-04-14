


// slide in nav header


$(function () {
	'use strict';
    /* jquery method */
$(".nav a").on("click",function(){
    var position= $(this).parent().position();
    var width= $(this).parent().position();
    $(".nav a ").removeClass("is-active");
    $(this).addClass("is-active");
    $(".nav .slide").css({
        opacity:1,
        left:+position.left,
        width:width,
    });
});


});

// Automatic way for slide image in home section
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("image");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//  Manual way  for slide image in about section //
var slideeeIndex = 1;
showDivs(slideeeIndex);

function plusDivs(n) {
  showDivs(slideeeIndex += n);
}

function showDivs(n) {
 
  var x = document.getElementsByClassName("image");
  if (n > x.length) {slideeeIndex = 1}
  if (n < 1) {slideeeIndex = x.length} ;
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideeeIndex-1].style.display = "block";
}



/* to show query form there are two ways by jquery and js*/


$(document).ready(function() {
  $("#btnQuery").click(function() {
    $("#query").toggle();
  });
});


// Another way by JS 

// function myFunction() {
//   var element = document.getElementById("query");
//   element.classList.toggle("mystyle");
// }


$(document).ready(function() {
  $("#sh").click(function() {
    $("#demo").toggle();
  });
});

// $(document).ready(function() {
//   $("#sub").click(function() {
//     $("#sh").toggle();
//   });
// });
$(document).ready(function() {
$("#sub").click(function(){
 
  $('#sh').removeClass('hide');
  
});
});
// // Get Achievments
const getAchievments=document.querySelectorAll('.counter');
//const speed=1;

getAchievments.forEach( i =>{

  const updateCount=()=>{

  const target =   +i.getAttribute('data-target');
  const value =   +i.innerHTML;
  const increament=target/target;

   if(value<target){
   i.innerHTML= value+increament;
   setTimeout(updateCount,1);
  }
  else {
     i.innerHTML=target;
  }

  }
updateCount();

});
///////////////////////// The Part of Api ////////////////////
AOS.init({
  duration: 1200,
})
// show query form data that get by api

function traineeData() {

  var id=document.getElementById("YourID").value;
  var  phone=document.getElementById("phoneNumber").value;
  var url='http://localhost:60523/api/values/data?id='+id+'&phoneNumber='+phone;
  var jsobj,scrobj;
  var xmlHttp = new XMLHttpRequest();

  document.getElementById("sh").addEventListener("click",function(){
   
    xmlHttp.onreadystatechange=function(){
      if(xmlHttp.readyState==4){
        if(xmlHttp.status==200){
           jsobj=xmlHttp.responseText;
           scrobj=JSON.parse(jsobj);
           //console.log(scrobj);
           document.getElementById("show").innerHTML =
           `
         
           <h2 class="title"> Welcome</h2>
           <h4 class="subtitle"> ${ scrobj["FirstName"]+" "+scrobj["SecondName"]}</h4>
           <table class="table">

           <tbody>
           <tr>
           <th scope="row">Classes</th>
           <td></td>
           <td>${scrobj["Classes"]}</td>
         </tr>
         <tr>
         <th scope="row">Record</th>
         <td></td>
         <td>${scrobj["Record"]} points</td>
       </tr>
       <tr>
       <th scope="row">Sport</th>
       <td></td>
       <td>${scrobj["Sport"]}</td>
     </tr>
             <tr>
               <th scope="row">Plan</th>
               <td></td>
               <td>${scrobj["Plan"]}</td>
             </tr>
             <tr>
             <th scope="row">Date</th>
             <td></td>
             <td>${scrobj["DateOfRegister"]}</td>
           </tr>
           <tr>
           <th scope="row">Coach</th>
           <td></td>
           <td>${scrobj["Coach"]}</td>
         </tr>
           </tbody>
         </table>
           `   
        }
        else{
          document.getElementById("show").innerHTML =
         `
         <div class="l"></div>
          <h2 class="title"> Sorry</h2>
          <h4 class="subtitle">"There is an  error"</h4>
          </ul>
          `
        }

      }
    }
    xmlHttp.open( "GET",url); // false for synchronous request
    xmlHttp.send();
  });
 
}










// function getTopTrainee() {

//   var url='http://localhost:60523/api/values/TopTrainees';
//   var jsobj,scrobj;
//   var xmlHttp = new XMLHttpRequest();

//     xmlHttp.onreadystatechange=function(){
//       if(xmlHttp.readyState==4){
//         if(xmlHttp.status==200){
//            jsobj=xmlHttp.responseText;
//            scrobj=JSON.parse(jsobj);
//            //console.log(scrobj);
//           var TopTarinee=document.getElementById("top");
//           var ss;

//           for(var i=0;i<3;i++){
//             ss=document.createElement("div");
//             ss.innerHTML=`
           
//             <div class="card TrainerCard" >
//             <div class="imgBox" >
//                    <img src="./images/Mora3.jpeg"  alt=" Trainer In Olympic Gym" class="mouse">
//                   </div>
//             <div class="contentBox">
//               <h3>${scrobj[i]["FirstName"]} ${scrobj[i]["SecondName"]}</h3>
//               <p>${scrobj[i]["Sport"]} Trainee</p>
//               <p>${scrobj[i]["Record"]} Points</p>
            
//             </div>   
//             </div>
//             </div>
//             `;
//             ss.classList.add("col-md-4");
//             TopTarinee.append(ss);
//           }
//          }
//         }
//       }
//         xmlHttp.open( "GET",url); // false for synchronous request
//         xmlHttp.send();
//   }

//   getTopTrainee();





  // function getCoaches() {

  //   var url='http://localhost:60523/api/values/GetCoaches';
  //   var jsobj,scrobj;
  //   var xmlHttp = new XMLHttpRequest();
  
  //     xmlHttp.onreadystatechange=function(){
  //       if(xmlHttp.readyState==4){
  //         if(xmlHttp.status==200){
  //            jsobj=xmlHttp.responseText;
  //            scrobj=JSON.parse(jsobj);
  //            console.log(scrobj);
  //           var Coaches=document.getElementById("coaches");
  //           var ss;
  
  //           for(var i=0;i<scrobj.length;i++){
  //             ss=document.createElement("div");
  //             ss.innerHTML=`
             
  //             <div class="card TrainerCard" >
  //             <div class="imgBox" >
  //                    <img src="./images/Mora3.jpeg"  alt=" Trainer In Olympic Gym" class="mouse">
  //                   </div>
  //             <div class="contentBox">
  //               <h3>${scrobj[i]["FirstName"]} ${scrobj[i]["SecondName"]}</h3>
  //               <p>${scrobj[i]["Sport"]} Trainer</p>

  //               <div class="socialIcons">
         
  //                  <a href="${scrobj[i]["FaceBook"]}" target="_blank" ><span class="fab fa-facebook"></span></a>
  //                  <a href="${scrobj[i]["Instagram"]}"  target="_blank"><span  class="fab fa-instagram"</span></a>
  //                  <a href="https://wa.me/+20${scrobj[i]["WhatsApp"]}" target="_blank"><span class="fab fa-whatsapp-square"</span></a>
  //                </div>
              
  //             </div>   
  //             </div>
  //             </div>
  //             `;
  //             ss.classList.add("col-md-4");
  //             Coaches.append(ss);
  //           }
  //          }
  //         }
  //       }
  //         xmlHttp.open( "GET",url); // false for synchronous request
  //         xmlHttp.send();
  //   }
  
  //   getCoaches();


















 
// About section Animation 

  // let section = document.querySelector(".About");
  // var elements = document.getElementsByClassName("wow");
  // var element = document.querySelector(".AboutIcon");


  // window.onscroll = function () {

  //   if (window.scrollY >= section.offsetTop-100) {
     
  //     for (var i = 0, len = elements.length; i < len; i++) 
  //        elements[i].classList.add('fadeIn');


  //   }
  //   else {
  //     for (var i = 0, len = elements.length; i < len; i++) 
  //     elements[i].classList.remove('fadeIn');
  //   }
     
  // };

  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {

  //     const square = entry.target.querySelector('.Facts');
  //     if (entry.isIntersecting) {
  //       square.classList.add('t-1');
  //     return; // if we added the class, exit the function
  //     }
  
  //     // We're not intersecting, so remove the class!
  //     square.classList.remove('t-1');
  //   });
  // });
  
  // observer.observe(document.querySelector('.progress'));



  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });




