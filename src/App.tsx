import { useState } from "react";
import "./App.css";
import { EditorState } from "draft-js";
import TextEditor from "./components/TextEditor";

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="">
      <h2>EDITOR</h2>
      {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
      <TextEditor editorState={editorState} setEditorState={setEditorState} />
    </div>
  );
}

export default App;
