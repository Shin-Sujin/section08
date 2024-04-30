import "./Editor.css";
import { useState, useRef } from "react";
const Editor = ({ onCreate }) => {
  const contentRef = useRef();
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 todo... "
        onKeyDown={onKeydown}
      />
      <button onClick={onSubmit}>추가 </button>
    </div>
  );
};

export default Editor;
