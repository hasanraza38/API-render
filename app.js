const div = document.querySelector('#cards-render')

let products ='';
axios('https://fakestoreapi.com/products')
.then((res)=>{
  // console.log(res.data);
products = res.data
products.map((item)=>{

    div.innerHTML +=
  
    `
    <div class="card" style="width: 18rem;">
    <img width="200px" height="250px" src="${item.image}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-text">${item.price}<b>$</b></h6>
      <button class="btn btn-primary">order now</button>
    </div>
  </div>
    
    `
})
})
.catch((err)=>{
    console.error(err.data);
});

const allItems=()=>{

  div.innerHTML=""
  products.map((item)=>{
    div.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
    <img width="200px" height="250px" src="${item.image}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-text">${item.price}<b>$</b></h6>
      <button class="btn btn-primary">order now</button>
    </div>
  </div>
    
    `
  })

}


const itemFilter=(btn)=>{

 div.innerHTML="" 
//  console.log(btn.innerHTML);
 const filtred = products.filter(items=>items.category=== btn.innerHTML).map((item)=>{

  div.innerHTML+=`
  <div class="card" style="width: 18rem;">
    <img width="200px" height="250px" src="${item.image}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-text">${item.price}<b>$</b></h6>
      <button class="btn btn-primary">order now</button>
    </div>
  </div>`
 })


}