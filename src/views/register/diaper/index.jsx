import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'
import { Link, useLocation } from 'wouter'
import { format, parse } from 'date-fns'
import { useEffect, useState } from 'react'
import { capitalize } from '@/utils/tools'
import { addHistory } from '@/controllers/history'
import toast from 'react-hot-toast'

const moreDetailsLabels = {
    wet: ['none', 'light', 'medium', 'full'],
    soiled: ['none', 'diarrhea', 'soft', 'loose', 'seedy', 'hard', 'thick', 'sticky']
}

const DiaperView = () => {
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
    const [, navigate] = useLocation()

    const saveDiaper = async (data) => {
        const response = await addHistory({
            ...data,
            type: 'diaper',
            endedAt: parse(data.endedAt, `yyyy-MM-dd'T'HH:mm`, new Date()).toISOString()
        })
        if (response) {
            toast.success('Diaper logged successfully')
            setTimeout(() => {
                navigate('/')
            }, 300)
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
            <h3>Diaper</h3>
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
            <Link href="/">Cancel</Link>
        </form>
    )
}

export default DiaperView
