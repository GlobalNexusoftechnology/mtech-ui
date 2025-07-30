import Breadcrumb from '@/components/breadcrumb/breadcrumb'
import React from 'react'
import Counter from '../counter/counter'
import TabSection from '../tab-section/tab-section'

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About MTech Power Solutions" desc='Pioneering excellence in power technology since 2003.' />
      <Counter />
      <TabSection />
    </>
  )
}

export default AboutUs