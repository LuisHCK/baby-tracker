import { useState } from 'react'
import styles from './styles.module.scss'

const MilkInput = () => {
    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.rangeInputContainer}>
                <input
                    type="range"
                    className={styles.rangeInput}
                    min={0}
                    max={500}
                    step={10}
                    value={value}
                    onChange={handleChange}
                />

                <p className={styles.counter}>{value} ml</p>
            </div>
        </div>
    )
}

export default MilkInput
