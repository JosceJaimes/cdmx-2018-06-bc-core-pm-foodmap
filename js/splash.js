splash = ()=>{

    var preload = document.getElementById('preload');
    var loading = 0;
    var id = setInterval(frame, 64);

    frame = () => {
        if ( loading == 100){
            clearInterval(id);
            window.open("views/index.html", "-self");
        } else{
            loading = loading +1;
            if (loading == 90) {
                preload.style.animation = "fadeout is esase";
            }
        }
    }
}




// window.onload=timeout;
// timeout = () =>{
//     window.setTimeout("redirect()",2000 )};
//     redirect (){
//         window.location = splash.html
//         return;
//     };

//      onload = "timeout()"