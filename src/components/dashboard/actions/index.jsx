import IconBabyBottle from '@tabler/icons-react/dist/esm/icons/IconBabyBottle'
import IconDiaper from '@tabler/icons-react/dist/esm/icons/IconDiaper'
import IconZzz from '@tabler/icons-react/dist/esm/icons/IconZzz'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { Link } from 'wouter'
import { useTranslation } from 'react-i18next'

const Actions = () => {
    const { t } = useTranslation()
    const buttons = [
        {
            label: t('register.sleeping'),
            icon: IconZzz,
            className: 'variantRed',
            path: '/register/sleeping'
        },
        {
            label: t('register.feeding'),
            icon: IconBabyBottle,
            className: 'variantOrange',
            path: '/register/feed'
        },
        {
            label: t('register.diaper'),
            icon: IconDiaper,
            className: 'variantPurple',
            path: '/register/diaper'
        }
    ]

    return (
        <div className={styles.container}>
            {buttons.map((button) => (
                <Link
                    href={button.path}
                    key={`action-button-${button.label}`}
                    className={classNames(styles.actionButton, styles[button.className])}
                >
                    <button.icon height={32} width={32} />
                    {button.label}
                </Link>
            ))}
        </div>
    )
}

export default Actions
