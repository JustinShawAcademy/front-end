## Components
### SearchBar.jsx
#### React Form Handeling
Before React 18, if you didn't use state for every (form) input, you were using "Uncontrolled Components" (via `useRef`), which was often looked down upon as "not the React way" for beginners. React 18 changed the game by making the native HTML `<form action={...}>` a first-class citizen, allowing us to write cleaner code that feels more like standard web development.

##### The Controlled Pattern (Classic way)
(Everyone had to do this before React 18)
**Concept**: React state is the "Single Source of Truth." The input value is synced to a variable on every single keystroke.

- When to use:
    - Live validation (e.g., "Password too short" appears while typing).
    - Live filtering (e.g., a list that shrinks as you type).
    - Disabling a "Submit" button until the form is valid.

Example:
```jsx
function SearchComponent() {
  const [value, setValue] = useState(""); // Syncs every keystroke

  const handleSubmit = (e) => {
    e.preventDefault(); // Required to stop page refresh
    console.log("Submitted:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button>Search</button>
    </form>
  );
}
```

Or we could do:
```jsx
function SearchComponent() {
  const [value, setValue] = useState(""); // Syncs every keystroke

  handleChange = (e) => {
    const value = e.target.value
    setValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Required to stop page refresh
    console.log("Submitted:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value} 
        onChange={handleChange} 
      />
      <button>Search</button>
    </form>
  );
}
```

##### The Form Action Pattern (Mordern Way)
(Introduced with React 18)
**Concept**: The browser/DOM holds the data. React only "grabs" the data at the moment of submission using the FormData API.

- When to use:
    - Simple data entry (Login, Search, Adding an item).
    - When you want better performance (no re-renders while typing).
    - When you want "cleaner" code with less boilerplate

Example:
```jsx
function AddItemComponent() {
  // formData is automatically passed by React
  function handleAction(formData) {
    const itemName = formData.get("itemInputName"); // Identify by 'name' attribute
    console.log("Processing:", itemName);
  }

  return (
    <form action={handleAction}>
      <input name="itemInputName" type="text" />
      <button type="submit">Add Item</button>
    </form>
  );
}
```

##### Comparing Controlled and Form Action
| Feature | Controlled (State) | Form Action (FormData) |
| :--- | :--- | :--- |
| **Re-renders** | On every keystroke. | Only on submission. |
| **State Required?** | Yes, `useState` for every input. | No. |
| **Complexity** | High (more code to write). | Low (closer to standard HTML). |
| **Live Feedback** | Easy (React knows the value live). | Hard (React only knows on submit). |
| **Boilerplate** | High (Value/OnChange/PreventDefault). | Low (Just use `name` and `action`). |