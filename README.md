## dynamic_form

基于antd的可自定义form表单组件

```
npm i cpf-dynamic-form
```

```ts
export interface IContainer {
   config: IConfig;
   // antd全局配置
   global?: ConfigProviderProps;
   // 表单联动
   control?: (v: IControl) => void;
   changeKeys?: string[];
}

// 表单联动
export interface IControl {
   // 实时获取获取表单对应字段value
   getData: (nameList: string[]) => void;
   // 修改config对象schema字段
   setConfig: (name: string, key: string, val: any) => void;
}

// 表单结构
export interface IConfig {
   // 主题
   theme: Theme;
   schema: ISchema[];
   name: string;
   // antd Form组件props
   formProps?: FormProps;
}

// 单个表单结构
export interface ISchema {
   // value类型
   type: Types;
   title: string;
   ui: Iui;
   // 默认值
   default?: types | undefined;
   name: string;
   // antd form组件校验prop
   rules?: Rule[];
}

export interface Iui {
   // 组件类型
   type: UI;
   theme: Theme;
   // 底层组件props
   options: any;
}

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
   'radio',
   'slider',
   'textArea'
}
```
