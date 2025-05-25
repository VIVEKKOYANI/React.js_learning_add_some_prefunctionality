import React, { useEffect, useState } from 'react'

const CheckConsole2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [])

  useEffect(() => {
    setCount(count + 1);
  }, [])
  //➡️ What React does next:
  // After mount, both useEffect hooks run in order (because of the [] dependency array).

  // Each useEffect does: setCount(count + 1)

  // Since count is still 0 at the time both effects run, each one calculates count + 1, which is 1.

  // So both effects call setCount(1), and React batches state updates that result in the same value.

  //➡️ Re-render:
  // React sees that count is already 1, and both updates also set it to 1, so it won’t trigger another re-render.
  console.log('CheckConsole2', count);
  return (
    <div></div>
  )
}

export default CheckConsole2