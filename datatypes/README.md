## 🧠 What is a Data Type?

> A **Data Type** defines the kind of data a variable can hold, such as numbers, strings, booleans, or complex objects.

JavaScript is a **dynamically typed** language, which means variables can hold any type of data and types are determined at runtime.

---

## 📚 Types of Data Types in JavaScript

JavaScript data types are broadly classified into two categories:

---

### ✅ 1. Primitive Data Types

> These are immutable (cannot be altered) and hold **single values**.

Primitive types are:

| Type        | Description                                     | Example                  |
| ----------- | ----------------------------------------------- | ------------------------ |
| `Number`    | Represents numeric values                       | `let x = 42;`            |
| `String`    | Represents text                                 | `let name = "Arun";`     |
| `Boolean`   | Represents logical true or false                | `let isLoggedIn = true;` |
| `Null`      | Represents an intentional absence               | `let address = null;`    |
| `Undefined` | Variable declared but not assigned              | `let email;`             |
| `Symbol`    | Unique identifiers                              | `let id = Symbol('id');` |
| `BigInt`    | Large integers beyond `Number.MAX_SAFE_INTEGER` | `let big = 123n;`        |

---

### 🔎 1.1 `Number`

```js
const age = 25;
const pi = 3.14;
console.log(typeof age); // number
```

> ✅ **Interview Tip:** JavaScript has only one number type (both integers and floats).

---

### 🔎 1.2 `String`

```js
const name = "Arun";
const message = `Welcome, ${name}`;
console.log(typeof message); // string
```

> ✅ Use backticks (`` ` ``) for **template literals** to interpolate variables.

---

### 🔎 1.3 `Boolean`

```js
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Dashboard shown");
}
```

> ✅ Used heavily in conditional logic (`if`, `while`, `for`).

---

### 🔎 1.4 `Null`

```js
let address = null;
console.log(typeof address); // ⚠️ object (this is a JavaScript bug/quirk)
```

> ✅ `null` represents an intentional "no value".

---

### 🔎 1.5 `Undefined`

```js
let phone;
console.log(typeof phone); // undefined
```

> ✅ A variable declared but not initialized is automatically `undefined`.

---

### 🔎 1.6 `Symbol` (ES6+)

```js
const id = Symbol('userId');
const anotherId = Symbol('userId');
console.log(id === anotherId); // false
```

> ✅ Each `Symbol()` call returns a **unique value**, used as **hidden keys** in objects.

---

### 🔎 1.7 `BigInt` (ES11+)

```js
const big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // bigint
```

> ✅ Used when numbers exceed `Number.MAX_SAFE_INTEGER`.

---

### ✅ 2. Non-Primitive (Reference) Data Types

> These store **multiple values** or **collections** and are mutable.

| Type       | Description                          |
| ---------- | ------------------------------------ |
| `Object`   | Key-value pairs                      |
| `Array`    | Ordered collection                   |
| `Function` | Reusable block of code (also object) |

These are stored by **reference** in memory.

---

### 🔎 2.1 `Array`

```js
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango"]
```

> ✅ Arrays can hold **mixed types**, are **zero-indexed**, and have many useful methods (`push`, `map`, `filter`, etc.).

---

### 🔎 2.2 `Object`

```js
const user = {
    name: "Arun",
    age: 24,
    isVerified: true,
    skills: ["JS", "React"]
};
console.log(user.name); // Arun
```

> ✅ Objects are the backbone of JavaScript — everything is either a **primitive** or **object**.

---

### 🔎 2.3 `Function`

```js
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Arun")); // Hello, Arun!
```

> ✅ Functions are **first-class citizens** in JS. They can be stored in variables, passed as arguments, and returned from other functions.

---

## 🔁 Summary Table

| Type      | Mutable | Stored By | Example            |
| --------- | ------- | --------- | ------------------ |
| Number    | ❌       | Value     | `42`               |
| String    | ❌       | Value     | `"Hello"`          |
| Boolean   | ❌       | Value     | `true`             |
| Null      | ❌       | Value     | `null`             |
| Undefined | ❌       | Value     | `undefined`        |
| Symbol    | ❌       | Value     | `Symbol("id")`     |
| BigInt    | ❌       | Value     | `123n`             |
| Array     | ✅       | Reference | `[1, 2, 3]`        |
| Object    | ✅       | Reference | `{ name: "Arun" }` |
| Function  | ✅       | Reference | `function() {}`    |

---

## ✅ Interview Pro Tips

1. **Primitive values are compared by value.**
2. **Objects/arrays/functions are compared by reference.**
3. `typeof null === "object"` is a JS bug (well known).
4. `Array` and `Function` are special types of objects.
5. Use `Array.isArray()` to check for arrays (not `typeof`).
