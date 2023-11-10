import { MenuItem } from '../menu/menu.types';

/**
 * Renders the button in the action bar without their labels.
 * Does not affect the items that are overflown into the overflow menu.
 * @public
 */
export type ActionBarItem = ActionBarItemOnlyIcon | ActionBarItemWithLabel;

/**
 * Action bar item that only displays an icon.
 * @public
 */
interface ActionBarItemOnlyIcon extends MenuItem {
    iconOnly: true;
    icon: string;
}

/**
 * Action bar item that displays an icon and a label.
 * @public
 */
interface ActionBarItemWithLabel extends MenuItem {
    iconOnly?: false;
}
