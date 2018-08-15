const list = (data)=>{
    let results="";
console.log(results);

let restaurants = Object.values(data);
// console.log(restaurants);
for(i = 0; i < restaurants.length; i++){
    let rest = restaurants[i];
    
    for(r of rest){
    let ubications = (r);

    //  console.log(ubications.img);
    
    results += `<div class="modal-body">
    <div class="card">
    <div class ="ubications">
    <img class="responsive-img" src="${ubications.img}">
                    </div>
    </div>
    </div>
    </div> `;
   result.innerHTML= results;        
    }
    
}
 
}




// // detonar el evento del modal
// btnNext = document.getElementById('open');



// const activemodal = () => { 

// btnNext.addEventlistener('click', e =>{
//     console.log(e);
// });
// }
// activemodal();


console.log("hol");
