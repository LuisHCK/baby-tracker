import { useContext } from 'react'
import styles from './styles.module.scss'
import { AppContext } from '@/context/app'
import scales from '@/lib/scales.json'
import { toFixed } from '@/utils/tools'
import PropTypes from 'prop-types'

const MilkInput = ({ register, value }) => {
    const { units } = useContext(AppContext)

    const scale = scales?.liquid[units?.liquidUnit]

    return (
        <div className={styles.container}>
            <div className={styles.rangeInputContainer}>
                <input
                    type="range"
                    className={styles.rangeInput}
                    min={scale?.min}
                    max={scale?.max}
                    step={scale?.step}
                    name='milk'
                    {...register('milk', { required: true })}
                />

                <p className={styles.counter}>
                    {toFixed(value, 2)}
                    {units?.liquidUnit}
                </p>
            </div>
        </div>
    )
}

MilkInput.propTypes = {
    register: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default MilkInput
