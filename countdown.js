const someThing = localStorage.getItem("dateEvent");
const accessKey = "OLh1AYwVFFDShMqn1ZsrTjS9byZ5LsPrmuu5mSeDZp0";


function countdown() {
    const someThingDate = new Date(someThing);
    const now = new Date();

    const Totalseconds = (someThingDate - now)/ 1000;

    const days = Math.floor(Totalseconds/3600/24);
    const hours = Math.floor(Totalseconds/3600) % 24;
    const mins = Math.floor(Totalseconds/60) % 60;
    const seconds = Math.floor(Totalseconds)%60;

    
    

    console.log(days, hours);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = seconds;

}

countdown();
setInterval(countdown, 1000);

const nameEVENT = localStorage.getItem("NAME");
let keyword = "";

async function searchImage(){
    keyword = nameEVENT;
    const url = "https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${accessKey}";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

};



