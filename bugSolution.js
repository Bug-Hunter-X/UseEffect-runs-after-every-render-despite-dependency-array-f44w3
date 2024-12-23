```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This effect runs only when the count changes
    console.log('Count updated:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```