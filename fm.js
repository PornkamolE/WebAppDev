
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  let cart = [];
    let totalPrice = 0;

    function addToCart(productName, price) {
        let existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({name: productName, quantity: 1, price: price});
        }
        updateCart();
        
    }

    function removeFromCart(productName) {
        let index = cart.findIndex(item => item.name === productName);
        if (index !== -1) {
            if (cart[index].quantity === 1) {
                cart.splice(index, 1);
            } else {
                cart[index].quantity--;
            }
        }
        updateCart();
        
    }

    function updateCart() {
        let cartContent = document.getElementById("cartContent");
        let totalPriceElement = document.getElementById("totalPrice");
        cartContent.innerHTML = "";
        totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.quantity * item.price;
            cartContent.innerHTML += `<p>${item.name} x ${item.quantity} <button onclick="removeFromCart('${item.name}')">-</button></p>`;
        });
        totalPriceElement.innerText = totalPrice.toFixed(2);
        
    }

    window.onload = function() {
        let currentCount = localStorage.getItem('updateCart');
        document.getElementById('updateCart').textContent = currentCount || 0;
      };

    
