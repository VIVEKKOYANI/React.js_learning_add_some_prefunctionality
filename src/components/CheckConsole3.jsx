import React, { use, useEffect, useState } from 'react'

const CheckConsole3 = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    setState2(state2 + 1);
  }, []);
  useEffect(() => {
    setState(state + 1);
  }, [state2]);

// 🧠 What Happens Step - by - Step
// 🟢 STEP 1: First Render
// state = 0

// state2 = 0

// This prints:

// CheckConsole3 0 0
// 🟡 STEP 2: useEffect(() => setState2(state2 + 1), []) runs
// It runs only once because of[].

//   setState2(0 + 1) → Now state2 = 1

// This causes a re - render.

// 🟠 STEP 3: Re - render after state2 = 1
// Now:

// state = 0(hasn’t changed yet)

// state2 = 1

// Because state2 changed, the second useEffect runs:

// setState(0 + 1); // now state = 1
// It prints:
// CheckConsole3 1 1
// Another re - render happens because of setState.

// 🔵 STEP 4: Final Render
// state = 2(increased again)

// state2 = 1(unchanged)
// This prints:
// CheckConsole3 2 1


console.log("CheckConsole3", state, state2);
// CheckConsole3 0 0
// CheckConsole3 1 1
// CheckConsole3 2 1


return (
  <div>CheckConsole3</div>
)
}

export default CheckConsole3