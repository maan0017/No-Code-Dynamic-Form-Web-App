import { useDrop } from "react-dnd";
import { useState } from "react";

interface FieldItem {
  type: string;
}

export default function EditArea() {
  const [fields, setFields] = useState<FieldItem[]>([]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "field",
    drop: (item: FieldItem) => {
      setFields((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const renderField = (field: FieldItem, index: number) => {
    switch (field.type) {
      case "Text/Text Field":
        return (
          <input
            key={index}
            type="text"
            placeholder="Enter text"
            className="p-2 w-full border rounded-md"
          />
        );
      case "Checkboxes":
        return (
          <div key={index} className="flex gap-2 items-center">
            <input type="checkbox" id={`check-${index}`} />
            <label htmlFor={`check-${index}`}>Checkbox Option</label>
          </div>
        );
      case "Radio Buttons":
        return (
          <div key={index} className="flex gap-2 items-center">
            <input type="radio" id={`radio-${index}`} name="radio-group" />
            <label htmlFor={`radio-${index}`}>Radio Option</label>
          </div>
        );
      case "Button":
        return (
          <button
            key={index}
            className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        );
      default:
        return (
          <div key={index} className="p-2 border bg-white">
            {field.type}
          </div>
        );
    }
  };

  return (
    <div
      ref={dropRef}
      className={`w-full h-full p-4 flex flex-col gap-4 items-start border-2 border-dotted rounded-sm bg-white ${
        isOver ? "bg-blue-100" : ""
      }`}
    >
      {fields.length === 0 ? (
        <div className="text-gray-400 w-full text-center">Drag & Drop</div>
      ) : (
        fields.map((field, index) => renderField(field, index))
      )}
    </div>
  );
}
