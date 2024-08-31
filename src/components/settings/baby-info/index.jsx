import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'
import { saveSettings } from '@/controllers/settings'
import { useContext, useEffect } from 'react'
import { AppContext } from '@/context/app'

let SAVE_TIMEOUT = null

const BabyInfoForm = () => {
    const { register, handleSubmit, watch } = useForm()
    const { babyInfo, setBabyInfo } = useContext(AppContext)

    const saveData = async (data) => {
        const res = await saveSettings('babyInfo', data)
        if (res) {
            setBabyInfo(res.value)
        }
    }

    useEffect(() => {
        const subscription = watch((value) => {
            clearTimeout(SAVE_TIMEOUT)
            SAVE_TIMEOUT = setTimeout(() => {
                saveData(value)
            }, 1000)
        })
        return () => subscription.unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch])

    return (
        <form onSubmit={handleSubmit(saveData)}>
            <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={babyInfo?.name}
                    required
                    {...register('name', { required: 'Name is required' })}
                />
            </div>
            <div className="d-flex flex-gap-2">
                <div className={styles.formControl}>
                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        name="weight"
                        defaultValue={babyInfo?.weight}
                        {...register('weight')}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="height">Height</label>
                    <input
                        type="number"
                        name="height"
                        defaultValue={babyInfo?.height}
                        {...register('height')}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        defaultValue={babyInfo?.birthday}
                        {...register('birthday')}
                    />
                </div>
            </div>
        </form>
    )
}

export default BabyInfoForm
