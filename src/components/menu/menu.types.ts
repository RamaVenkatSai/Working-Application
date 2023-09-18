import { ListSeparator } from '../../interface';

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
 */
export type SurfaceWidth =
    | 'inherit-from-items'
    | 'inherit-from-trigger'
    | 'inherit-from-menu';

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

    /**
     * A way of defining a sub-menu for an item.
     * Either set it to an array of `MenuItem`s
     * Or use Lazy loading by setting it to a function of type `MenuLoader`
     * If it's undefined/null it will be considered an item without a sub-menu
     */
    items?: Array<MenuItem<T> | ListSeparator> | MenuLoader;

    /**
     * What parent the item has.
     * It's used to render the breadcrumbs history
     * Mostly handled by the menu itself
     */
    parentItem?: MenuItem<T>;
}

/**
 * A search function that takes a search-string as an argument, and returns
 * a promise that will eventually be resolved with an array of `MenuItem`:s.
 * @param {string} query A search query. What the user has written
 * in the input field of a limel-menu.
 * @returns {Promise<MenuItem[]>} The search result.
 */
export type MenuSearcher = (query: string) => Promise<MenuItem[]>;

/**
 * A loader function that takes a `MenuItem` as an argument, and returns
 * a promise that will eventually be resolved with an array of `MenuItem`:s,
 * that is the sub-menu of the given item.
 * @param {MenuItem} item The parent item to load the sub-menu for.
 * @returns {Promise<MenuItem[]>} The sub-menu's items of the given item
 */
export type MenuLoader = (
    item: MenuItem
) => Promise<Array<MenuItem | ListSeparator>>;
