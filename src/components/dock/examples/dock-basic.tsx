import { Component, h, State } from '@stencil/core';
import { DockItem } from '../dock.types';

/**
 * Basic Example
 *
 * The Dock component can be used as a place for displaying the app's
 * primary navigation.
 *
 * :::important
 * Avoid having too many items in the Dock, because it will become
 * problematic on mobile devices, when the component is rendered horizontally.
 * :::
 *
 * It is possible to split the dock items into two sections and place one or
 * more items at the bottom of the column. To do so, you can use `isFooterStart`
 * on one of the items, which will act as a separator between the two sections,
 * pushing itself and preceding to the bottom.
 *
 * :::important
 * You must provide `label`s for to improve accesibility! Without labels,
 * screen-readers cannot tell visually impared persons about the content
 * of the Dock.
 * :::
 *
 * It is possible to add extra information about the items using `helperLabel`.
 *
 * When the component is expanded, only the `helpeLabel` is used
 * in the tooltip, when items are hovered.
 * When the component is shrunk, both `label` and `helperLabel` are displayed
 * inside the tooltip.
 *
 * Keep in mind that on a mobile phone, the component will be displayed horizontally
 * and no labels are displayed! Instead, both `label` and `helperLabel` will be used
 * as a tooltip to improve accessibility for screen-reader technologies.
 *
 * However, since hovering is not possible on touch-only mobile devices, users who
 * rely on their vision to navigate the app will only see your chosen icons.
 * So pick them carefully.
 *
 */
@Component({
    tag: 'limel-example-dock-basic',
    shadow: true,
    styleUrl: 'dock-basic.scss',
})
export class DockBasicExample {
    @State()
    private dockItems: DockItem[] = [
        {
            value: 'home',
            label: 'Lime',
            helperLabel: 'Cmd + H',
            selected: true,
            icon: '-lime-logo-outlined-colored',
        },
        {
            value: 'tables',
            label: 'Tables',
            icon: 'insert_table',
            component: { name: 'my-custom-menu' },
        },
        {
            value: 'search',
            label: 'Search',
            icon: 'search',
            iconColor: 'red',
        },
        {
            value: 'person',
            label: 'Preferences',
            icon: 'user',
            isFooterStart: true,
        },
        {
            value: 'setting',
            label: 'Settings',
            icon: 'settings',
        },
    ];

    public render() {
        return [
            <div class="application">
                <limel-dock
                    dockItems={this.dockItems}
                    onChange={this.handleChange}
                />
            </div>,

            <limel-example-value
                value={this.dockItems.find((i) => i.selected)}
            />,
        ];
    }

    private handleChange = (event: CustomEvent<DockItem>) => {
        this.dockItems = this.dockItems.map((item) => {
            return {
                ...item,
                selected: item.value === event.detail?.value,
            };
        });
    };
}
