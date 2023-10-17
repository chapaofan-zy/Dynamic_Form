import { Button, ConfigProvider, Form, Input, InputNumber, Radio, Select, Slider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { IConfig, ISchema, UI } from './interface';


export interface IContainer {
    config: IConfig;
    global?: ConfigProviderProps;
    control?: (v: IControl) => void;
    changeKeys?: string[];
}

export interface IControl {
    getData: (nameList: string[]) => void;
    setConfig: (name: string, key: string, val: any) => void;
}

const Container = forwardRef(({ config, global, control, changeKeys }: IContainer, ref) => {

    const [form] = useForm();

    const [cf, setCf] = useState(config);

    const [f, setF] = useState(true);

    useImperativeHandle(
        ref,
        () => {
            return {
                getData: () => form.getFieldsValue()
            }
        },
        [],
    );

    useEffect(() => {
        control && control({
            getData: (nameList: string[]) => form.getFieldsValue(nameList),
            setConfig: (name: string, key: string, val: any) => {
                const tmp = { ...cf }
                const obj: any = tmp.schema.filter(e => {
                    return e.name === name;
                })[0];
                obj[key] = val;
                setCf(tmp);
            }
        }); 

    }, [f]);

    const genComponent = (e: ISchema) => {
        const {ui} = e;
        switch (ui.type) {
            case UI.input:
                return (<Input { ...ui.options }/>);

            case UI.select: 
                return (<Select options={ui.options}/>);

            case UI.inputNumber: 
                return (<InputNumber { ...ui.options }/>);

            case UI.radio: 
                return (<Radio.Group options={ui.options}/>);

            case UI.slider:
                return (<Slider {...ui.options}/>);

            case UI.textArea:
                return (<TextArea {...ui.options}/>);
        
            default:
                return (<></>);
        }

    }

    return (
        <ConfigProvider
            {...global}
        >
            <Form
                name={config.name}
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={(v) => {
                    console.log(v);
                }}
                onValuesChange={(v) => {
                    if (changeKeys && changeKeys.includes(Object.keys(v)[0])) setF(!f);
                }}
                autoComplete="off"
                {...config.formProps}
            >
                {
                    cf.schema.map(e => {
                        return (
                            <Form.Item
                                label={e.title}
                                name={e.name}
                                rules={e.rules}
                                initialValue={e.default}
                                key={e.name}
                            >
                                {genComponent(e)}
                            </Form.Item>
                        )
                    })
                }
                <Form.Item>
                    <Button htmlType='submit'>submit</Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    );
});

export default React.memo(Container);
