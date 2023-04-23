var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card" style="width: 18rem; background-image: linear-gradient(to right, yellow, black);">
  <div class="card-body">
    <h5 class="card-title" style="background-color:black; color:white; text-align:center;">${data1[i].name}</h5>
    <img src="${data1[i].flag}" class="card-img-top" alt="...">
    <p class="card-text" style="color:white; text-align:center;">Capital: ${data1[i].capital} <br> population: ${data1[i].population}
    <br>Capital Code: ${data1[i].alpha3Code}</p>
    <button type="button" class="btn btn-outline-dark" style="color:white; margin-left:45px;">Click for weather</button>
    
  </div>
</div>
        
        
        </div>
        `
    }
    document.body.append(container);
}

//`<div class="col-md-4">
  //      <div class="card border-warning mb-3" style="max-width: 18rem;">
    //    <img src="${data1[i].flag}" class="card-img-top" alt="...">
 // <div class="card-body text-warning">
 // <h5 class="header">${data1[i].name}</h5>
  //  <h5 class="card-title"> ${data1[i].name}</h5>
  //  <p class="card-text">Capital: ${data1[i].capital} <br> population: ${data1[i].population}</p>
 // </div>

        
        
   //     </div>
    //    `