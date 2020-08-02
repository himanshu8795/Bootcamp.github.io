/*document.getElementById(Heading);
document.getElementById(List);

console.log(List)
console.log(List.innerHTML);
console.log(List.textContent); */

const listItems =document.querySelectorAll(".list-item");
console.log(listItems);

const Heading = document.getElementById("Heading")
Heading.style.color="green";
Heading.style.backgroundColor="black"; 
Heading.className="changeFT";


const lis =document.querySelectorAll("li");
lis[0].style.backgroundColor="green";
lis[1].style.backgroundColor="green";
lis[2].style.backgroundColor="green";
console.log(lis);

//lis[1].style.backgroundColor="green";
//for(let i=0;i<=lis.length;i++)
//{
  //  lis[i].style.backgroundColor="green";
//}


//lis[0].style.cssText="background-color:teal;color:black;font-size:25px";

const newHeading=document.querySelector(".newHeading");
const btn=document.querySelector(".btn");

btn.onclick = () => {
    console.log("Clicked!");
}

btn.onmouseover =() =>{
    newHeading.style.cssText="background-color:black;color:green";
};

btn.onmouseout =() =>{
    newHeading.style.cssText="background-color:transparent;color:black";
};


