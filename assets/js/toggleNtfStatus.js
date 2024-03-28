function toggleNtfStatus(element){
    if(element.classList.contains("unreaded")){
        element.classList.toggle("unreaded");
        //Change Background color:
        element.style.backgroundColor = "hsl(36, 100%, 99%)";
        //Hide Red Dot:
        element.querySelector(".ntfDot").classList.toggle("hidden");
        //Reduce counter number:
        document.querySelector(".ntf__Counter").textContent = (+document.querySelector(".ntf__Counter").textContent) - 1;
    }
}

function markAllAsRead(){
    for(const element of document.querySelectorAll(".unreaded")){
        if(element.classList.contains("unreaded")){
            element.classList.toggle("unreaded");
            //Change Background color:
            element.style.backgroundColor = "hsl(36, 100%, 99%)";
            //Hide Red Dot:
            element.querySelector(".ntfDot").classList.toggle("hidden");
        }
    }
    
    //Reduce counter number:
    document.querySelector(".ntf__Counter").textContent = 0;
}