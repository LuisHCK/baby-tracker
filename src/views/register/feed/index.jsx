import { useContext, useEffect } from 'react'
import MilkInput from '@/components/tracking/milk-input'
import styles from './styles.module.scss'
import { format, parse } from 'date-fns'
import { Link, useLocation } from 'wouter'
import { getSettings, saveSettings } from '@/controllers/settings'
import { useForm } from 'react-hook-form'
import { addHistory } from '@/controllers/history'
import toast from 'react-hot-toast'
import { AppContext } from '@/context/app'

const FeedView = () => {
    const [, navigate] = useLocation()
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
            type: 'feeding',
            endedAt: parse(data.feedingTime, `yyyy-MM-dd'T'HH:mm`, new Date()).toISOString(),
            unit: units?.liquidUnit
        })
        if (response) {
            toast.success('Feed logged successfully')
            setTimeout(() => {
                navigate('/')
            }, 300)
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
            <MilkInput register={register} value={watch('milk')} />

            <div className={styles.formInput}>
                <label htmlFor="feedingTime">Feeding time</label>

                <input
                    type="datetime-local"
                    id="feedingTime"
                    name="feedingTime"
                    defaultValue={format(new Date(), `yyyy-MM-dd'T'HH:mm`)}
                    required
                    {...register('feedingTime', { required: true })}
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
            <Link href="/" className="button outline secondary">
                Cancel
            </Link>
        </form>
    )
}

export default FeedView
