import { useState } from "react";

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  onImageChange?: (newSrc: string) => void;
}

export default function EditableImage({ 
  src, 
  alt, 
  className = "", 
  onImageChange 
}: EditableImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newSrc = e.target?.result as string;
          setImageSrc(newSrc);
          onImageChange?.(newSrc);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className={`image-editable ${className}`} onClick={handleImageClick} data-testid="editable-image">
      <img src={imageSrc} alt={alt} className="w-full h-auto" />
    </div>
  );
}
