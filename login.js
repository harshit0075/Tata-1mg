var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2500); // Change image every 5 seconds
}


/* successful signin */
document.getElementById("login-go").addEventListener("click",submit)
      var userStack = JSON.parse(localStorage.getItem("userDataBase")) || []
      
      function submit(event) {
          event.preventDefault();
          var mbl = document.querySelector("#mblnum").value;

          console.log(mbl)
  
          var userdata = {
              mblNums : mbl,
          };

          userStack.push(userdata);

         localStorage.setItem("userDataBase",JSON.stringify(userStack))
         loggo()
      }



/* successful lo0gin */
      document.getElementById("login-success").addEventListener("click",lgin);

      var regduser = JSON.parse(localStorage.getItem("userDataBase"));
   
      function lgin(event){
          event.preventDefault();
          var mobile = document.querySelector("#mblnum").value ;
   
          for(var i=0;i<regduser.length;i++){
              console.log(regduser[i].password)
              
              if(regduser[i].mblNums != mbl){
                  alert("Login Failed")
                }else{
                    logsuccess()
                }
          }
      }



document.querySelector("#loginopen").addEventListener("click",open)
document.querySelector(".icon").addEventListener("click",close)

document.querySelector("#signupopen").addEventListener("click",signopen)
document.querySelector("#icon").addEventListener("click",signclose)

document.querySelector("#login-success").addEventListener("click",logsuccess)


function close(){
    document.querySelector(".login-page").style.display = "none";
    console.log("close")
}
function open(){
    document.querySelector(".login-page").style.display = "flex";
    console.log("click")
}
function signopen(){
    document.querySelector(".signup-page").style.display = "flex";
    console.log("signclick")
}
function signclose(){
    document.querySelector(".signup-page").style.display = "none";
    console.log("close")
}
function logsuccess(){
    alert("logged in successfully")
    close()
}
function loggo(){
    document.querySelector(".signup-page").style.display = "none";
    document.querySelector(".login-page").style.display = "flex";
}