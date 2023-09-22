import { FormProps, Rule } from "antd/es/form";

import Container from './Container';

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
    name: string;
    formProps?: FormProps;
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

export default Container;