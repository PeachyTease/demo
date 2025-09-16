import { useState, useRef, useEffect } from "react";

interface EditableContentProps {
  children: React.ReactNode;
  className?: string;
  onSave?: (content: string) => void;
  tag?: keyof React.JSX.IntrinsicElements;
}

export default function EditableContent({ 
  children, 
  className = "", 
  onSave,
  tag: Tag = "div"
}: EditableContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContent(contentRef.current.innerText);
    }
  }, [children]);

  const handleClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.focus();
      }
    }, 0);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (contentRef.current) {
      const newContent = contentRef.current.innerText;
      setContent(newContent);
      onSave?.(newContent);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      contentRef.current?.blur();
    }
  };

  return (
    <Tag
      ref={contentRef}
      className={`editable-content ${className}`}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      data-testid="editable-content"
    >
      {children}
    </Tag>
  );
}
