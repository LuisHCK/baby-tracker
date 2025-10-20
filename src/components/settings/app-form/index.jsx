import { AppContext } from '@/context/app'
import { saveSettings } from '@/controllers/settings'
import { isEmpty } from '@/utils/tools'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

let SAVE_TIMEOUT = null

const AppSettingsForm = () => {
    const { register, handleSubmit, watch, setValue } = useForm()
    const { units, setUnits } = useContext(AppContext)
    const [isLoaded, setIsLoaded] = useState(false)
    const { t } = useTranslation()

    const saveData = async (data) => {
        const res = await saveSettings('units', data)
        if (res) {
            setUnits(res.value)
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

    useEffect(() => {
        if (!isEmpty(units) && !isLoaded) {
            setValue('liquidUnit', units?.liquidUnit)
            setValue('lengthUnit', units?.lengthUnit)
            setValue('weightUnit', units?.weightUnit)
            setIsLoaded(true)
        }
    }, [units, setValue, isLoaded, setIsLoaded])

    return (
        <form onSubmit={handleSubmit()}>
            <div className={styles.formControl}>
                <label htmlFor="liquidUnit">{t('app_settings_form.liquid_unit')}</label>
                <select
                    name="liquidUnit"
                    aria-label={t('app_settings_form.select_liquid_unit')}
                    {...register('liquidUnit', { required: 'Select an option' })}
                >
                    <option disabled>{t('app_settings_form.select_unit')}</option>
                    <option value="ml">ml</option>
                    <option value="uk fl-oz">uk fl-oz</option>
                    <option value="us fl-oz">us fl-oz</option>
                </select>
            </div>

            <div className={styles.formControl}>
                <label htmlFor="lengthUnit">{t('app_settings_form.length_unit')}</label>
                <select
                    name="lengthUnit"
                    aria-label={t('app_settings_form.select_length_unit')}
                    {...register('lengthUnit', { required: 'Select an option' })}
                >
                    <option disabled>{t('app_settings_form.select_unit')}</option>
                    <option value="in">in</option>
                    <option value="cm">cm</option>
                </select>
            </div>

            <div className={styles.formControl}>
                <label htmlFor="weightUnit">{t('app_settings_form.weight_unit')}</label>
                <select
                    name="weightUnit"
                    aria-label={t('app_settings_form.select_weight_unit')}
                    {...register('weightUnit', { required: 'Select an option' })}
                >
                    <option disabled>{t('app_settings_form.select_unit')}</option>
                    <option value="lb">lb</option>
                    <option value="kg">kg</option>
                </select>
            </div>
        </form>
    )
}

export default AppSettingsForm
