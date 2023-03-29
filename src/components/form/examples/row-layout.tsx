import { Component, h, State } from '@stencil/core';
import { FormField } from '../form-field';
import { schema } from './row-layout-schema';

/**
 * Row layout
 *
 * @link row-layout-schema.ts
 */
@Component({
    tag: 'limel-example-form-row-layout',
    shadow: true,
})
export class FormRowLayoutExample {
    @State()
    private formData: object = {};

    public render() {
        return [
            <limel-form
                onChange={this.handleFormChange}
                value={this.formData}
                schema={schema}
            >
                <FormField name="info.notification">
                    <limel-switch />
                </FormField>
            </limel-form>,
        ];
    }

    private handleFormChange = (event) => {
        this.formData = event.detail;
    };
}
