import { FC } from "react";

interface FieldOptionProps {
  type: string;
}

const FieldOption: FC<FieldOptionProps> = (props) => {
  return (
    <div
      className="w-full m-1 p-2 text-center bg-gray-200 hover:bg-gray-300 cursor-grab rounded-sm
        hover:font-bold hover:shadow-sm shadow-blue-300"
    >
      {props.type}
    </div>
  );
};

export default FieldOption;
