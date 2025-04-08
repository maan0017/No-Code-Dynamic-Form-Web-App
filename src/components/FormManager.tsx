import EditArea from "./EditArea";
import FieldOption from "./FieldOption";

export default function FormManager() {
  return (
    <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="m-2 border-2 shadow-xl shadow-black">
        <div className="flex justify-center items-center m-1">
          <div className="mx-1">{"Form Name :"}</div>
          <input
            type="text"
            placeholder="form name"
            className="w-[50vw] mx-1 border-2 p-2 rounded-sm bg-gray-200"
          />
          <button
            type="submit"
            className="bg-red-300 rounded-md mx-1 w-28 h-10 text-nowrap cursor-pointer hover:bg-red-400 hover:font-bold"
          >
            Save Form
          </button>
        </div>
        <div className="bg-white p-1 flex justify-center">
          <div className="min-w-[50vw] h-[75vh] text-gray-500 font-bold">
            <EditArea />
          </div>
          <div className="w-full max-h-[74vh] m-1 p-2 border-l-2">
            <FieldOption type="Text/Text Field" />
            <FieldOption type="Checkboxes" />
            <FieldOption type="Radio Buttons" />
            <FieldOption type="Button" />
          </div>
        </div>
      </div>
    </div>
  );
}
