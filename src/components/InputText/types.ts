import { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
    flex?: number;
}

export interface IControlledInputText
    extends IInputText,
        InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
}
