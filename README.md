# React useEffect Unexpected Behavior

This repository demonstrates a common but subtle issue in React's `useEffect` hook where the effect runs after every render, despite specifying a dependency array. This often leads to unexpected behavior, such as performance issues or infinite loops if not handled properly.

## Bug Description
The provided code snippet uses `useEffect` to log the current count to the console. Even though the dependency array `[count]` is correctly specified, the effect still runs after every render. This indicates an underlying issue related to how the component's state or props are handled.

## Solution
The solution involves carefully reviewing the component's logic and identifying any hidden state updates or prop changes that might trigger unnecessary re-renders of the component.