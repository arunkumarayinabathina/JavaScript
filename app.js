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