import { Theme, Types, UI } from "../src/interface";

export default {
    theme: Theme.antd,
    name: 'form',
    schema: [
        {
            type: Types.string,
            title: 'tttt',
            default: '123',
            name: 'name',
            ui: {
                type: UI.input,
                theme: Theme.antd,
                options: {
                    placeholder: 'placeholder'
                }
            }
        },
        {
            type: Types.string,
            title: 'tttt',
            default: '123',
            name: 'name11',
            ui: {
                type: UI.input,
                theme: Theme.antd,
                options: {
                    placeholder: 'placeholder'
                }
            }
        },
        {
            type: Types.string,
            title: 'select',
            default: 'lucy',
            name: 'select',
            ui: {
                type: UI.select,
                theme: Theme.antd,
                options: [
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]
            }
        },
        {
            type: Types.number,
            title: 'radio',
            default: 2,
            name: 'radio',
            ui: {
                type: UI.radio,
                theme: Theme.antd,
                options: [
                    {
                        label: '111',
                        value: 0
                    },
                    {
                        label: '222',
                        value: 1
                    },
                    {
                        label: '333',
                        value: 2
                    }
                ]
            }
        }
    ]
}