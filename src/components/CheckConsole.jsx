import React, { useEffect, useState } from 'react'

export const CheckConsole = () => {
  const [count, setCount] = useState(0);

  // This effect runs after every render (no dependency array), so if it were uncommented, it would cause an infinite re-render loop, because each render would trigger a setCount, which causes another render, and so on.
  useEffect(() => {
    setCount(count => count + 1);
  });

  useEffect(() => {
    setCount(c => c + 1);
  }, []);

  console.log('CheckConsole', count);

  return (
    <div>CheckConsole</div>
  )
}
