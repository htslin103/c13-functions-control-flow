function getCoffee(isItMorning, haveCoffee, coffeeNearYou, coffeeShopNearby)
{

    addTextToPage('Is it morning?',true)
    if(isItMorning)
    {
        addTextToPage('Yes it is')
        addTextToPage('Do you have coffee?',true)
        if(haveCoffee)
        {

            addTextToPage('Yes I do')
            addTextToPage('Drink it :)',true)
        }
        else{

            addTextToPage('No I dont')
            
            addTextToPage('Is there coffee near you?',true)     
            if(coffeeNearYou){

                addTextToPage('Yes there is')                  
                addTextToPage('Get it and drink it :)',true)
                
            }
            else{ 
                addTextToPage('No there isnt')            

                addTextToPage('Is there a coffee place nearby?',true)
                if(coffeeShopNearby)
                {  
                    addTextToPage('Yes there is')                  
                    addTextToPage('Go and buy a coffee and drink it :)',true)
                }
                else{       
                    addTextToPage('No there isnt')             
                    addTextToPage('RIP', true)
                }
            }
        }
    }
    else{
        addTextToPage('No its night')
        addTextToPage('Good night', true)
    }
}

addInputToPage("Is it morning?", "true")
addInputToPage("Do you have coffee?", "true")
addInputToPage("Is there coffee near you?", "true")
addInputToPage("Is there a coffee shop nearby?", "true")
addButtonToPage("getCoffee", ()=>{
    let isItMorning = ("isItMorning")
    let haveCoffee = getInputAsBoolean("haveCoffee")
    let coffeeNearYou = getInputAsBoolean("coffeeNearYou")
    let coffeeShopNearby =getInputAsBoolean("coffeeShopNearby")
    getCoffee(isItMorning,haveCoffee, coffeeNearYou,coffeeShopNearby);
});

