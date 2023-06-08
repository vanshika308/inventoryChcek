function submitProductDetails(event){
    event.preventDefault();
    var productName = document.getElementById("name").value;
    var description= document.getElementById("description").value;
    var productPrice = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var product={
       name: productName,
       description: description,
       price: productPrice,
       quantity: quantity
    };
    axios.post("https://crudcrud.com/api/51ff3ef6500d4bbaa2665e3bbcc5f97a/inventoryDetails", product)
    .then((response) => {
      console.log(response.data);
      showProductOnScreen(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function showProductOnScreen(product){
    var productList = document.getElementById('list');
    const item = document.createElement('li');
    item.setAttribute('class','element');
    item.textContent=product.name+"  "+product.description+"  "+product.price+"  "+product.quantity;
    productList.appendChild(item);

    const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'inline-block'; 

  const buy1button = document.createElement('button');
  buy1button.textContent = "Buy1";
  buttonContainer.appendChild(buy1button);

  const buy2button = document.createElement('button');
  buy2button.textContent = "Buy2";
  buttonContainer.appendChild(buy2button);

  const buy3button = document.createElement('button');
  buy3button.textContent = "Buy3";
  buttonContainer.appendChild(buy3button);

  productList.appendChild(buttonContainer);

  buy1button.onclick=()=>{
    const temp={
       name: product.name,
       description: product.description,
       price: product.price,
       quantity: product.quantity-1
    };
    axios.delete("https://crudcrud.com/api/51ff3ef6500d4bbaa2665e3bbcc5f97a/inventoryDetails/"+product._id)
     .then((response)=>{
        console.log(response);
        productList.removeChild(item);
        productList.removeChild(buttonContainer);
     })
     .catch((error)=>{
        console.log(error);
     })
     showProductOnScreen(temp);
  }

  buy2button.onclick=()=>{
    const temp={
       name: product.name,
       description: product.description,
       price: product.price,
       quantity: product.quantity-2
    };
    axios.delete("https://crudcrud.com/api/51ff3ef6500d4bbaa2665e3bbcc5f97a/inventoryDetails/"+product._id)
     .then((response)=>{
        console.log(response);
        productList.removeChild(item);
        productList.removeChild(buttonContainer);
     })
     .catch((error)=>{
        console.log(error);
     })
     showProductOnScreen(temp);
  }


  buy3button.onclick=()=>{
    const temp={
       name: product.name,
       description: product.description,
       price: product.price,
       quantity: product.quantity-3
    };
    axios.delete("https://crudcrud.com/api/51ff3ef6500d4bbaa2665e3bbcc5f97a/inventoryDetails/"+product._id)
     .then((response)=>{
        console.log(response);
        productList.removeChild(item);
        productList.removeChild(buttonContainer);
     })
     .catch((error)=>{
        console.log(error);
     })
     showProductOnScreen(temp);
  }
}