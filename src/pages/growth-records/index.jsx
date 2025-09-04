import PageLayout from '@/layouts/page-layout'
import React from 'react'
import { useTranslation } from 'react-i18next'


const index = () => {
  const { t } = useTranslation()
  return (
    <PageLayout title={t('growthRecords.title')}>
      <div>{t('growthRecords.title')}</div>
    </PageLayout>
  )
}

export default index