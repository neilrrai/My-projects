let bagItems;

onLoad()

function onLoad() {// this function will called whenever page is load
  let bagItemsStr = localStorage.getItem('bagItems');// each time bagItems will come from local storage
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHmePage();
  dipsplayBagIcon();

}




function addTobag(itemId)
{
  bagItems.push(itemId);// storing our cart value in local storage
  localStorage.setItem(`bagItems`,JSON.stringify(bagItems))
  dipsplayBagIcon();
}

function dipsplayBagIcon()
{
  let bagItemCountElement = document.querySelector(`.bag-item-count`);
  if(bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';// hide icon when no element in bag
  }
}


function displayItemsOnHmePage(){
  let itemsContainerElement = document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }

let innerHtml = '';
items.forEach(item => {
  innerHtml += `
  <div class="item-container">
  <img class="item-image" src="${item.image}" alt="item image">
  <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
    <span class="current-price">Rs. ${item.current_price}</span>
    <span class="original-price">Rs. ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick="addTobag(${item.id})">Add to Bag</button>
</div>`

})

itemsContainerElement.innerHTML = innerHtml;

}


