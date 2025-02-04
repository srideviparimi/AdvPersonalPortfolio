//nav bar is visible only if the user scrolls upward and will not show it on downward scroll
let prevScrollPosition=window.pageYOffset;
window.addEventListener("scroll",function(){
    const currentScrollPosition=window.pageYOffset;
    if(prevScrollPosition>currentScrollPosition){
        document.querySelector('.navbar').classList.add("fixed-top");//user scrolled up
    }
    else{
       document.querySelector('.navbar').classList.remove("fixed-top");//user scrolled down
    }
    prevScrollPosition=currentScrollPosition;
});
// this is the background for the home section
tsParticles.load("tsparticles1",{
        particles:{
            move:{
                enable:true
            },
            links:{
                color:"#fffa77",
                enable:true,
                opacity:0.5,
                width:1
            },
            shape:{
                type:"triangle",
                
            }
        }
    });
      //this is the background for the skills section
    tsParticles.load("tsparticles2",{
        particles:{
            move:{
                enable:true,
                speed: 3,
                direction: "top",
            },
            shape:{
                type:"circle"
            },
            color:{
               value: ["#355070","#6d597a","#b56576"]
            }
        }
    })
   
    tsParticles.load({
        id: "tsparticles3",
        options: {
          particles: {
            shape: {
              type: "square", // starting from v2, this require the square shape script
            },
          },
          preset: "fireworks",
        },
      });
    
// this is for the projects div in which the div kind of grows into a full size upon scrolling
     var aDiv=document.getElementById("animatedDiv");
     function changeWidth() 
{
    var scrollVal = window.pageYOffset;
    var scrollSlow  = (scrollVal / 5);
    
    //Changing CSS Width
    aDiv.style.width= Math.min(Math.max(scrollSlow, 20), 100) + "%";
}

window.addEventListener('scroll', function() 
{
    requestAnimationFrame(changeWidth);
}, false);
// we are adding the onclick events for the demos to open them in a new tab rather than the same one

const rebelDemo=()=>{
    window.open("https://srideviparimi.github.io/Rebel/","_blank")
}
const newsDemo=()=>{
    window.open("https://news-fetching-application.netlify.app/","_blank")
}
const visionDemo=()=>{
    window.open("https://vision-electronics.netlify.app/","_blank")
}
/*document.getElementById("moreProjects").addEventListener("click",()=>{
    console.log("clicked")
    window.location.href="projects.html";
})
 const more=()=>{
    window.open("./projects.html","_blank");
}*/
//event listener for the form successful submit
const formElement=document.getElementById("contactform");
formElement.addEventListener("submit",resettingForm());
function resettingForm(e){
   
    formElement.reset();
    //e.preventDefault();
    


}

