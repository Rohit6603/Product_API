const fetchData=async()=>{
    let data;
    let display = "";
    try{
        let response = await fetch("https://fakestoreapi.com/products",{method:"GET"});
        let productList = await response.json()
        for(data of productList){
            display +=`<div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12 my-3">`;
            display +=`<div class="card">`;
            display +=`<div class="card-body">`;
            display +=`<img src=${data.image} alt= ${data.title} height="100px" width="100px">`;
            display +=`<h3> ${data.title}</h3>`;
            display +=`<span>Price: ${data.price}</span></br>`;
            display +=`<span>Category :  ${data.category}</span></br>`;
            display +=`<span>Rating: ${data.rating.rate}</span></br>`;
            display +=`<span>Count : ${data.rating.count}</span></br>`;
            display +=`<p class="card-text"> ${data.description}</p>`;
            display +=`</div>`; 
            display +=`</div>`; 
            display +=`</div>`;  
            display +=`</div>`;              
        }
        document.getElementById('display').innerHTML= display;
    }
    catch(err){
        console.log("Error is : ",err)
    }   
}
fetchData();