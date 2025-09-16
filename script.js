let inputSearchE1 = document.querySelector(".inputSearch")


inputSearchE1.addEventListener("keydown",()=>{
    console.log(inputSearchE1)
    if(inputSearchE1.value){
        document.getElementById("crossSearch").style.display = "block"
    }
    else{
        document.getElementById("crossSearch").style.display = "none"
    }
})


