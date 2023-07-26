const btnTopo = document.getElementById("topo");

btnTopo.addEventListener("click", () => {
    window.scrollTo(0,0)
})

document.addEventListener("scroll", ocutar);

function ocutar (){
    if(window.scrollY > 10) {
        btnTopo.style.display = "flex";
        
        

    }else {
        btnTopo.style.display = "none";
        
    }
}

ocutar();

