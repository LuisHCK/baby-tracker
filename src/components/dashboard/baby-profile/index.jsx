import styles from './styles.module.scss'

const BabyProfile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <img src="https://placehold.co/400x400?text=Baby" alt="baby" />
            </div>
            <div className={styles.summary}>
                <h2 className={styles.babyName}>Baby Name</h2>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>Weight</div>
                        <div className={styles.statValue}>100kg</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>Age</div>
                        <div className={styles.statValue}>2 years</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statLabel}>Height</div>
                        <div className={styles.statValue}>72cm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BabyProfile
