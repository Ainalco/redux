  import React from "react";
  import "./App.css"
  import CounterView from "./features/counter/CounterView";
  import PostsView from "./features/posts/PostsView";



function App() {
  return (
    <div>
      <h2>Counter App</h2>
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
