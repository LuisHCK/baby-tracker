import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { saveSettings } from '@/controllers/settings'
import { useContext, useEffect } from 'react'
import { AppContext } from '@/context/app'
import { resizeImage } from '@/utils/images'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { addBaby, updateBaby } from '@/controllers/babies'

let SAVE_TIMEOUT = null

const BabyInfoForm = () => {
    const { register, handleSubmit, watch } = useForm()
    const { babies, currentBaby, setCurrentBaby, photo, setPhoto, units } = useContext(AppContext)
    const { t } = useTranslation()

    const saveData = async (data) => {
        // Create the first baby if none exists
        if (!babies.length && !currentBaby) {
            const newBaby = await addBaby(data)
            if (newBaby) {
                setCurrentBaby(newBaby)
                saveSettings('currentBaby', newBaby.id)
                toast.success(t('baby_info_form.save_success_message'))
            } else {
                toast.error(t('baby_info_form.save_error_message'))
            }
            return
        } else {
            const updatedBaby = await updateBaby(currentBaby.id, data)
            if (updatedBaby) {
                setCurrentBaby(updatedBaby)
                toast.success(t('baby_info_form.save_success_message'))
            } else {
                toast.error(t('baby_info_form.save_error_message'))
            }
        }
    }

    const savePhoto = (encodedImage = '') => {
        if (currentBaby) {
            window.localStorage.setItem('photo', encodedImage)
            setPhoto(encodedImage)
            toast.success(t('baby_info_form.photo_save_success_message'))
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
            <div className="formControl">
                <label htmlFor="name">{t('baby_info_form.name')}</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={currentBaby?.name}
                    required
                    {...register('name', { required: 'Name is required' })}
                />
            </div>
            <div className="grid grid-cols-2 gap-1">
                <div className="formControl">
                    <label htmlFor="weight">
                        {t('baby_info_form.weight', { unit: units?.weightUnit })}
                    </label>

                    <input
                        id="weight"
                        type="number"
                        name="weight"
                        defaultValue={currentBaby?.weight}
                        {...register('weight')}
                    />
                </div>
                <div className="formControl">
                    <label htmlFor="height">
                        {t('baby_info_form.height', { unit: units?.lengthUnit })}
                    </label>

                    <input
                        type="number"
                        name="height"
                        defaultValue={currentBaby?.height}
                        {...register('height')}
                    />
                </div>
            </div>
            <div className="formControl">
                <label htmlFor="birthday">{t('baby_info_form.birthday')}</label>
                <input
                    type="date"
                    name="birthday"
                    defaultValue={currentBaby?.birthday}
                    {...register('birthday')}
                />
            </div>
            {currentBaby?.name && (
                <div className="formControl">
                    <label htmlFor="photo">{t('baby_info_form.photo')}</label>
                    {photo && <img src={photo} alt="Photo" className={styles.photo} />}

                    <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        className={styles.fileInput}
                        onChange={(e) => {
                            resizeImage(e.target.files[0], 150, 150, (e) => {
                                savePhoto(e)
                            })
                        }}
                    />
                </div>
            )}

            <div className="formControl">
                <label htmlFor="gender">
                    {t('baby_info_form.gender')}
                </label>
                <select
                    name="gender"
                    aria-label="Select gender"
                    {...register('gender', { required: 'Select an option' })}
                >
                    <option disabled>Select gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </form>
    )
}

export default BabyInfoForm
