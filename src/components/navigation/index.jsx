import IconHome from '@tabler/icons-react/dist/esm/icons/IconHome'
import IconHistory from '@tabler/icons-react/dist/esm/icons/IconHistory'
import IconUserCircle from '@tabler/icons-react/dist/esm/icons/IconUserCircle'
import IconSettings from '@tabler/icons-react/dist/esm/icons/IconSettings'
import styles from './styles.module.scss'
import { Link, useLocation } from 'wouter'
import classNames from 'classnames'
import { matchPath } from '@/utils/regex'
import { useTranslation } from 'react-i18next'

const pagesHidden = ['/register', '/settings']

const Navigation = () => {
    const [location] = useLocation()
    const { t } = useTranslation()

    const buttons = [
        {
            icon: IconHome,
            label: t('navigation.home'),
            path: '/'
        },
        {
            icon: IconHistory,
            label: t('navigation.history'),
            path: '/history'
        },
        {
            icon: IconUserCircle,
            label: t('navigation.sharing'),
            path: '/sharing'
        },
        {
            icon: IconSettings,
            label: t('navigation.settings'),
            path: '/settings'
        }
    ]

    if (pagesHidden.some((page) => matchPath(location, page))) {
        return null
    }

    return (
        <div className={styles.container}>
            {buttons.map((button) => (
                <Link
                    href={button.path}
                    className={classNames(styles.actionButton, {
                        [styles.activeButton]: matchPath(location, button.path)
                    })}
                    key={`nav-button-${button.label}`}
                >
                    <button.icon height={22} width={22} />
                    {button.label}
                </Link>
            ))}
        </div>
    )
}

export default Navigation
