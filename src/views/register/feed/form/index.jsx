import { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import MilkInput from '@/components/tracking/milk-input'
import styles from './styles.module.scss'
import { format, parse } from 'date-fns'
import { getSettings, saveSettings } from '@/controllers/settings'
import { useForm } from 'react-hook-form'
import { addHistory } from '@/controllers/history'
import toast from 'react-hot-toast'
import { AppContext } from '@/context/app'
import { TASK_TYPES } from '@/lib/constansts'

const FeedForm = ({ onSubmit = () => {} }) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { isValid }
    } = useForm({
        defaultValues: {
            milk: 0
        }
    })
    const { units } = useContext(AppContext)

    const saveData = async (data) => {
        const response = await addHistory({
            ...data,
            type: TASK_TYPES.FEEDING,
            endedAt: parse(data.endedAt, `yyyy-MM-dd'T'HH:mm`, new Date()).toISOString(),
            unit: units?.liquidUnit
        })
        if (response) {
            toast.success('Feed logged successfully')
            onSubmit?.()
        }
    }

    useEffect(() => {
        const subscription = watch(async (value) => {
            if (value.source) {
                await saveSettings('defaultMilkSource', value.source)
            }
        })

        return () => subscription.unsubscribe()
    }, [watch])

    useEffect(() => {
        const loadDefaultMilkSource = async () => {
            const { value } = await getSettings('defaultMilkSource')
            if (value) {
                setValue('source', value)
            }
        }
        loadDefaultMilkSource()
    }, [setValue])

    return (
        <form onSubmit={handleSubmit(saveData)} className={styles.container}>
            <MilkInput onChange={({ unit }) => setValue('milk', unit)} />

            <div className={styles.formInput}>
                <label htmlFor="endedAt">Feeding time</label>

                <input
                    type="datetime-local"
                    id="endedAt"
                    name="endedAt"
                    defaultValue={format(new Date(), `yyyy-MM-dd'T'HH:mm`)}
                    required
                    {...register('endedAt', { required: true })}
                />
            </div>

            <div>
                <label htmlFor="source">Source</label>
                <select
                    name="source"
                    id="source"
                    aria-label="Source"
                    required
                    {...register('source', { required: true })}
                >
                    <option value="" disabled>
                        Select source...
                    </option>
                    <option value="formula">Formula</option>
                    <option value="breast">Breast</option>
                </select>
            </div>

            <div>
                <label htmlFor="notes">Notes (optional)</label>
                <textarea name="notes" id="notes" rows="3" {...register('notes')} />
            </div>

            <button type="submit" disabled={!isValid}>
                Submit
            </button>
        </form>
    )
}

FeedForm.propTypes = {
    onSubmit: PropTypes.func
}

export default FeedForm
