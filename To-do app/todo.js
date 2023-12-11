// instead of array we use object Array as we need to store two element at one index
let todoList = [
  {
    item: 'Buy Milk', 
    dueDate: '29/11/2023'
  },
  {
    item: 'Do assignment', 
    dueDate: '05/12/2023'
  }
 ];
displayTask();

// function to add task in an Array name todoList 
function addtodo()
{
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoDate = dateElement.value;
  let todoItem = inputElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';

  displayTask();
}

function displayTask()
{
  let containerElement = document.querySelector('.todo-container')

let newHtml = '';
  for(let i=0;i<todoList.length;i++)
  {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    // we will write whole html code in this loop then put this newHtml in our body container using its class
    newHtml += `
    
      <span>${item}</span> 
      <span>${dueDate}</span> 
      <button class="delete-button" onclick="todoList.splice(${i},1);displayTask()">Delete</button>
    
    
    `// Span show the items in single line
    // to change line each time I used div 
  }
  containerElement.innerHTML = newHtml;// adding it to body container
  
}
