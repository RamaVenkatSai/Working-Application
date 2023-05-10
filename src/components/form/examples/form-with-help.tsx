import { Component, h, State } from '@stencil/core';
import { schema } from './help-form-schema';

/**
 * Form elements with contextual help
 * It's possible to add contextual help to any form element.
 * The string you provide can be in Markdown format,
 * empowering you present a rich-text experience to the user,
 * including bullet points, hyperlinks, etc…
 * Read more on [Help](#/component/limel-help) component.
 *
 * :::note
 * This "help" is not the same as providing a so called "helper text".
 * Helper text is a short description of the input fields
 * that becomes visible when the user click on the fields.
 *
 * Check out the [Input field Component](#/component/limel-input-field)
 * examples, where we describe how to properly use `helperText`, and `placeholder`.
 *
 * In the context of forms, helper texts are also used to
 * provide validation feedback to the user, about an invalid input.
 * :::
 * @link help-form-schema.ts
 */
@Component({
    tag: 'limel-example-form-with-help',
    shadow: true,
})
export class NestedFormExample {
    @State()
    private formData: object = {};

    public render() {
        return [
            <limel-form
                onChange={this.handleFormChange}
                value={this.formData}
                schema={schema}
            />,
            <limel-example-value value={this.formData} />,
        ];
    }

    private handleFormChange = (event) => {
        this.formData = event.detail;
    };
}
