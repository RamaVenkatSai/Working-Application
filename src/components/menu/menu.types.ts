/**
 * The direction in which the menu should open.
 * - `left-start`: Menu opens to the left, aligned with the start of the trigger.
 * - `left`: Menu opens to the left, aligned with the center of the trigger.
 * - `left-end`: Menu opens to the left, aligned with the end of the trigger.
 * - `right-start`: Menu opens to the right, aligned with the start of the trigger.
 * - `right`: Menu opens to the right, aligned with the center of the trigger.
 * - `right-end`: Menu opens to the right, aligned with the end of the trigger.
 * - `top-start`: Menu opens to the top, aligned with the start of the trigger.
 * - `top`: Menu opens to the top, aligned with the center of the trigger.
 * - `top-end`: Menu opens to the top, aligned with the end of the trigger.
 * - `bottom-start`: Menu opens to the bottom, aligned with the start of the trigger.
 * - `bottom`: Menu opens to the bottom, aligned with the center of the trigger.
 * - `bottom-end`: Menu opens to the bottom, aligned with the end of the trigger.
 * @public
 */
export type OpenDirection =
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end';

/**
 * Any element in the UI can be configured to open a menu.
 * By default width of menu's dropdown is based on the items in the dropdown.
 * However, size of the dropdown menu that opens can be controlled
 * based on design requirements.
 * - `inherit-from-items`: This is the default layout in which the widest item
 * in the menu list sets the width of the dropdown menu.
 * - `inherit-from-trigger`: Width of the dropdown menu will as wide as the
 * width of the element that triggers the menu.
 * - `inherit-from-menu`: Width of the dropdown menu will be as wide as the
 * width of the `limel-menu` element itself. Useful when a menu surface needs
 * to be opened programmatically, without a visible UI element.
 * @public
 */
export type SurfaceWidth =
    | 'inherit-from-items'
    | 'inherit-from-trigger'
    | 'inherit-from-menu';

/**
 * Menu item.
 * @public
 */
export interface MenuItem<T = any> {
    /**
     * The additional supporting text is used for shortcut commands and displayed in the menu item.
     */
    commandText?: string;

    /**
     * Text to display in the menu item.
     */
    text: string;

    /**
     * Additional supporting text to display in the menu item.
     */
    secondaryText?: string;

    /**
     * True if the menu item should be disabled.
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
     * True if the menu item should be selected.
     */
    selected?: boolean;

    /**
     * If specified, will display a notification badge on the buttons in the dock.
     */
    badge?: number | string;

    /**
     * Value of the menu item.
     */
    value?: T;
}
