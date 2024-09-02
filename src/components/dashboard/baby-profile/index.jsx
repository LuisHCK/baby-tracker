import styles from './styles.module.scss'
import { useContext, useMemo } from 'react'
import { AppContext } from '@/context/app'
import { differenceInMonths, parse } from 'date-fns'

const BabyProfile = () => {
    const { babyInfo, units } = useContext(AppContext)
    const age = useMemo(() => {
        if (!babyInfo?.birthday) return

        const birthday = parse(babyInfo?.birthday, 'yyyy-MM-dd', new Date())
        return differenceInMonths(new Date(), birthday)
    }, [babyInfo])

    return (
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <img src="https://placehold.co/400x400?text=Baby" alt="baby" />
            </div>
            <div className={styles.summary}>
                <h2 className={styles.babyName}>{babyInfo?.name}</h2>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>Weight</div>
                        <div className={styles.statValue}>{babyInfo?.weight}{units?.weightUnit}</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>Age</div>
                        <div className={styles.statValue}>{age}m</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>Height</div>
                        <div className={styles.statValue}>{babyInfo?.height}{units?.lengthUnit}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BabyProfile
