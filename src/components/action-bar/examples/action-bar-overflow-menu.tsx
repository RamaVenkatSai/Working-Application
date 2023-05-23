import { Component, h, State } from '@stencil/core';
import { ActionBarItem } from '../action-bar.types';
import { ListSeparator } from 'src/interface';

/**
 * Overflow menu
 * When the action bar items don't fit in the available space,
 * an overflow button is automatically added as the last item on the action bar.
 *
 * The menu indicates the quantity of the actions which are currently invisible for the users.
 * Clicking on the overflow button opens a menu with the remaining actions that didn't fit
 * in the available space.
 *
 * :::important
 * For the overflow menu work properly, `limel-action-bar` cannot be a direct child of
 * another web-component. It has to be wrapped inside a block element, like a `<div />`.
 *
 */
@Component({
    tag: 'limel-example-action-bar-overflow-menu',
    shadow: true,
    styleUrl: 'action-bar-overflow-menu.scss',
})
export class ActionBarOverflowMenuExample {
    @State()
    private actionBarItems: Array<ActionBarItem | ListSeparator> = [
        {
            text: 'Justify left',
            icon: 'align_left',
            iconOnly: true,
        },
        {
            text: 'Justify full',
            icon: 'align_justify',
            iconOnly: true,
        },
        {
            text: 'Justify center',
            icon: 'align_center',
            iconOnly: true,
        },
        {
            text: 'Justify right',
            icon: 'align_right',
            iconOnly: true,
        },
        { separator: true },
        {
            text: 'Bold',
            commandText: '⌘ B',
            icon: 'bold',
            iconOnly: true,
        },
        {
            text: 'Italic',
            commandText: '⌘ I',
            icon: 'italic',
            iconOnly: true,
        },
        {
            text: 'Underline',
            commandText: '⌘ U',
            icon: 'underline',
            iconOnly: true,
        },
        { separator: true },
        {
            text: 'List',
            icon: 'list',
            iconOnly: true,
        },
        {
            text: 'Numbered list',
            icon: 'numbered_list',
            iconOnly: true,
        },
        {
            text: 'Blockquote',
            icon: 'quote_right',
            iconOnly: true,
        },
        {
            text: 'Emoji',
            icon: 'happy',
            iconOnly: true,
        },
        { separator: true },
        {
            text: 'Picture',
            icon: 'picture',
            iconOnly: true,
        },
        {
            text: 'Link',
            icon: 'link',
            iconOnly: true,
        },
        {
            text: 'Table',
            icon: 'insert_table',
            iconOnly: true,
        },
        { separator: true },
        {
            text: 'Copy',
            commandText: '⌘ C',
            icon: 'copy',
            iconOnly: true,
        },
        {
            text: 'Cut',
            commandText: '⌘ X',
            icon: 'cut',
            iconOnly: true,
        },
        {
            text: 'Paste',
            commandText: '⌘ V',
            icon: 'paste',
            iconOnly: true,
        },
        {
            text: 'Delete',
            commandText: '⌘ ⌫',
            icon: 'trash',
            iconOnly: true,
        },
        {
            text: 'Find & Replace',
            commandText: '⌘ ⇧ F',
            icon: 'search',
            iconOnly: true,
        },
        { separator: true },
        {
            text: 'Code',
            icon: 'source_code',
            iconOnly: true,
        },
    ];

    public render() {
        return (
            <div class="application is-resizable">
                <limel-action-bar
                    accessibleLabel="Toolbar"
                    actionBarItems={this.actionBarItems}
                    layout="fullWidth"
                />
            </div>
        );
    }
}
