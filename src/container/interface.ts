import { Rule } from "rc-field-form/lib/interface";

type types = object | string | number | null | undefined | boolean;

export enum Types {
    'object',
    'string',
    'number',
    'null',
    'undefined',
    'boolean'
}

export enum Theme {
    'antd'
}

export enum UI {
    'input',
    'select',
    'inputNumber',
    'radio'
}

export interface IConfig {
    theme: Theme;
    schema: ISchema[];
}

export interface ISchema {
    type: Types;
    title: string;
    ui: Iui;
    default?: types | undefined;
    name: string;
    rules?: Rule[];
}

export interface Iui {
    type: UI;
    theme: Theme;
    options: any;
}