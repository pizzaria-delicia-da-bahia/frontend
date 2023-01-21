import { FC } from "react";
import { MyInputStyle } from "./styles";

export const MyInput: FC<{
  disabled?: boolean;
  name: string;
  placeholder?: string;
  type: "text" | "name" | "address" | "phoneNumber" | "number";
  value: string | number;
  setValue: (value: string | number) => void;
  min?: number;
  max?: number;
}> = ({
  disabled = false,
  name,
  type,
  placeholder,
  value,
  min,
  max,
  setValue,
}) => {
  return (
    <MyInputStyle>
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        id={name}
        disabled={disabled}
        placeholder={placeholder}
        type={
          type === "phoneNumber" ? "tel" : type === "address" ? "search" : type
        }
        autoComplete={
          type === "address"
            ? "street-address"
            : type === "phoneNumber"
            ? "tel-national"
            : type === "name"
            ? "given-name"
            : undefined
        }
        min={min ?? undefined}
        max={max ?? undefined}
        step={type === "number" ? 0.5 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          const onlyNumbers = e.key.match(/[^\d-)(\s]/g);
          const cutOrCopy = (e.key === "c" || e.key === "v") && e.ctrlKey;
          // !["Control", "Alt", 'Shift'].includes(e.key)
          if (
            type === "phoneNumber" &&
            onlyNumbers &&
            !cutOrCopy &&
            !["Backspace", "Delete"].includes(e.key)
          )
            e.preventDefault();
        }}
      />
    </MyInputStyle>
  );
};
