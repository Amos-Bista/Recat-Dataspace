import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const TextFieldEditor = ({ value, onChange }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(value);
  }, [value]);

  const handleBlur = (newContent) => {
    setContent(newContent);
    onChange(newContent);
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      tabIndex={1}
      onBlur={handleBlur}
      onChange={() => {}}
    />
  );
};

export default TextFieldEditor;
