import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { saveSettings } from '@/controllers/settings'
import { useContext, useEffect } from 'react'
import { AppContext } from '@/context/app'
import { resizeImage } from '@/utils/images'
import styles from './styles.module.scss'

let SAVE_TIMEOUT = null

const BabyInfoForm = () => {
    const { register, handleSubmit, watch } = useForm()
    const { babyInfo, setBabyInfo, photo, setPhoto, units } = useContext(AppContext)

    const saveData = async (data) => {
        const res = await saveSettings('babyInfo', data)
        if (res) {
            setBabyInfo(res.value)
            toast.success('Baby info saved successfully')
        }
    }

    const savePhoto = (encodedImage = '') => {
        if (babyInfo) {
            window.localStorage.setItem('photo', encodedImage)
            setPhoto(encodedImage)
            toast.success('Photo saved successfully')
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
                    <label htmlFor="weight">Weight ({units?.weightUnit})</label>
                    <input
                        type="number"
                        name="weight"
                        defaultValue={babyInfo?.weight}
                        {...register('weight')}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="height">Height ({units?.lengthUnit})</label>
                    <input
                        type="number"
                        name="height"
                        defaultValue={babyInfo?.height}
                        {...register('height')}
                    />
                </div>
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
            {babyInfo?.name && (
                <div className={styles.formControl}>
                    <label htmlFor="photo">Photo</label>
                    {photo && <img src={photo} alt="Photo" className={styles.photo} />}

                    <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(e) => {
                            resizeImage(e.target.files[0], 150, 150, (e) => {
                                savePhoto(e)
                            })
                        }}
                    />
                </div>
            )}

            <div>
                <label htmlFor="gender">Gender</label>
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
