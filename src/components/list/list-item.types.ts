import { MenuItem } from '../menu/menu.types';

export interface ListItem<T = any> {
    /**
     * Text to display in the list item.
     */
    text: string;

    /**
     * Additional supporting text to display in the list item.
     */
    secondaryText?: string;

    /**
     * True if the list item should be disabled.
     */
    disabled?: boolean;

    /**
     * Name of the icon to use.
     */
    icon?: string;

    /**
     * Background color of the icon. Overrides `--icon-background-color`.
     */
    iconColor?: string;

    /**
     * True if the list item should be selected.
     */
    selected?: boolean;

    /**
     * Value of the list item.
     */
    value?: T;

    /**
     * List of actions to display as a menu at the end of the item
     */
    actions?: Array<MenuItem | ListSeparator>;

    /**
     * Component used to render in the list
     */
    primaryComponent?: ListComponent;

    /**
     * True if the list item should be removable (only works for limel-chips)
     */
    removeable?: boolean;
}

export interface ListSeparator {
    separator: true;
}

export interface ListComponent {
    /**
     * Name of the custom component
     */
    name: string;

    /**
     * Properties to send to the custom component
     */
    props?: Record<string, any>;
}
