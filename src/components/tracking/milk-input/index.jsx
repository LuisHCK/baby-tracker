import { useContext, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { AppContext } from '@/context/app'
import scales from '@/lib/scales.json'
import { generateArrayFromRange, shortUnit } from '@/utils/tools'
import PropTypes from 'prop-types'
import Picker from 'react-mobile-picker'
import classNames from 'classnames'

const MilkInput = ({ onChange = () => {} }) => {
    const [pickerValue, setPickerValue] = useState({ unit: 10, decimal: 0 })
    const { units } = useContext(AppContext)

    const scale = scales?.liquid[units?.liquidUnit]

    const inputRange = useMemo(() => {
        if (units && scale) {
            if (units.liquidUnit === 'ml') {
                return {
                    units: generateArrayFromRange(scale.min, scale.max, scale.step),
                    decimals: []
                }
            } else if (units.liquidUnit === 'uk fl-oz' || units.liquidUnit === 'us fl-oz') {
                return {
                    units: generateArrayFromRange(scale.min, scale.max, scale.step),
                    decimals: []
                }
            }
        }

        return { units: [], decimals: [] }
    }, [units, scale])

    const handleChange = ({ unit, decimal }) => {
        setPickerValue({ unit, decimal })
        onChange?.({ unit })
    }

    const renderUnits = useMemo(() => {
        return inputRange.units.map((unit) => (
            <Picker.Item key={unit} value={unit}>
                {({ selected }) => (
                    <div
                        className={classNames('d-flex align-items-end not-selectable', {
                            [styles.pickerItemSelected]: selected
                        })}
                    >
                        {unit}
                        <small>&nbsp;{shortUnit(units?.liquidUnit)}</small>
                    </div>
                )}
            </Picker.Item>
        ))
    }, [inputRange, units])

    return (
        <div className={styles.container}>
            <Picker
                value={pickerValue}
                onChange={handleChange}
                wheelMode="natural"
                className="w-100"
            >
                {!!inputRange.units.length && (
                    <Picker.Column name="unit">{renderUnits}</Picker.Column>
                )}
            </Picker>
        </div>
    )
}

MilkInput.propTypes = {
    onChange: PropTypes.func
}

export default MilkInput
