const url = 'https://api.myjson.com/bins/frzms';
window.onload = () =>{
fetch(url)
.then(res => res.json()
).then((data)=>{
list(data);  

})
.catch(error => {
    console.log('error', error);  
});
};

