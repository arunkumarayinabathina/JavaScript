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

let cupSize = "small"
let addon = "extrashots"
let total = 0;
switch(cupSize){
    case "small":
        total += 30;
        break;
    case "medium":
        total += 50;
        break;
    case "large":
        total += 80;
        break;
    case "extralarge":
        total += 100;
        break;
    default:
        console.log("Invalid cup size");
    }
switch(addon){
    case "extrashots":
        total+=20;
        break;
    case "flavouredsyrup":
        total+=40;
        break;
    case "whippedcream":
        total+=60;
        break;
    default:
        console.log("Ivalid addon");
}

console.log(total)


let recharge = "DataPack"
let validityTime = 0;
let specialWeek = true;
switch(recharge){
    case "DataPack":
        validityTime+=10;
        break;
    case "TalkTime":
        validityTime+=20;
        break;
    case "ComboPack":
        validityTime+=30;
        break;
    case "UnlimitedPack":
        validityTime+=40;
        break;
    default:
        console.log("No pack exist")
}
if(specialWeek){
    validityTime+=2;
}
console.log(validityTime)


let order = "breakfast"
let item = "dosa"
let items = 0
let bill = 0

switch(order){
    case "breakfast":
        switch(item){
            case "dosa":
                items+=1
                bill+=60
                break;
            case "idly":
                items+=1
                bill+=40
                break;
            case "paratha":
                items+=1
                bill+=80
                break;
            default:
                console.log("Invalid Item");
        }
        break;
    case "lunch":
        switch(item){
            case "rice":
                items += 1;
                bill += 100;
                break;
            case "chapati":
                items += 1;
                bill += 80;
                break;
            case "biryani":
                items += 1;
                bill += 150;
                break;
            default:
                console.log("Invalid Item");
        }
        break;

    case "dinner":
        switch(item){
            case "friedRice":
                items += 1;
                bill += 120;
                break;
            case "noodles":
                items += 1;
                bill += 110;
                break;
            default:
                console.log("Invalid Item");
            }
        break;
    default:
        console.log("Invalid order")
}

console.log(`Total items : ${items} \nTotal bill ${bill}`)



let bookType = "Fiction" 
let fine = 0;
let overDueDays = 5;
let isStudent = true;
let studentDiscountPercent = 50;
switch(bookType){
    case "Fiction":
        fine = overDueDays*10
        if(isStudent){
            fine = fine *(1-(50/100))
        }
        break;
    case "Non-Fiction":
        fine = overDueDays*20
        if(isStudent){
            fine = fine *(1-(50/100))
        }
        break;
    case "Reference":
        fine = overDueDays*30
        if(isStudent){
            fine = fine *(1-(50/100))
        }
        break;
    case "Magazine":
        fine = overDueDays*40
        if(isStudent){
            fine = fine *(1-(50/100))
        }
        break;
}
console.log(fine)



let movieticket = "Standard"
let Day = "Saturday"
let price = 0
switch(movieticket){
    case "Balcony":
        price += 50;
        break;
    case "Standard":
        price+=100;
        break;
    case "Premium":
        price+=150
        break;
    case "VIP":
        price+=200;
        break;
    default:
        console.log("No such category exist.")
}
if(Day==("Sunday" || "Saturday")){
    price = price*(1-(20/100));
}
console.log(price)



let score = 47
let grade = ""
let isFinalYear = false
if(score>=90 && score<=100){
    grade="A"
}
else if(score>=80 && score<90){
    grade="B"
}
else if(score>=70 && score<80){
    grade="C"
}
else if(score>=60 && score<70){
    grade="D"
}
else if(score>=50 && score<60){
    grade="E"
}
else if(score<50){
    if(score>45){
        if(isFinalYear){
            console.log("Eligible for re-evalution")
        }
        else{
            grade+="Fail"
        }
    }
    else{
        grade = "Fail"
    }
}

(grade!="")?console.log(grade):"";



let experience = 11
let bonus = 0;
let monthOfJoin = "December"
if(experience>15){
    bonus += 50000;
}
else if(experience>=10 && experience<=15){
    bonus+=30000;
}
else if(experience>=5 && experience<10){
    bonus+=20000;
}
else if(experience>=2 && experience<5){
    bonus+=10000;
}
else if(experience<2){
    bonus+=5000
}
if(monthOfJoin == "December"){
    bonus+=2000
}

console.log(bonus)



let temp = 5;
let weatherCategory = ""
let isRainy=true
if(temp>=40){
    weatherCategory+="Extremely Hot"
}
else if(temp>=30 && temp <40){
    weatherCategory+="Hot"
}
else if(temp>=20 && temp <30){
    weatherCategory+="Warm"
}
else if(temp>=10 && temp<20){
    weatherCategory+="Cool"
}
else{
    weatherCategory+="Cold"
}

if(isRainy){
    weatherCategory+=" and Rainy";
}

console.log(weatherCategory)


let cost = 900;
let isBirtday = true;
let discount = 0;
if(cost>20000){
    discount += 25;
}
else if(cost>=15000 && cost<20000){
     discount+=20
}
else if(cost>=10000 && cost<15000){
     discount+=15
}
else if(cost>=5000 && cost<10000){
     discount+=10
}
else{
     console.log("no discount applicable");
}

if(isBirtday && discount>0){
    discount+=5;
}

(discount>0)?console.log(discount):""