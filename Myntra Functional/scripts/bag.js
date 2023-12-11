
let bagItemObjects;

onLoad();
function onLoad(){
  loadBagItemObjects();
  displayBagItems();
} 
// here we are geting our product details by id and store it as object in bagItemObjects
function loadBagItemObjects(){
  bagItemObjects = bagItems.map(itemId => {
    for(let i = 0; i<items.length; i++) {
      if(itemId == items[i].id){
        return items[i];
      }
    }
  } );

  console.log(bagItemObjects);

}

// here I add all the generated HTML in innerHTML
function displayBagItems(){

  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML ='';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem)
    
  });
  // after adding all the item in innerHTML we aiising it to  this.
  containerElement.innerHTML = innerHTML;
}

// function to remove item from id on remove button

  function removeFromBag(itemId){
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId );
    localStorage.setItem(`bagItems`,JSON.stringify(bagItems));
    loadBagItemObjects();
    dipsplayBagIcon();
    displayBagItems();
  }

// here we generate HTML for each item in this function
function generateItemHTML(item){
  return `
  <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart"  onclick="removeFromBag(${item.id})">X</div>
          </div>`

}