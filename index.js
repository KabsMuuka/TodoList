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
        //save updated string to local storage
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
        //save updated string to local storage
        savedTodos();
    }


    //storing in localStorage: can only be saved when elements are in strings
    //hence JSON.stringify()
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



        createTodo(item);

        
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
        element.innerHTML = item.name
        //creating a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';

        //attach an id to each button
        deleteBtn.id = item.id;

        //assigning each delete button to each element
        element.appendChild(deleteBtn);
        
        //delete function
        deleteBtn.onclick = Delete;

            //render in div
        renderInDiv.appendChild(element);
        });
    }
    Render();