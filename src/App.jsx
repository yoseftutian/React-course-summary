import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modeIsVisible, setModeIsVisible] = useState(false);

  function showModalHandler() {
    setModeIsVisible(true);
  }

  function hideModalHandler() {
    setModeIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isposting={modeIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
