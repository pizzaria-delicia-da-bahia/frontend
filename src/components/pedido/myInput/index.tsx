import { formatCEP, formatPhoneNumber } from "@util/format";
import { FC } from "react";
import { MyInputStyle } from "./styles";
import PhoneInput from "react-phone-number-input";

export const MyInput: FC<{
  disabled?: boolean;
  name: string;
  placeholder?: string;
  type: "text" | "name" | "address" | "phoneNumber" | "zipCode" | "number";
  value: string | number;
  tabIndex?: number;
  setValue: (value: string | number) => void;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  tag?: string;
}> = ({
  disabled = false,
  name,
  type,
  placeholder,
  tabIndex,
  value,
  min,
  max,
  minLength,
  maxLength,
  setValue,
  tag,
}) => {
  return (
    <MyInputStyle>
      <label htmlFor={name}>{name}</label>
      {type === "phoneNumber" ? (
        <PhoneInput
          placeholder="(71) 9xxxx-xxxx"
          defaultCountry="BR"
          value={(value as string | undefined) || ""}
          onChange={(value) => {
            setValue(value);
          }}
        />
      ) : (
        <input
          name={name}
          id={name.replace(/[* ]/g, "")}
          disabled={disabled}
          placeholder={placeholder}
          tabIndex={tabIndex}
          type={
            type === "zipCode"
              ? "tel"
              : // : type === "phoneNumber"
              // ? "tel"
              type === "address"
              ? "search"
              : type === "name"
              ? "text"
              : type
          }
          // data-mask={type === 'phoneNumber' ? "(00) 90000-0000" : undefined}
          data-mask={type === "zipCode" ? "00.000-000" : undefined}
          autoComplete={
            type === "address"
              ? "street-address"
              : // : type === "phoneNumber"
              // ? "tel-national"
              type === "zipCode"
              ? "postal-code"
              : type === "name"
              ? "given-name"
              : undefined
          }
          min={min ?? undefined}
          maxLength={maxLength ?? undefined}
          minLength={minLength ?? undefined}
          max={max ?? undefined}
          step={type === "number" ? 0.5 : undefined}
          value={value || ""}
          onBlur={(e) => {
            const val = e.target.value.trim();
            // if (type === "phoneNumber") {
            //   setValue(formatPhoneNumber(val, true, false));
            // } else
            if (tag === "local") {
              if (val === "CASA") setValue("");
            } else if (type === "zipCode") {
              if (val.replace(/[^0-9]/g, "").length !== 8) {
                setValue("");
              } else {
                setValue(formatCEP(val));
              }
            } else {
              setValue(e.target.value.trim());
            }
          }}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            const onlyNumbers = e.key.match(/[^\d\+\-)(\s]/g);
            const arrows = e.key.match(
              /(ArrowLeft|ArrowUp|ArrowDown|ArrowRight)/g
            );
            const cutOrCopy = (e.key === "c" || e.key === "v") && e.ctrlKey;
            if (
              ["phoneNumber", "zipCode"].includes(type) &&
              onlyNumbers &&
              !cutOrCopy &&
              !arrows &&
              !["Backspace", "Delete", "Tab"].includes(e.key)
            )
              e.preventDefault();
          }}
        />
      )}
    </MyInputStyle>
  );
};
