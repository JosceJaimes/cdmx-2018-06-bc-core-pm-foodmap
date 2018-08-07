// window.load;
// {
//     fetch(url)
//         .then(res => res.json)
//         .then(data => {
//             maps(data);
//         });
// }
alert("estoy vivo")
    btnopen = document.getElementById('open');


    btnopen.addEventListener('click', e =>{

        btnopen.classList.add('button')
        console.log(btnopen.classList.add('button'));
        
        btnopen.classList.toggle("modal");

    })

let btnsaludar = document.createElement('button')



// var foo = function(){
//   var button = document.createElement('button');
//   button.innerHTML = 'click me';
//   button.onclick = function(){
//     alert('here be dragons');return false;
//   };
//   // where do we want to have the button to appear?
//   // you can append it to another element just by doing something like
//   // document.getElementById('foobutton').appendChild(button);
//   document.body.appendChild(button);
// };