  import { useEffect, useState } from 'react';

  const CounterAnimation = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 10);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <div>{count}</div>;
  };

  export default CounterAnimation;
