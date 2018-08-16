// const container = document.getElementById('restaurant'); 
let btnsearch = document.getElementById('open');

const list = (data)=>{
  let results = '';
  console.log(results);

  let restaurants = Object.values(data);
  // console.log(restaurants);
  for (i = 0; i < restaurants.length; i++) {
    let rest = restaurants[i];
    
    for (r of rest) {
      let ubications = (r);

      //  console.log(ubications.name);
    
      results += `<div class="modal-body">
    <div class="card">
    <div class ="ubications">
    <p>Nombre :${ubications.name}</p>
    <p>Tipo :${ubications.type}</p>
    <p>Direccion :${ubications.adress}</p>
    <p>Telefono :${ubications.phone}</p>
    <p>Horario :${ubications.hour}</p>
    <img class="responsive-img" src="${ubications.img}">
                    </div>
    </div>
                    </div>
    </div> `;
      result.innerHTML = results;        
    }
  }
};
// // filtrado de restaurantes
btnsearch.addEventListener('click', e =>{    
  window.filterRestaurants = (restaurants, search) => {
      console.log('hol');
      
    if (typeof search === 'number') {
      const filterRestaurants = [];
    }
    restaurants.forEach(restaurant => {
      if (restaurant === search) {
        filterRestaurants.push(restaurant);
      };
    });
  };
});


// let image = addEventListener('img-modal').innerHtml 

// // detonar el evento del modal
// btnNext = document.getElementById('open');


// const activemodal = () => { 

// btnNext.addEventlistener('click', e =>{
//     console.log(e);
// });
// }
// activemodal();


