const url = 'https://api.myjson.com/bins/frzms';
// const uri = '../data/list.json'
window.onload = () =>{
fetch(url)
.then(res => res.json()
).then((data)=>{
// console.log(data);
// return data;
list(data);  
})
.catch(error => {
    console.log(error);  
});
};
// const uri = '../data/list.json';
// window.onload = ()=>{
//     fetch(uri)
//     .then(res => res.json()
//   ) .then((data)=>{
//       console.log(data);
      
//   })
// }