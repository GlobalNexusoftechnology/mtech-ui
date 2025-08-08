import HomeView from '../sections/home/view/home-view'

import React from 'react'

export const metadata = {
  title: 'MTech',
  description: 'Mtech performance and quality.',
};
const page = () => {
  return (
    <main>
      <HomeView />
    </main>
  )
}

export default page
