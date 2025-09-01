import IconBabyBottle from '@tabler/icons-react/dist/esm/icons/IconBabyBottle'
import IconDiaper from '@tabler/icons-react/dist/esm/icons/IconDiaper'
import IconZzz from '@tabler/icons-react/dist/esm/icons/IconZzz'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { Link } from 'wouter'

const buttons = [
    {
        label: 'Sleeping',
        icon: IconZzz,
        className: 'variantRed',
        path: '/register/sleeping'
    },
    {
        label: 'Feeding',
        icon: IconBabyBottle,
        className: 'variantOrange',
        path: '/register/feed'
    },
    {
        label: 'Diaper',
        icon: IconDiaper,
        className: 'variantPurple',
        path: '/register/diaper'
    }
]

const Actions = () => {
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
