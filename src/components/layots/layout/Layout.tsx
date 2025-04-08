import { FC } from "react";
import { LayoutProps } from "./LayoutProps";
import './layoutStyles.scss';
import { LogoIcon } from "../../../assets/icons/LogoIcon";
import { UserMenu } from '../../userMenu';

export const Layout: FC<LayoutProps> = props => {
    const {
        footer,
        headerChild,
        title,
        children

    } = props;

    return(
        <div className="layout">
            <div className="layout__header">
                <div>
                    <LogoIcon />
                </div>
                <div>
                    <div>{ title ?? 'База сотрудников' }</div>
                    <div>{ headerChild }</div>
                </div>
                <div className="layout__user-menu">
                    <UserMenu items={[{
                        id: 'go_to_administrator',
                        action:() => {},
                        label:'Администрирование'
                    }, {
                        id: 'exit',
                        action: () => {},
                        label: 'Выйти'
                    }]} />
                </div>
            </div>
            <div className="layout__body">{ children }</div>
            <div>{ footer }</div>
        </div>
    )
}