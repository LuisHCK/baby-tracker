import { AppContext } from '@/context/app'
import { saveSettings } from '@/controllers/settings'
import { isEmpty } from '@/utils/tools'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

let SAVE_TIMEOUT = null

const AppSettingsForm = () => {
    const { register, handleSubmit, watch, setValue } = useForm()
    const { units, setUnits } = useContext(AppContext)
    const [isLoaded, setIsLoaded] = useState(false)

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
            <div>
                <label htmlFor="liquidUnit">Liquid unit</label>
                <select
                    name="liquidUnit"
                    aria-label="Select liquid unit"
                    {...register('liquidUnit', { required: 'Select an option' })}
                >
                    <option disabled>Select an unit...</option>
                    <option value="ml">ml</option>
                    <option value="uk fl-oz">uk fl-oz</option>
                    <option value="us fl-oz">us fl-oz</option>
                </select>
            </div>

            <div>
                <label htmlFor="lengthUnit">Length unit</label>
                <select
                    name="lengthUnit"
                    aria-label="Select length unit"
                    {...register('lengthUnit', { required: 'Select an option' })}
                >
                    <option disabled>Select an unit...</option>
                    <option value="in">in</option>
                    <option value="cm">cm</option>
                </select>
            </div>

            <div>
                <label htmlFor="weightUnit">Weight unit</label>
                <select
                    name="weightUnit"
                    aria-label="Select weight unit"
                    {...register('weightUnit', { required: 'Select an option' })}
                >
                    <option disabled>Select an unit...</option>
                    <option value="lb">lb</option>
                    <option value="kg">kg</option>
                </select>
            </div>
        </form>
    )
}

export default AppSettingsForm
