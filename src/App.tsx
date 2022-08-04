import {useState, useEffect} from 'react';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem('my-app-count') || '0');
    }
    catch (e) {
      value = 0;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem('my-app-count', JSON.stringify(count))
  }, [count])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

export default App;
