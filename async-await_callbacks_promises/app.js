// synchronous

// console.log(" I ");

// console.log(" eat ");

// console.log(" ice cream ");

// console.log(" with a ");

// console.log(" spoon ");

// asynchronous

// console.log(" I ");

// console.log(" eat ");

// setTimeout(()=>{console.log(" ice cream ");},4000)

// console.log(" with a ");

// console.log(" spoon ");



// function abcdefg(){}

// let abcdef = ()=>{}


// function one(call_2){
//     call_2();
//     console.log("Step 1 complete please call step 2");
// }

// function two(){
//     console.log("Step 2")
// }

// one(two)

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, callproduction) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        callproduction();
    }, 2000)

};

let production = () => {

    setTimeout(() => {
        console.log("Production has started")
        setTimeout(() => {
            console.log("the fruit has been chopped.")
            setTimeout(() => {
                console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} was added`);
                setTimeout(() => {
                    console.log(`the machine was started`);
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]}was added as toppings`);
                            setTimeout(()=>{
                                console.log(`serve ice cream`)
                            },2000);
                        },3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
};

order(0, production);
