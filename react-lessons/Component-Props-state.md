# React Notes: Components, Props, and State

This repository contains notes and examples of three essential React concepts:  
➡️ **Components**  
➡️ **Props**  
➡️ **State**

---

## 📌 1. Components
- Components are the **building blocks** of a React app.  
- They let you split the UI into **independent, reusable pieces**.  
- A component is usually a **JavaScript function** that returns **JSX**.  

---

## 📌 2. Props
- **Props** (short for *properties*) are used to **pass data from parent to child components**.  
- They make components **dynamic and reusable**.  
- Props are **read-only**.  

---

## 📌 3. State
- **State** is data that a component **manages internally**.  
- Unlike props, state is **mutable** (can change).  
- When state changes, the component **re-renders automatically**.  

---

## 📝 Example: Component + Props + State Together

The following code shows how to use **all three** concepts in one simple app:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React Example: Components, Props, and State</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
      // ✅ A simple functional component (Child)
      function Greeting(props) {
        return <h2>Hello, {props.name}!</h2>;
      }

      // ✅ Another component with State
      function Counter() {
        const [count, setCount] = React.useState(0);

        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
          </div>
        );
      }

      // ✅ Parent Component (Homepage)
      function Homepage() {
        return (
          <div>
            <h1>My Health App</h1>
            <Greeting name="Aljubina" />   {/* Props Example */}
            <Counter />                    {/* State Example */}
          </div>
        );
      }

      // Render the parent component
      const root = ReactDOM.createRoot(document.getElementById("app"));
      root.render(<Homepage />);
    </script>
  </body>
</html>
