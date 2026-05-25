# React Learning Guide: 04-Cards-Project

Welcome to your React learning guide! We will go through the `04-cards-project` code line by line to help you understand how React works.

## 1. The Entry Point: `src/main.jsx`

In every React application, there has to be a starting point that connects your React code to the HTML file (`index.html`). This is typically `main.jsx`.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Line-by-Line Breakdown:**
- `import React from 'react'`: Imports the core React library. It allows us to write JSX (the HTML-like syntax).
- `import ReactDOM from 'react-dom/client'`: Imports the ReactDOM library, which is responsible for rendering React components into the actual browser DOM (Document Object Model).
- `import App from './App.jsx'`: Imports the main `App` component from the `App.jsx` file. Components are the building blocks of React.
- `import './index.css'`: Imports the global CSS styles (including Tailwind CSS).
- `ReactDOM.createRoot(document.getElementById('root'))`: This finds the empty `<div id="root"></div>` in your `index.html` file and prepares it to be the "root" of your React application.
- `.render(...)`: This tells React what to draw inside that root `div`.
- `<React.StrictMode>`: A special wrapper component that checks your code for potential problems and best practices during development. It does not render anything visible.
- `<App />`: This is your main Application component being rendered to the screen.

---

## 2. The Main Component: `src/App.jsx`

`App.jsx` serves as the container for your entire application.

```jsx
import Card from './components/Card'
```
- **Line 1:** Imports the `Card` component that you created in the `components` folder.

```jsx
const App = () => {
```
- **Line 3:** Defines a functional React component named `App`. In modern React, components are just JavaScript functions that return JSX.

```jsx
  const jobOpenings = [
    {
      brandLogo: "...",
      companyName: "Meta",
      // ... other data
    },
    // ... more objects
  ];
```
- **Lines 5-106:** This is a JavaScript array of objects containing data for different job openings. In a real application, this data might come from a backend server or an API.

```jsx
  return (
    <div className='min-h-screen w-full bg-slate-100 p-8 flex gap-8 flex-wrap font-sans'>
```
- **Line 109-110:** The `return` statement dictates what HTML the component will render. The `<div className="...">` uses Tailwind CSS classes for styling (e.g., `min-h-screen` makes it take up the full screen height, `bg-slate-100` gives it a light gray background, `flex` enables flexbox). *Note: In React, we use `className` instead of `class` because `class` is a reserved keyword in JavaScript.*

```jsx
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
```
- **Lines 111-115:** This is a core React concept: **Rendering Lists**. 
  - The `{}` brackets allow us to write pure JavaScript inside JSX.
  - `jobOpenings.map(...)` loops through the array. For every `elem` (the job object), it returns a block of JSX.
  - `key={idx}`: When React renders a list, it needs a unique `key` for each item so it can keep track of items if they are added, removed, or reordered efficiently.
  - `<Card ... />`: Here, we are calling our `Card` component multiple times.
  - `company={elem.companyName}`: This is passing **Props** (properties) to the `Card` component. We are taking data from our array and handing it down to the `Card`.

```jsx
    </div>
  )
}
export default App
```
- **Lines 116-120:** We close our tags and export the `App` component so it can be imported in `main.jsx`.

---

## 3. The Reusable Component: `src/components/Card.jsx`

Components allow you to split the UI into independent, reusable pieces.

```jsx
import { Bookmark } from 'lucide-react'
```
- **Line 1:** Imports a `Bookmark` icon from the `lucide-react` icon library.

```jsx
const Card = (props) => {
```
- **Line 2:** Defines the `Card` functional component. It accepts a parameter called `props`. `props` is an object containing all the data that was passed down to it from `App.jsx` (like `props.company`, `props.post`, etc.).

```jsx
    return (
        <div className="h-[330px] w-[280px] bg-white rounded-[30px] p-[30px] flex flex-col justify-between">
```
- **Lines 4-5:** The main container for the card, styled using Tailwind CSS classes for height, width, background color, rounded corners, padding, and flexbox.

```jsx
            <div>
                <div className="flex items-start justify-between mb-[30px]">
                    <img className="..." src={props.brandLogo} alt="brand logo" />
                    <button className="...">Save <Bookmark size={10} /> </button>
                </div>
```
- **Lines 6-10:** This section renders the top part of the card.
  - `<img src={props.brandLogo} ... />`: We use `{props.brandLogo}` dynamically as the image source. The `{}` tells React to evaluate the JavaScript variable.
  - `<Bookmark size={10} />`: Renders the icon component we imported at the top.

```jsx
                <div>
                    <h3 className="text-[16px] font-medium">{props.company} <span className="...">{props.datePosted}</span></h3>
                    <h2 className="text-[21px] font-medium">{props.post}</h2>
                    <div className="flex mt-2.5 gap-1.5">
                        <h4 className="...">{props.tag1}</h4>
                        <h4 className="...">{props.tag2}</h4>
                    </div>
                </div>
            </div>
```
- **Lines 11-20:** Renders the center part of the card. Notice how we sprinkle `{props.company}`, `{props.datePosted}`, `{props.post}`, `{props.tag1}`, and `{props.tag2}` throughout the HTML. React will automatically inject the specific data for each individual card here!

```jsx
            <div className="flex items-center justify-between border-t-[1.5px] border-[#d7d7d7ce] pt-[15px]">
                <div>
                    <h3 className="text-[17px] font-medium mb-1">{props.pay}</h3>
                    <p className="text-[10px] text-[#8b8b8b]">Mumbai, India</p>
                </div>
                <button className="bg-[#121212] text-white px-4 py-2 border-none rounded-[5px] text-[12px]">Apply Now</button>
            </div>
        </div>
    )
}
```
- **Lines 21-29:** The bottom section showing the pay `{props.pay}` and an "Apply Now" button. 

```jsx
export default Card
```
- **Line 31:** Exports the `Card` component so `App.jsx` can use it.

## Key Takeaways
1. **Components:** They are just JavaScript functions that return UI (JSX). They let you reuse code.
2. **JSX:** It looks like HTML but allows you to inject JavaScript using curly braces `{}`.
3. **Props:** Short for "properties." It's how you pass data from a parent component (`App.jsx`) down to a child component (`Card.jsx`).
4. **Mapping:** The `.map()` array method is the standard way to dynamically render a list of elements based on an array of data.
5. **Tailwind CSS:** Instead of writing separate CSS files, you use utility classes directly inside the `className` attribute to style elements rapidly.
