import { FC } from "react";
import { Layout } from "../../components/layots";
import './departmentsPageStyles.scss'

export const DepartmentsPage: FC = () => {
    return(
        <Layout>
            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <select></select>
                    <div>Список сотрудников</div>
                </div>
                <div className="dep-page__content-container">  {/* Добавлен класс */}
                    <div>
                        <span>ФИО</span>
                        <div>*</div>
                    </div>
                    <div>
                        <div>Личный данные</div>
                        <div>Данные о работе</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}