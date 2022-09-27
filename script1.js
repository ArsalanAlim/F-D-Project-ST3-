var result;
var id=0;
const getData=async()=>{

    
    const data=await fetch("https://dummyjson.com/products");
     result= await data.json();
   console.log(result.products);
    show(result);
   
}


getData();

const ids=new Set();           
function show(result){

    var data2="";

result.products.map((value)=>{
  console.log("ddd")
    data2+=` <div class="card d-inline-block col-lg-3"   id=${id}  style="width: 18rem";>
        <img class="card-img-top" src=${value.thumbnail} width="100%" height="200">
        <div class="card-body"><h5 class="card-title">${value.title}</h5>
          <p class="card-text">${value.description}</p>
          <p class="card-price " ><b>$ </b>${value.price}</p>

         <button  class="btn btn-success" onclick="addToCart(${value.id})"> Add to cart</button>
        </div>
        
      </div>`;
   
     id++;

})




document.getElementById("d").innerHTML=data2;


}

let title=[]; 
const input=document.querySelector("#searchlist"); 
const inpelement=document.querySelector("#inp"); 
 
const data2 = async () => { 
  const data = await fetch("https://dummyjson.com/products"); 
 const  result = await data.json(); 
  title=result.products.map((x)=>x.title); 
  loadData(title,input) 
  console.log(title); 
}; 
 
 
function loadData(data,element){ 
  if(data){ 
    element.innerHTML = ""; 
    let innerElement=""; 
    data.forEach((item)=>{ 
      innerElement+=`<li>${item}</li>`; 
    }) 
    element.innerHTML=innerElement; 
  } 
} 
 
 
function filterData(data,searchText){ 
  return data.filter((x)=>x.toLowerCase().includes(searchText.toLowerCase())); 
 
} 

inpelement.addEventListener("input",function(){ 
  const filterdata= filterData(title,inpelement.value); 
  console.log("hello gusy");
  loadData(filterdata,input); 
})
data2(); 


// function hidediv()
// {
//   $('#delsearch').show();
// }


fetch("https://dummyjson.com/products")
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            localStorage.setItem("products",JSON.stringify(data.products));
            if(!localStorage.getItem("cart")){
                localStorage.setItem("cart","[]");
            }
        })

        let pro = JSON.parse(localStorage.getItem("products"));
        let cart = JSON.parse(localStorage.getItem("cart"));
        console.log(pro);
        // cart = [];
        var i = 0;
        function addToCart(productId){
            console.log(cart);
            console.log(productId)
            let prod = pro.find(function(prod){
                
                return prod.id == productId;
            })
            console.log(prod);

            if(cart.length == 0){
                cart.push(prod);
                i += 1;
            }else{
                let res = cart.find(element => element.id == productId);
                if(res == undefined){
                    cart.push(prod);
                    i += 1;
                }
            }
            console.log(cart)
            localStorage.setItem("cart",JSON.stringify(cart));}