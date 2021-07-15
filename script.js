const jokes=document.getElementById('joke');
const jokebtn=document.querySelector('#jokebtn');
const generatejokes=()=>{
    const setHeaders={
        headers:{
            Accept:"Application/json",
        }
    }

fetch('https://icanhazdadjoke.com',setHeaders)
.then((res)=>res.json())
.then((data)=>{
    jokes.innerHTML=data.joke;

}).catch((error)=>{
    console.log(error);
})

}
jokebtn.addEventListener('click',generatejokes);
generatejokes();