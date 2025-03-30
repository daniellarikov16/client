import { FC, useState } from 'react';
import { UserIcon } from '../../assets/icons';
import './userMenuStyles.scss';
import { UserMenuProps } from './UserMenuProps';


export const UserMenu: FC<UserMenuProps> = props => {
    const{items} = props;

    const [show, setShow] = useState<boolean>(false);

    const showMenuHandler = () =>{
        setShow(prev => !prev);
    }

    return(
        <div className='user-menu'>
            <UserIcon onClick={showMenuHandler}/>
            {show && (
                <>
                    <div className='user-menu__menu'>
                        { items.map(item => (
                            <span key={item.id}
                                className='user-menu__menu-item'
                                onClick={item.action}
                            >
                                {item.label}
                            </span>)
                        )}
                    </div>
                    <div className='user-menu__underlay' onClick={showMenuHandler}/>
                </>
            )}
        </div>
    );
}