
//MODEL :: Business logic resposible  for calculations,implementing the rules, algorithms used 

 //get id of thisDiv
    const renderInDiv = document.getElementById('thisDiv');

    //object key value pair;
    let cart = [{name:'Kabs Muuka'}];


//CONTROL: 
//Controls inputs and acts as an intermediate between model and View
       
    //add items to "cart"
        function addToCart(){
            //clears elements in div
            const clear = document.getElementById('thisDiv').innerHTML = '';
            //end...
            const userInput = document.getElementById('userInput');
            const item = userInput.value;

            const id = new Date().getTime().toString();
            //adding items to cart

                cart.push
                ({
                name:item,

                id:id

                });
                
        //updates added items to page
            Render();
            }
            
       //function that handles the delete button
        function Delete(event){
            const targetedButton = event.target;
            const buttonId = targetedButton.id;
        
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
            Render();
        }

//VIEW : Displays the UI 
        //responsble for rendering elements on webpage
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