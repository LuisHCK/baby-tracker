import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { format, parse } from 'date-fns'
import { useEffect, useState } from 'react'
import { capitalize } from '@/utils/tools'
import { addHistory } from '@/controllers/history'
import toast from 'react-hot-toast'
import { TASK_TYPES } from '@/lib/constansts'

const moreDetailsLabels = {
    wet: ['none', 'light', 'medium', 'full'],
    soiled: ['none', 'diarrhea', 'soft', 'loose', 'seedy', 'hard', 'thick', 'sticky']
}

const DiaperForm = ({ onSubmit = () => {} }) => {
    const [selectedState, setSelectedState] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { isValid }
    } = useForm({
        defaultValues: {
            state: ''
        }
    })

    const saveDiaper = async (data) => {
        const response = await addHistory({
            ...data,
            type: TASK_TYPES.DIAPER,
            endedAt: parse(data.endedAt, `yyyy-MM-dd'T'HH:mm`, new Date()).toISOString()
        })
        if (response) {
            toast.success('Diaper logged successfully')
            onSubmit?.()
        }
    }

    const moreDetailsRender = () => {
        const labels = moreDetailsLabels[selectedState] || moreDetailsLabels['wet']
        return labels.map((label) => {
            return (
                <option key={label} value={label}>
                    {capitalize(label)}
                </option>
            )
        })
    }

    useEffect(() => {
        const subscription = watch((value) => {
            setSelectedState(value.state)
        })

        return () => subscription.unsubscribe()
    }, [watch, setSelectedState])

    return (
        <form onSubmit={handleSubmit(saveDiaper)} className={styles.container}>
            <div className={styles.formInput}>
                <label htmlFor="state">State</label>
                <select
                    name="state"
                    id="state"
                    aria-label="state"
                    required
                    {...register('state', { required: true })}
                >
                    <option value="" disabled>
                        Select state...
                    </option>
                    <option value="wet">Wet</option>
                    <option value="soiled">Soiled</option>
                    <option value="mixed">Mixed</option>
                </select>
            </div>

            <div className={styles.formInput}>
                <label htmlFor="endedAt">Datetime</label>

                <input
                    type="datetime-local"
                    id="endedAt"
                    name="endedAt"
                    defaultValue={format(new Date(), `yyyy-MM-dd'T'HH:mm`)}
                    required
                    {...register('endedAt', { required: true })}
                />
            </div>

            <div className={styles.formInput}>
                <label htmlFor="moreDetails">More (details)</label>
                <select
                    name="moreDetails"
                    id="moreDetails"
                    aria-label="moreDetails"
                    {...register('moreDetails')}
                >
                    {moreDetailsRender()}
                </select>
            </div>

            <div className={styles.formInput}>
                <label htmlFor="notes">Notes (optional)</label>
                <textarea name="notes" id="notes" rows="3" {...register('notes')} />
            </div>

            <button disabled={!isValid} type="submit">
                Submit
            </button>
        </form>
    )
}

DiaperForm.propTypes = {
    onSubmit: PropTypes.func
}

export default DiaperForm
