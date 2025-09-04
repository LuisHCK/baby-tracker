import styles from './styles.module.scss'
import { useContext, useMemo } from 'react'
import { AppContext } from '@/context/app'
import { differenceInMonths, parse } from 'date-fns'
import { useTranslation } from 'react-i18next'

const BabyProfile = () => {
    const { babyInfo, units, photo } = useContext(AppContext)
    const { t } = useTranslation()
    const age = useMemo(() => {
        if (!babyInfo?.birthday) return

        const birthday = parse(babyInfo?.birthday, 'yyyy-MM-dd', new Date())
        return differenceInMonths(new Date(), birthday)
    }, [babyInfo])

    const getCurrentPhoto = () => {
        if (photo) return photo

        if (babyInfo?.gender === 'male') return '/teddy-1.webp'
        if (babyInfo?.gender === 'female') return '/teddy-2.webp'

        return '/teddy-1.webp'
    }

    return (
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <img src={getCurrentPhoto()} alt={t('baby_profile.photo_alt', { name: babyInfo?.name })} className={styles.photo} />
            </div>
            <div className={styles.summary}>
                <h2 className={styles.babyName}>{babyInfo?.name}</h2>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>{t('baby_profile.weight')}</div>
                        <div className={styles.statValue}>{babyInfo?.weight}{units?.weightUnit}</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>{t('baby_profile.age')}</div>
                        <div className={styles.statValue}>{age}m</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>{t('baby_profile.height')}</div>
                        <div className={styles.statValue}>{babyInfo?.height}{units?.lengthUnit}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BabyProfile
