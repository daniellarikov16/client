export interface MenuItems{
    id: string;
    label: string;
    action: () => void;
}

export interface UserMenuProps{
    items: Array<MenuItems>;
}