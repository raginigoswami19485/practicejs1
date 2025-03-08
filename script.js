//  let mode = document.querySelector("#com");

// let crtmode = "light";

// mode.addEventListener("click", () => {
// if (crtmode === "light"){
//     crtmode="dark";
// }
// else {
//     crtmode ="light";
// }
// console.log(crtmode);
// });

let divya = document.querySelector("#divya");
  
let crtmode = "light";

divya.addEventListener("click",()=>{
if (crtmode=== "light"){
    crtmode="dark";
    document.body.style.backgroundColor="black";
}
else {
    crtmode ="light";
    document.body.style.backgroundColor="pink";

}
console.log(crtmode);
});