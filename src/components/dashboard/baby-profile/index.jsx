import styles from './styles.module.scss'
import { useContext, useMemo } from 'react'
import { AppContext } from '@/context/app'
import { differenceInMonths, parse } from 'date-fns'
import { useTranslation } from 'react-i18next'

const BabyProfile = () => {
    const { currentBaby, units, photo } = useContext(AppContext)
    const { t } = useTranslation()
    const age = useMemo(() => {
        if (!currentBaby?.birthday) return

        const birthday = parse(currentBaby?.birthday, 'yyyy-MM-dd', new Date())
        return differenceInMonths(new Date(), birthday)
    }, [currentBaby])

    const getCurrentPhoto = () => {
        if (photo) return photo

        if (currentBaby?.gender === 'male') return '/teddy-1.webp'
        if (currentBaby?.gender === 'female') return '/teddy-2.webp'

        return '/teddy-1.webp'
    }

    return (
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <img
                    src={getCurrentPhoto()}
                    alt={t('baby_profile.photo_alt', { name: currentBaby?.name })}
                    className={styles.photo}
                />
            </div>
            <div className={styles.summary}>
                <h2 className={styles.babyName}>{currentBaby?.name}</h2>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>{t('baby_profile.weight')}</div>
                        <div className={styles.statValue}>
                            {currentBaby?.weight}
                            {units?.weightUnit}
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>{t('baby_profile.age')}</div>
                        <div className={styles.statValue}>{age}m</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>{t('baby_profile.height')}</div>
                        <div className={styles.statValue}>
                            {currentBaby?.height}
                            {units?.lengthUnit}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BabyProfile
