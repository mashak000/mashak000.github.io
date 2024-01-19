const someThing = localStorage.getItem("dateEvent");




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




const imageBox = document.getElementById("bbb");
const accessKey = "OLh1AYwVFFDShMqn1ZsrTjS9byZ5LsPrmuu5mSeDZp0";

async function getImage(){
    
    const keyword = localStorage.getItem("nameEvent");
    const url = "https://api.unsplash.com/search/photos?query="+keyword+"&client_id="+accessKey;

    const response = await fetch(url);
    const data = await response.json();
    console.log(keyword);

    let n = Math.floor(Math.random()*10);
    const result = data.results[n];
    
    
    imageBox.src = result.urls.regular;
    
   
};
getImage();

function mood() {
    const cardtext = document.getElementById("mood");
    const moodinfo = localStorage.getItem("moodEvent");
    let text = "b";
    console.log(moodinfo.value);
    

    if (moodinfo == "Happy"){
        text = "😃";
        cardtext.textContent = text.repeat(1050);
    } else if (moodinfo =="Mad"){
        text = "🤬";
        cardtext.textContent = text.repeat(1050);
    } else if (moodinfo == "Confused"){
        text = "🤔";
        cardtext.textContent = text.repeat(1050);
    } else{
        text = "🥵";
        cardtext.textContent = text.repeat(1050);
    }
    

};
mood();
