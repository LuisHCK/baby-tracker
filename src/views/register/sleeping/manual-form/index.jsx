import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { addHistory } from '@/controllers/history'
import { TASK_TYPES } from '@/lib/constansts'
import { format, parse, isAfter } from 'date-fns'
import { useMemo } from 'react'
import { IconCone } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'

const ManualForm = ({ onSave }) => {
    const { t } = useTranslation()
    const now = format(new Date(), "yyyy-MM-dd'T'HH:mm")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            end: now
        }
    })
    console.log(errors)

    const startValue = watch('start')
    const endValue = watch('end')

    const onSubmit = async (data) => {
        const { parse, formatISO } = await import('date-fns')
        const startedAt = formatISO(parse(data.start, "yyyy-MM-dd'T'HH:mm", new Date()))
        const endedAt = formatISO(parse(data.end, "yyyy-MM-dd'T'HH:mm", new Date()))

        const newTask = await addHistory({
            type: TASK_TYPES.SLEEPING,
            startedAt,
            endedAt
        })

        if (newTask && onSave) {
            onSave(newTask)
        }
    }

    const isInvalidDateRange = useMemo(() => {
        if (startValue && endValue) {
            const startDate = parse(startValue, "yyyy-MM-dd'T'HH:mm", new Date())
            const endDate = parse(endValue, "yyyy-MM-dd'T'HH:mm", new Date())
            return isAfter(startDate, endDate)
        }
        return false
    }, [startValue, endValue])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h5>{t('form.registerManually')}</h5>

            <div>
                <label>
                    {t('form.start')}:
                    <input
                        className="cursor-pointer"
                        type="datetime-local"
                        {...register('start', { required: true })}
                        max={now}
                    />
                    {errors.start && <span style={{ color: 'red' }}>{t('form.startTimeRequired')}</span>}
                </label>
                <br />
                <label>
                    {t('form.end')}:
                    <input
                        className="cursor-pointer"
                        type="datetime-local"
                        {...register('end', {
                            required: true
                        })}
                    />
                </label>
                {isInvalidDateRange && (
                    <article className="card">
                        <IconCone />
                        <span style={{ color: 'red' }}>{t('form.startAfterEnd')}</span>
                    </article>
                )}
                <br />
                <button type="submit" disabled={!isInvalidDateRange}>
                    {t('form.submit')}
                </button>
            </div>
        </form>
    )
}

ManualForm.propTypes = {
    onSave: PropTypes.func
}

export default ManualForm
