async function submitProductDetails(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var price = document.getElementById('price').value;
  var quantity = document.getElementById('quantity').value;
  var product = {
    name: name,
    description: description,
    price: price,
    quantity: quantity
  };
  await createProduct(product);
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("https://crudcrud.com/api/bde66249772544f7b7f1611a95ef3bdf/inventoryDetails");
    console.log(response.data);
    for (const product of response.data) {
      var id = product._id;
      productOnScreen(product, id);
    }
  } catch (error) {
    console.log(error);
  }
});

async function createProduct(product) {
  try {
    const response = await axios.post("https://crudcrud.com/api/bde66249772544f7b7f1611a95ef3bdf/inventoryDetails", product);
    console.log(response);
    var id = response.data._id;
    productOnScreen(product, id);
  } catch (err) {
    console.log(err);
  }
}

async function deleteProduct(id) {
  try {
    const response = await axios.delete(`https://crudcrud.com/api/bde66249772544f7b7f1611a95ef3bdf/inventoryDetails/${id}`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

async function updateQuantity(product, id, value) {
  console.log(id);
  var number = parseInt(product.quantity) + value;
  temp = {
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: number
  };
  console.log(number);
  console.log(temp.quantity);
  await deleteProduct(id);
  await createProduct(temp);
}

function productOnScreen(product, id) {
  var list = document.getElementById("list");
  const item = document.createElement('li');
  item.className = "item";
  item.textContent = product.name + "      " + product.description + "       " + product.price + "       " + product.quantity + "     ";

  const deleteButton = document.createElement('button');
  const buy1Button = document.createElement('button');
  buy1Button.className='button';
  const buy2Button = document.createElement('button');
  buy2Button.className='button';
  const buy3Button = document.createElement('button');
  buy3Button.className='button';

  deleteButton.textContent = "delete";
  deleteButton.onclick = async () => {
    console.log(id);
    await deleteProduct(id);
    list.removeChild(item);
  };

  buy1Button.textContent = "Buy 1";
  buy1Button.onclick = async () => {
    if (parseInt(product.quantity) > 0) {
      item.remove();
      await updateQuantity(product, id, -1);
    }
  };

  buy2Button.textContent = "Buy 2";
  buy2Button.onclick = async () => {
    if (parseInt(product.quantity) > 0) {
      item.remove();
      await updateQuantity(product, id, -2);
    }
  };

  buy3Button.textContent = "Buy 3";
  buy3Button.onclick = async () => {
    if (parseInt(product.quantity) > 0) {
      item.remove();
      await updateQuantity(product, id, -3);
    }
  };

  item.appendChild(deleteButton);
  item.appendChild(buy1Button);
  item.appendChild(buy2Button);
  item.appendChild(buy3Button);
  list.appendChild(item);
  list.insertBefore(item, list.firstChild);
}
