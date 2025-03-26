import { FC } from 'react';
import { UserIcon } from '../../assets/icons';
import './userMenuStyles.scss';

interface MenuItem{
    id: string;
    lable: string;
    action:()=>void;
}

interface UserMenuProps{
    items: Array<MenuItem>
}

export const UserMenu: FC<UserMenuProps> = props => {
    const{items} = props;

    return(
        <div className='user-menu'>
            <UserIcon />
            <div className='user-menu__menu'>
                { items.map(item => (<span key={item.id} >{item.lable}</span>)) }
            </div>
        </div>
    );
}