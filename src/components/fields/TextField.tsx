import { FC } from "react";
import { TextField } from "../../utils/FieldData";

const Text: FC<TextField> = (props) => {
  return (
    <div>
      <label>{props.name}</label>
      {props.help_text ? <></>:()}
      <input placeholder={props.placeholder} value={props.value} />
    </div>
  );
};

export default Text;
