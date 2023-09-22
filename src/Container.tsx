import { Button, ConfigProvider, Form, Input, InputNumber, Radio, Select } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { useForm } from 'antd/es/form/Form';
import React, { forwardRef, useImperativeHandle } from 'react'
import { IConfig, ISchema, UI } from '.';


export interface IContainer {
    config: IConfig;
    global?: ConfigProviderProps;
}

const Container = forwardRef(({ config, global }: IContainer, ref) => {

    const [form] = useForm();

    useImperativeHandle(
        ref,
        () => {
            return {
                getData: () => form.getFieldsValue()
            }
        },
        [],
    );

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
                return (<Radio.Group options={ui.options}/>)
        
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
                autoComplete="off"
                {...config.formProps}
            >
                {
                    config.schema.map(e => {
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
