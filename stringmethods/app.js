const userName = "Arun"
console.log(typeof userName)

const user = new String("Arun")
console.log(typeof user)


const name  = "Arun Kumar"
console.log(name.length)

console.log(name.charAt(0));
console.log(name.charCodeAt(0))


const firstName = "Arun";
const lastName = "Kumar";

console.log(firstName.concat(" ").concat(lastName))

console.log(`${firstName} ${lastName}`)

console.log(firstName[0])
console.log(firstName.startsWith("z"))
console.log(firstName.endsWith("n"))

const str = "Welcome"

console.log(str.slice(1,2))
console.log(str.slice(-3))
console.log(str.substring(1,2))
console.log(str.substring(1,-1))
// console.log(str.substring(-2)) // not supports


const str1 = "         Arun         "

console.log(str1)
console.log(str1.trim())
console.log(str1.trimStart())
console.log(str1.trimEnd())


const paragraph = "The rain fell Softly, softly on the rooftops, softly on the streets, softly on the trees."

console.log(paragraph.replace(/softly/,"soft"))
console.log(paragraph.replace(/softly/i,"soft"))
console.log(paragraph.replace(/softly/ig,"soft"))


const words = "apple,banana,cherry,date,elderberry,fig,grape"

console.log(words.split(","))

console.log(words.split(","))

const str2 = "ABC"
console.log(str2.toLowerCase())

const str3 = "abc"
console.log(str3.toUpperCase());



