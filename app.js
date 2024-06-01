const div = document.querySelector('#cards-render')

axios('https://fakestoreapi.com/products')
.then((res)=>{
console.log(res.data);
res.data.map((item)=>{
    div.innerHTML+=`
    <div class="card" style="width: 18rem;">
    <img width="200px" height="250px" src="${item.image}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-text">${item.price}<b>$</b></h6>
      <a href="#" class="btn btn-primary">Order now</a>
    </div>
  </div>
    
    `
})
})
.catch((err)=>{
    console.log(err.data);
})
