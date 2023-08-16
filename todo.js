//saving to local storage
// :: Business logic resposible  for calculations,implementing the rules, algorithms used 

    //MODEL

    const renderInDiv = document.getElementById('thisDiv');
    //object key value pair;

    let cart;

    //retrieving Json strings and converting them to array of objects using
    //JSON.parse()
    const storedTodos = JSON.parse(localStorage.getItem('todos'));

    //checking if storedTodos is in array form, if true render on web
     if(Array.isArray(storedTodos)){
         cart = storedTodos;
    }else{
        cart = [{name:'Listed here',
        id: '1'
    }];
    }

    function createTodo(item){
        const id = new Date().getTime().toString();
        //adding items to cart
            cart.push
            ({
            name:item,
            id:id
        });
       //update added items in local storage (as strings)  
        savedTodos();
    }

    function Remove(buttonId){
        //the filtered cart is reassigned to cart and compares the 
        //item.id to buttonId! if its true its return false;
        cart = cart.filter(function(item){

        //clears the elements before Render function is called
        const clear = document.getElementById('thisDiv').innerHTML = '';

        if(item.id !== buttonId){
            //false means if item.id equals buttonId it will exclude the targeted item
            return true;
        }else{
            return false;
            }
        });
        //update added items in local storage (as strings) 
        savedTodos();
    }
    
    //storing in localStorage in string format
    function savedTodos(){
        localStorage.setItem('todos',JSON.stringify(cart));
    }



//CONTROL: 
//Controls inputs and acts as an intermediate between model and View
    function addToCart(){
        //clears elements in div
        const clear = document.getElementById('thisDiv').innerHTML = '';
        //end...
        const userInput = document.getElementById('userInput');
        const item = userInput.value;

        if(item !==""){
            createTodo(item);
        }else{
            alert('Sorry type your todo first ):');
        }
        
        userInput.value = '';
        //updates added items to page
        Render();
        }

    //function that handles the delete button
    function Delete(event){
        const targetedButton = event.target;
        const buttonId = targetedButton.id;
        //calling remove function
        Remove(buttonId);

        Render();
    }
    


//VIEW : Displays the UI 

    function Render(){
        cart.forEach(function(item) {
        const element = document.createElement('div');
        element.classList.add("div-background");

        //container for text and buttons
        const containerForTextAndButtons = document.createElement('div');
        containerForTextAndButtons.classList.add("containerForTextAndButtons")


        //button container 
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add("button-container");

        element.innerHTML = item.name
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';
        //classname
        deleteBtn.classList.add('Delete-button');
        //attach an id to each button
        deleteBtn.id = item.id;
        //delete function
        deleteBtn.onclick = Delete;
        
        //mark done button
        const markDoneBtn = document.createElement('button');
        markDoneBtn.classList.add("markDoneBtn");
        markDoneBtn.innerText = "D";
        markDoneBtn.id = item.id;
        

         //append buttons to buttonContainer
         buttonContainer.appendChild(deleteBtn);
         buttonContainer.appendChild(markDoneBtn);
        
        //apppend buttons to containerForTextAndButtons
         containerForTextAndButtons.appendChild(buttonContainer);

        //append containerForTextAndButtons to main elemnet div 
         element.appendChild(containerForTextAndButtons); 
        
        //render in ul
        renderInDiv.appendChild(element);
        });
    }
    Render();