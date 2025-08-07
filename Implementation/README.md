### ✅ 1. What are the different ways to implement JavaScript in a web page?

**Answer:**
JavaScript can be implemented in **three main ways**:

1. **Inline JavaScript**
2. **Internal JavaScript**
3. **External JavaScript**

---

### ✅ 2. What is Inline JavaScript?

**Answer:**
Inline JavaScript is written **directly within an HTML element’s attribute**, typically the `onclick`, `onload`, or other event attributes.

📌 **Example:**

```html
<button onclick="alert('Hello!')">Click Me</button>
```

🔹 **Use Case**: Simple, one-liner scripts
🔹 **Drawback**: Not clean, hard to maintain, violates separation of concerns

---

### ✅ 3. What is Internal JavaScript?

**Answer:**
Internal JavaScript is written **inside a `<script>` tag** within the HTML document, typically placed in the `<head>` or `<body>` section.

📌 **Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    function greet() {
      alert('Hello from internal JS');
    }
  </script>
</head>
<body>
  <button onclick="greet()">Click</button>
</body>
</html>
```

🔹 **Use Case**: Small projects or prototypes
🔹 **Drawback**: Mixing HTML and JS reduces maintainability

---

### ✅ 4. What is External JavaScript?

**Answer:**
External JavaScript is written in a **separate `.js` file** and then **linked to the HTML** file using a `<script src="...">` tag.

📌 **Example:**

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="script.js" defer></script>
</head>
<body>
  <button onclick="greet()">Click</button>
</body>
</html>
```

**script.js**

```javascript
function greet() {
  alert('Hello from external JS!');
}
```

🔹 **Use Case**: Best for large apps, reusable code
🔹 **Advantage**: Clean structure, separation of concerns, cacheable

---

### ✅ 5. Which implementation is considered best practice?

**Answer:**
**External JavaScript** is considered best practice because:

* Keeps HTML and JavaScript code separate
* Easier to manage and maintain
* Promotes reusability
* JS files are cacheable by browsers
* Works well with build tools, bundlers, and frameworks

---

### ✅ 6. Can JavaScript be added in the `<head>` or `<body>`?

**Answer:**
Yes. You can place `<script>` tags either in the `<head>` or the `<body>`.

✅ Best Practice:

* Place scripts **at the end of `<body>`**, or use the `**defer**`/`**async**` attributes in `<head>` to avoid **render-blocking**.

📌 Example with `defer`:

```html
<script src="script.js" defer></script>
```

---

### ✅ 7. What is the difference between `defer` and `async` in `<script>` tags?

| Attribute | Description                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------- |
| `async`   | Loads the script asynchronously and executes it **as soon as it’s ready**, **may not preserve order**   |
| `defer`   | Loads the script asynchronously but **executes it after HTML parsing is complete**, **preserves order** |

---

### ✅ 8. Can JavaScript run without HTML?

**Answer:**
Yes, JavaScript can be run without HTML in environments like:

* **Node.js** (server-side scripting)
* **REPL/CLI tools**
* **Script runners (Bun, Deno)**
* **Command line interpreters (`node file.js`)**

---

### ✅ 9. How is JavaScript embedded in web frameworks like React or Angular?

**Answer:**

* In **React**, JavaScript is written using **JSX** — a syntax extension combining HTML and JavaScript.
* In **Angular**, JavaScript/TypeScript is used in **components** and services, with HTML templates.

---

### ✅ 10. Summary Table – JS Implementation Methods

| Method   | Location            | Use Case               | Example                                 |
| -------- | ------------------- | ---------------------- | --------------------------------------- |
| Inline   | In HTML attribute   | Small event handlers   | `<button onclick="...">`                |
| Internal | In `<script>` tag   | Small apps, quick test | `<script> ... </script>`                |
| External | Separate `.js` file | Best practice          | `<script src="file.js" defer></script>` |

---

### ✅ 11. Where does JS code execute?

| Type        | Environment | Example         |
| ----------- | ----------- | --------------- |
| Client-side | Browser     | Chrome, Firefox |
| Server-side | Node.js     | Express API     |

