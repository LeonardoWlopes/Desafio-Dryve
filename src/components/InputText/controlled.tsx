import { Controller } from "react-hook-form";
import { InputText } from ".";
import { IControlledInputText } from "./types";

function ControlledInputText({
    name,
    control,

    ...rest
}: IControlledInputText) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, formState }) => (
                <InputText {...rest} {...field} />
            )}
        />
    );
}

export { ControlledInputText };
