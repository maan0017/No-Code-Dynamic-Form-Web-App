import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { DragSourceMonitor } from "react-dnd";

interface FieldOptionProps {
  type: string;
}

const FieldOption: FC<FieldOptionProps> = (props) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "field",
    item: { type: props.type },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef as React.Ref<HTMLDivElement>}
      className="w-full m-1 p-2 text-center bg-gray-200 hover:bg-gray-300 cursor-grab rounded-sm
        hover:font-bold hover:shadow-sm shadow-blue-300"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {props.type}
    </div>
  );
};

export default FieldOption;
