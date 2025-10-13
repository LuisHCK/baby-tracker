import { useTranslation } from 'react-i18next'

const LangForm = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div>
            <label>{t('language.selectLanguage')}:</label>
            <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
                <option value="en">{t('language.english')}</option>
                <option value="es">{t('language.spanish')}</option>
            </select>
        </div>
    )
}

export default LangForm
