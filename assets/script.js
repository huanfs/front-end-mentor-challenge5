let nav = document.querySelector("nav");
let link = document.querySelector("#nav-links");
let wid = window.innerWidth;
let option = 1;//iniciando em 1 todo número impar fecha o menu e todo par abre
function Menu(){
    if(wid<=800){
        let img = document.createElement("img");
        img.src="./images/icon-hamburger.svg";
        nav.appendChild(img);
        img.id="imgMenu";
        img.setAttribute("class","open");
        img.addEventListener("click",Switch);
    }
}
function Switch(){
    option++//adiciona mais 1 decidindo se abre ou se fecha
    console.log(option);
    if(option%2==0){
        link.style.opacity="1";
    }
    else{
        link.style.opacity="0";
    }
}


