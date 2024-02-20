function submitForm(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form

  // Lấy giá trị từ các trường đăng ký
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau không
  if (password !== confirmPassword) {
    alert("Mật khẩu và xác nhận mật khẩu không khớp!");
    return;
  }

  // Gửi dữ liệu đăng ký đến máy chủ hoặc xử lý theo yêu cầu của bạn
  // ở đây chúng ta chỉ hiển thị thông báo đăng ký thành công
  alert("Đăng ký thành công!");
}

// /button/

const click = document.getElementById("button-2");
const myButton = document.getElementById("button");

let check = 0;

click.addEventListener("click", function (e) {
  e.preventDefault();
  check++;
  if (check % 2 === 1) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
});

let login = document.getElementById("login");
login.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "login.html";
});
let sigup = document.getElementById("sigup");
sigup.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "sigup.html";
});

// Shopping cart
let products = [
  {
    id: 1,
    name: "Rau muống",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/13-0b69bdec-f167-4a7b-a54d-392b42ea1d21.jpg",
    price: 30000,
  },
  {
    id: 2,
    name: "Nấm kim châm",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/22-0ebe1919-23f8-423c-82dc-05bceb49649d.jpg?v=1586771656913",
    price: 15000,
  },
  {
    id: 3,
    name: "Thịt lợn",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/16-dbe6f83d-77ce-49d7-860d-617f7bfcc5e3.jpg?v=1586771621947",
    price: 300000,
  },
  {
    id: 4,
    name: "Kẹo XYLYTOL",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/6-57ff4cf1-efa5-4479-af31-e87169caeb47.jpg?v=1586771726600",
    price: 40000,
  },
  {
    id: 5,
    name: "Bia lon",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/1.jpg?v=1586546649760",
    price: 320000,
  },
  {
    id: 6,
    name: "Bánh Mì",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/3-00ccab9b-c9cb-4785-9eee-0eb88dd23e0a.jpg?v=1586546741313",
    price: 15000,
  },
  {
    id: 7,
    name: "Muối sạch",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/4-633225d0-dedd-464c-994e-a9788f154949.jpg?v=1586546779223",
    price: 8000,
  },
  {
    id: 8,
    name: "Mì Cung Đình",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/8-cffbe610-14c8-4679-bd2e-de784a3597ac.jpg?v=1586546813233",
    price: 15000,
  },
  {
    id: 9,
    name: "Cải Ngọt",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/12-548a836b-476f-46bf-9ceb-bc327aa34928.jpg?v=1586546883750",
    price: 30000,
  },
  {
    id: 10,
    name: "Nấm To",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/14-cd11ecfa-7de5-42a7-a067-2aadf5ddb816.jpg?v=1586546904400",
    price: 105000,
  },
  {
    id: 11,
    name: "Thịt Heo",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/15-c4ca2856-53ff-45f5-ae3d-1a1db87f9f1b.jpg?v=1586546926977",
    price: 300000,
  },
  {
    id: 12,
    name: "Bắp Cải",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/11-a3cdebab-bdae-4eb8-a193-a05fc55822a5.jpg?v=1586546961453",
    price: 10000,
  },
];

const openShopping = document.querySelector(".shopping-cart");
const body = document.querySelector("body");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");

const listCards = JSON.parse(localStorage.getItem("listCarts")) || [];

openShopping.addEventListener("click", function () {
  body.classList.add("active");
  console.log(body.classList);
});

closeShopping.addEventListener("click", function () {
  body.classList.remove("active");
});

// Hiển thị dữ liệu products ra ngoài màn hình
function initApp() {
  for (let i = 0; i < products.length; i++) {
    let value = products[i];
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <div >
    <img
      src="${value.image}"
      alt="photo"
      width="300px"
      height="250px"
    />
    <p>${value.name}</p>
    <b>${value.price}</b>
    <div class="buy">
      <br>
      <button onclick="addToCart(${i})">Thêm vào giỏ hàng </button> 
    </div> 
    <br>
  </div>
    `;
    list.appendChild(newDiv);
  }
}

initApp();

// Thêm sản phẩm vào giỏ hàng
function addToCart(key) {
  // console.log(key);
  if (listCards[key] == null) {
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    listCards[key].quantity += 1;
  }
  localStorage.setItem("listCarts", JSON.stringify(listCards));
  reloadCart();
}

// hiển thị dữ liệu ở trong giỏ hàng
function reloadCart() {
  listCart.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  for (let i = 0; i < listCards.length; i++) {
    let value = listCards[i];
    if (value != null) {
      let newLi = document.createElement("li");
      newLi.innerHTML = `
        <div> <img src="${value.image}" /></div>
        <div>${value.name}</div>
        <div>${value.price}</div>
        <div>
        <button onclick="changeQuantity(${i}, ${value.quantity - 1})">-</button>
        <div>${value.quantity}</div>
        <button onclick="changeQuantity(${i}, ${value.quantity + 1})">+</button>
        </div>
      `;
      listCart.appendChild(newLi);
      totalPrice += value.price * value.quantity;
      count += value.quantity;
    }
  }
  total.innerText = totalPrice;
  // quantity.innerText = count;
}
reloadCart();

function changeQuantity(index, newQuantity) {
  if (newQuantity <= 0) {
    delete listCards[index];
  } else {
    listCards[index].quantity = newQuantity;
  }
  localStorage.setItem("listCarts", JSON.stringify(listCards));
  reloadCart();
}
