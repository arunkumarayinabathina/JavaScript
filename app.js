let oldPerson = {
    age:70,
    weekdays: true,
    festivalWeeks:false
}
let student = {
    age: 20,
    studentIdValid:true,
    NotDecember:true
} 
let normalPerson = {
    age: 30,
    isSunday: true
}

let eachTicket = 1000;
let amoutToPay = 0;
// let person = {
//     age:30,
//     weekdays:true,
//     festivalWeeks:false,
//     studentIdValid:true,
//     NotDecember:true,
//     isSunday: true
// }

function checkOne(person){

    // For aged persons 
    if(person.age>60 && person.weekdays && !person.festivalWeeks){
        let discount = (eachTicket*30)/100
        console.log(`Ticket Price is ${eachTicket-discount}`)
    }

    // For students
    else if(person.age<25 && person.studentIdValid && person.NotDecember){
        let discount = (eachTicket*20)/100
        console.log(`Ticket Price is ${eachTicket-discount}`)
    }

    // For the normal person who visits on sunday
    else if((person.age<=59 && person.age>25) && person.isSunday){
        let discount = (eachTicket*10)/100
        console.log(`Ticket Price is ${eachTicket-discount}`)
    }

    // not a student or aged person who visited in weekdays
    else{
        console.log(eachTicket);
    }
}

checkOne(oldPerson);
checkOne(student);
checkOne(normalPerson);
// if(age>60 && weekdays && !festivalWeeks){
//     console.log("Applicable for 30% discount");
// }
// else if(age<25 && studentIdValid && NotDecember){
//     console.log("Eligible for 20% discount");
// }
// else if((age<=59 && age>25) && isSunday){
//     console.log("Eligible for 105 discount");
// }
// else{
//     console.log("Need to pay full price");
// }


// let customer = {
//     orderAmount:300,
//     isPremium:true,
//     isWeekday:true,
//     time:11,
//     isCouponUsed:false,
//     isSunday:true
// }

let person1 = {
    orderAmount:1200,
    isPremium:true
}
let person2 = {
    orderAmount:600,
    isWeekday:true,
    time:19,
    isCouponUsed:false
}
let person3 = {
    orderAmount : 200,
    isSunday:true,
    time:11,
}
let person4 = {
    orderAmount:100,
    isSunday:false
}

function Question2(customer){
    if(customer.orderAmount>1000 && customer.isPremium){
        console.log("Eligible for free delivery and 15% discount");
    }
    else if((customer.orderAmount>500 && customer.orderAmount<1000) && customer.isWeekday && (customer.time>18 && customer.time<20)){
        console.log("Eligible for 100 discount");
    }
    else if(customer.orderAmount<500 && customer.isSunday && (customer.time<12 && customer.time>0)){
        console.log("Eligible for free delivery");
    }
    else{
        console.log("Need to pay full amount including delivery");
    }
}

Question2(person1)
Question2(person2)
Question2(person3)
Question2(person4)


let borrower1 = {
    loanAmount : 1200000,
    creditScore : 810
}
let borrower2 = {
    creditScore : 700,
    income : 50001,
    isGovtEmployee : true
}
let borrower3 = {
    isGovtEmployee:false,
    isDecember:true,
}

function Question3(person){
    if(person.loanAmount>1000000){
        if(person.creditScore>800){ 
            if(person.isGovtEmployee){
                console.log("Interest rate in 7% and add on discout of 0.5 added so it beacme 6.5%.");
            }
            else{
                console.log("Interest rate in 7%");
            }
        }
    }
    else if((person.creditScore>650 && person.creditScore<800)){
            if(person.income>50000){
                if(person.isGovtEmployee){
                     console.log("Interest rate in 9% and add on discout of 0.5 added so it beacme 8.5%.");
                }
                else{
                    console.log("Interest rate in 9%");
                }
            }
        }
        else if(person.isDecember){
            console.log("On base rate festive discount of 1% is reduced.")
        }
    }

Question3(borrower1)
Question3(borrower2)
Question3(borrower3)


let delivery = {
    orderValue : 4000,
    isSameCity : false,
    isPriority : true,
    isSameState:true
}


if(delivery.isSameCity){
    if(delivery.isPriority){
        if(delivery.orderValue>2000){
            console.log("Delivery free.")
        }
        else{
        console.log("delivery charges are 50rs.")
    }
    }
    
}
else if(!delivery.isSameCity){
    if(delivery.isSameState){
        if(delivery.orderValue>5000){
            console.log("Deliver free.")
        }
        else{
            console.log("delivery charge 100rs")
        }
    }
    else if(!delivery.isSameState){
        if(delivery.isPremium && delivery.isWeekend){
            console.log("delvery charges are 200 - 100 = 100rs")
        }
        else{
            console.log("delivery charges are 200rs")
        }
    }
}


let gymTrainee = {
    memberShipType : "Gold", // "Silver" , "Bronze"
    attendedDays : 21,
    paymentType:"UPI"
}

if(gymTrainee.paymentType == "UPI"){
    if(gymTrainee.memberShipType == "Gold"){
    if(gymTrainee.attendedDays>20){
        console.log("you need to pay total amount - 500");
    }
    else if(gymTrainee.memberShipType == "Silver"){
        if(gymTrainee.attendedDays>15){
            console.log("you need to pay total amount - 300");
        }
        }
    }
}
else if(gymTrainee.paymentType == "debitCard"){
    if(gymTrainee.memberShipType == "Bronze"){
        if(gymTrainee.attendedDays>10){
            console.log("you need to pay total amount - 300")
        }
    }
}
