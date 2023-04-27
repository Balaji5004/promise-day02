var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.className="row";
container.append(row);


async function getdata(){
    var res=await fetch("https://restcountries.com/v2/all");
    var res1=await res.json();
     
    for(var i=0;i<res1.length;i++){
        try{
            console.log(`latitude:${res1[i].latlng[0]} Longitude:${res1[i].latlng[1]}`);
            weatherdata(res1[i].latlng[0],res1[i].latlng[1]);
            row.innerHTML+=
            `<div class="col-lg-4">
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">${res1[i].name}</div>
           <img src="${res1[i].flag}" class="card-img-top" alt="...">
           <div class="card-body text-secondary">
            <p class="card-text">Capital: ${res1[i].capital}</p>
            <p class="card-text">Region: ${res1[i].region}</p>
            <p class="card-text">Country code: ${res1[i].alpha3Code}</p>
            <p id=demo><button class="btn btn-outline-dark" style="color:white; margin-left:45px;" onclick="myfuctions()">Click for wheather </button></p>
            
      </div>
      
            </div>
            `
        
        }
        catch(error){
            console.log(error);
        }
    }
    document.body.append(container);
}

async function weatherdata(lat,lon){
    try{
        if(lon==undefined) throw new Error("invalid coordinates");
        console.log(lat,lon);
        let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c32c1b443533ac728770dac88834c09a`);
        let res3=await res2.json();
        console.log(`${res3.main.temp}`);        
    function myfuctions(){
        document.getElementById("demo").innerHTML="${res3.main.temp}";

    }
    document.body.append(demo);


    } catch(error){
        console.log(error)
    }
    
    
} 
getdata();



 
