import { Controller } from "react-hook-form";
import { InputText } from ".";
import { IControlledInputText } from "./types";

function ControlledInputText({ name, control, ...rest }: IControlledInputText) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name } }) => (
                <InputText
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value || ""}
                    name={name}
                    {...rest}
                />
            )}
        />
    );
}

export { ControlledInputText };
