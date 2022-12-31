const dom = (params) => {
  return document.querySelector(params);
}
var ProductList = [];


function renderProducts(data) {
  data = data || ProductList;

  var html = "";
  for (var i = 0; i < data.length; i++) {

    html += `
    <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
    <div class="block2">
        <div class="block2-pic hov-img0">
            <img src="${data[i].img}" alt="IMG-PRODUCT">

            <div class="popup-link">
            <a  href="#popup_${i}" id="" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1 ">
            View More      
            </a>     
            </div>
          
        </div>

        <div class="block2-txt flex-w flex-t p-t-14">
            <div class="block2-txt-child1 flex-col-l ">
                <a  href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                    ${data[i].name}
                </a>
                <span class="stext-105 cl3">
                    ${data[i].price}$
                </span>
            </div>

            <div class="block2-txt-child2 flex-r p-t-3">
                <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                    <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
                    <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
                </a>
            </div>
        </div>
    </div>
</div>



<div id="popup_${i}" class="popup-container popup-style-2" >
<div id="Neoo${i}" class="popup-content">
  <a href="#Neo" class="close">&times;</a>

  <section class="sec-product-detail bg0 p-t-65 p-b-60">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-7 p-b-30">
                <div class="p-l-25 p-r-30 p-lr-0-lg">
                    <div class="wrap-slick3 flex-sb flex-w">
                        <div class="wrap-slick3-dots"></div>
                        <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

                        <div class="slick3 gallery-lb">
                            <div class="item-slick3" data-thumb="images/product-detail-01.jpg">
                                <div class="wrap-pic-w pos-relative">
                                    <img src="${data[i].img}" alt="IMG-PRODUCT">

                                    <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${data[i].img}">
                                        <i class="fa fa-expand"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
                
            <div class="col-md-6 col-lg-5 p-b-30">
                <div class="p-r-50 p-t-5 p-lr-0-lg">
      <div id="desc_Phone" class="Description_Phone">
        <div class="Item_Phone" data-key="1" >
          <h4 id="idName"data-key="${i}" class="mtext-105 cl2 js-name-detail p-b-14">
            ${data[i].name}
          </h4>

          <span id="idPrice" data-key="${i}"   class="mtext-106 cl2">
          ${data[i].price} $
          </span>

          <p class="stext-102 cl3 p-t-23">
            Creen: ${data[i].creen}
          </p>
          <p class="stext-102 cl3 p-t-23">
            Black Camera: ${data[i].blackCamera}
          </p>
          <p class="stext-102 cl3 p-t-23">
            Front Camera: ${data[i].frontCamera}
          </p>
          <p class="stext-102 cl3 p-t-23">
            Description:    ${data[i].desc}
          </p>
          <p class="stext-102 cl3 p-t-23">
             Type:    ${data[i].type}
          </p>

          <input min="1" max="1" value="1" type="number" id="product_quantity_${data[i].id}" />
          <a  class="btnAddCart" id="BtnAddCart" href="#Neoo${i}" data-type="add" data-id ="${data[i].id}" onclick="addSP(${data[i].id})">Thêm vào giỏ hàng</a>
        </div>						
      </div>                 
       
                    <div class="p-t-33">
                    <div class="flex-w flex-r-m p-b-10">
                    <div class="size-204 flex-w flex-m respon6-next">
                  


                    <nav class="navCart"  > 
                    <div class ="divCart"> 
                    
                    </div>
                   
                    </nav>
                    



                    </div>
                  </div>
                
                    </div>

                    <!--  -->
                    <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                        <div class="flex-m bor9 p-r-10 m-r-11">
                            <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                <i class="zmdi zmdi-favorite"></i>
                            </a>
                        </div>

                        <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                            <i class="fa fa-facebook"></i>
                        </a>

                        <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                            <i class="fa fa-twitter"></i>
                        </a>

                        <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                            <i class="fa fa-google-plus"></i>
                        </a>
                      
                    </div>
                </div>
            </div>
        </div>

 
    </div>


</section>
</div>
</div>
`;






  }

  document.getElementById("tbodySinhVien").innerHTML = html;

  document.getElementById("tbodySinhVien").style.height = "366px";


}




async function fetchProductList() { // lay danh sach Product từ API
  // call api backend => ProductList
  ProductList = [];
  renderProducts();
  // document.getElementById("loader").style.display = "block";

  var promise = productService.fetchProducts();
  // promise - PENDING - FULFILL - REJECT
  // .then().catch()
  // async await

  try {
    var res = await promise;
    // await axios2();
    // await axios3();
    ProductList = mapProductList(res.data);
    renderProducts();
  } catch (err) {
    console.log(err);
  } finally {
    // document.getElementById("loader").style.display = "none";
  }

  console.log("hellooo 11");
  // promise
  // .then(function (res) {
  //   ProductList = mapProductList(res.data);
  //   renderProducts();
  // })
  // .catch(function (err) {
  //   console.log("error", err);
  // })
  // .finally(function () {
  //   document.getElementById("loader").style.display = "none";
  // });
}



window.onload = async function () {

  await fetchProductList(); // return promsise
  // await fetchProductList(); // return promsise
 await localStorageCart(cartDetails);
};

//input: dataLocal => output: data mới
function mapProductList(local) {
  var result = [];

  for (var i = 0; i < local.length; i++) {
    var oldProduct = local[i];
    var newProduct = new Product(
      oldProduct.id,
      oldProduct.name,
      oldProduct.price,
      oldProduct.creen,
      oldProduct.blackCamera,
      oldProduct.frontCamera,
      oldProduct.img,
      oldProduct.desc,
      oldProduct.type,
      oldProduct.quantity
    );
    result.push(newProduct);
  }

  return result;
}

// $(document).ready(function () {
//   // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
//   if (sessionStorage["shopping-cart-items"] != null) {
//     cartDetails = JSON.parse(sessionStorage["shopping-cart-items"].toString());
//   }

//   // Hiển thị thông tin từ giỏ hàng
//   displayShoppingCartItems();
// });


cartDetails = [];

// let quantity = 1;


var quantity ;

localStorageCart();

// // Lưu giỏ hàng vào localStorage
// // hàm này là load giỏ hàng ra,  chứ k lưu đâu 
function localStorageCart() {
  cartDetails = JSON.parse(localStorage.getItem("cartData")) || [];
  cartDetails = cartDetails.map((cartData) => {
    return new Product(cartData.id,
      cartData.name,
      cartData.price,
      cartData.screen,
      cartData.backCamera,
      cartData.frontCamera,
      cartData.img,
      cartData.desc,
      cartData.type,
      cartData.src,
      cartData.quantity = quantity
    )
  })
  displayCart(cartDetails);

  // disPlayCartBig(cartDetails);

}


function addSP(id) {
  let sp = ProductList.find((sanPham) => {
    return id == sanPham.id;
  });

  quantity = ~~($('#product_quantity_' + id).val()) || 1;
  //console.log(quantity);

  let index_exist = checkspGioHang(id);
  var sp_temp = {};
  if (index_exist >= 0) {
    sp_temp = cartDetails[index_exist];

  }
  else {
    sp_temp = { ...sp };
    sp_temp.quantity = quantity;
  }


  if (index_exist >= 0) {
    capnhatgiohang(index_exist, quantity);
   
  } else {
    cartDetails.push(sp_temp);
  
  }

  // localStorage.setItem("cartData", JSON.stringify(cartDetails));
   
  displayCart(cartDetails);
  displayPayment(cartDetails);
  TotalPrice();
  TotalPricePayment();



  console.log("them thanh cong")


}

function messagerCart(cartDetails) {
 
  let count = 0;
  for (let i in cartDetails) {
     
      count++;
  }

  dom(".messagerCartt").innerText = count;

   return count;

}


function capnhatgiohang(vt, sl) {
  for (let i = 0; i < cartDetails.length; i++) {
    if (i == vt) {
      if(cartDetails[i].quantity < 10){
        cartDetails[i].quantity += sl;
        break;
      }
      else{
        alert("khong the them");
      }
     
    }
  }
}

function checkspGioHang(x) {
  let vitri = -1;
  for (let i = 0; i < cartDetails.length; i++) {
    if (cartDetails[i].id == x) {
      vitri = i;
      break;
    }
  }
  return vitri;
}


// Hiển thị danh sách nằm trong giỏ hàng
function displayCart(cartDetails) {
  let Show = cartDetails.reduce((result, cart_Item, index) => {
    return result += `
      <li class="header-cart-item flex-w flex-t m-b-12" data-key ="${cart_Item.id}" >
              <div class="header-cart-item-img">
               <img src="${cart_Item.img}" alt="IMG">
              </div>
        
              <div class="header-cart-item-txt p-t-8">
                <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                 ${cart_Item.name}
                </a>
                <div class="flex_Price" style="display: flex; gap: 5px;">
                <span class=" spanPrice header-cart-item-info">
               ${cart_Item.price} 
               </span>
               <p>$ </p>
             </div>
             <span>Quantity: <input min="1" max="100" value="${cart_Item.quantity}" type="number" id="quantityID" style= "display: inline;" class ="changeQuanlity" /></span>
               

               <button data-type="delete" style = "margin-left:20px;">
               <i class="fa-solid fa-trash" data-type="deleteTrash" data-id="${cart_Item.id}" ></i>
            </button>
      
              </div>
            </li>`
  }, "")
  dom("#bodyCart").innerHTML = Show;
 // localStorage.setItem("cartData", JSON.stringify(cartDetails));
}





// total price

function TotalPrice() {
  var sumPrice1 = 0;
// var countCart = 0;
  var carItem = document.querySelectorAll("#bodyCart li");
  //console.log(carItem.length);
  for (var i = 0; i < carItem.length; i++) {
    //console.log(i);
   
    var InpValue = carItem[i].querySelector("#quantityID").value;
    console.log(InpValue);  
    var prdPrice = carItem[i].querySelector(".spanPrice").innerHTML;
     console.log(prdPrice);  
    totalFirst = Number(InpValue * prdPrice);
    console.log(totalFirst);
    sumPrice1 = sumPrice1 + totalFirst;
    console.log(sumPrice1);
  
  }
  //countCart+=1 ;
  var CartSum = document.querySelector(".w-full .inputTotal").innerHTML = "Total:  "+sumPrice1+" $";
 // document.getElementById("messagerCart").innerHTML = countCart;
  // dom("#messagerCart").innerText = countCart;
  console.log(CartSum);
  // onChangeQuantity();
  messagerCart(cartDetails);
  localStorage.setItem("cartData", JSON.stringify(cartDetails));
}

// Xóa 1 sản phẩm trong danh sách giỏ hàng (cartDetails)
dom("#bodyCart").addEventListener("click", (evt) => {
  let delTrash = evt.target.getAttribute("data-type");
  id = evt.target.getAttribute("data-id");
  if (delTrash === "deleteTrash") {
      for (let i in cartDetails) {
          if (id === cartDetails[i].id) {
            cartDetails.splice(i, 1);
              break;
          }
      }
  }
  localStorage.setItem("cartData", JSON.stringify(cartDetails));
  displayCart(cartDetails);
  TotalPrice();
  displayPayment(cartDetails);
  TotalPricePayment();

});


$("#DeleteAll").click(function () {
  cartDetails = [];
 
  localStorage.setItem("cartData", JSON.stringify(cartDetails));
  $(".header-cart-content > #bodyCart").html("");
  TotalPrice();
  //localStorage.clear();
 
});



function displayPayment(cartDetails){
  let ShowPayment = cartDetails.reduce((Show, Item_Pay, index) => {
    return Show += `
    <tr class="table_row">
    <td class="column-1">
      <div class="how-itemcart1">
        <img src="${Item_Pay.img}" alt="IMG">
      </div>
    </td>
    <td class="column-2">${Item_Pay.name}</td>
  

   <td> <input min="1" max="100" value="${Item_Pay.quantity}" type="number" class ="changeQuanlity1" /> </td>
  
    <td class="column-4">${Item_Pay.price}</td>
  </tr>`
  }, "")
  dom("#showPaymentId").innerHTML = ShowPayment;
  //displayCart(cartDetails);
  //localStorage.setItem("cartData", JSON.stringify(cartDetails));

}


function TotalPricePayment() {
  var sumPrice1 = 0;
  var carItem = document.querySelectorAll("#bodyCart li");
  //console.log(carItem.length);
  for (var i = 0; i < carItem.length; i++) {
    //console.log(i);

    var InpValue = carItem[i].querySelector("#quantityID").value;
    console.log(InpValue);  
    var prdPrice = carItem[i].querySelector(".spanPrice").innerHTML;
     console.log(prdPrice);  
    totalFirst = Number(InpValue * prdPrice);
    console.log(totalFirst);
    sumPrice1 = sumPrice1 + totalFirst;
    console.log(sumPrice1);
  }
  var CartSum = document.querySelector(".displayTotalPay #displayTotalPayment").innerHTML = sumPrice1;
  console.log("hjhj"+CartSum);
  onChangeQuantity();
  //localStorage.setItem("cartData", JSON.stringify(cartDetails));
}

function onChangeQuantity(){
  var cartItemm = document.querySelectorAll("#showPaymentId tr")
  for(var i = 0; i < cartItemm.length; i++){
    var valueQuantity1 = cartItemm[i].querySelector("td input");
   valueQuantity1.addEventListener("change", function(){
    TotalPricePayment();
   })
    // displayPayment(cartDetails);
    // TotalPricePayment();
    console.log(valueQuantity1);
  }

  console.log(cartItemm)

}

// function show bill
$("#ididid").click(function () {

  document.getElementById("Paymentfinal").innerHTML = Bill();
  cartDetails = [];
  localStorage.setItem("cartData", JSON.stringify(cartDetails));
  displayCart(cartDetails);
  TotalPrice();

});

$("#xamxam").click(function () {

});

function Bill() {
  return `
      <div class="order-details">
          <em>your order has been placed</em>
          <p>Your order-id is : <span>${Math.floor(Math.random() * 1000)}</span></p>
          <p>your order will be delivered to you in 3-5 working days</p>
          <a id="xamxam"  href="#popup6" style ="margin-top: 60px; margin-left: 120px;  width: 40%;  background-color: #6d6e6f; color:black;"
          class=" button btn-order btn flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
          Done!!
        </a>
      </div> 
  `
}


// $("#ThankU_hjhj").click(function () {
//   document.getElementById("popup6").style.display = "none";
// });




