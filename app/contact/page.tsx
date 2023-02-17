import React from 'react'
import HomeContact from '../../components/HomeContact'
import { useGlobalState } from '../../store'
import { Social } from '../../typings'
import { fetchSocials } from '../../utils/fetchSocials '

export const revalidate =20

const contact = async() => {
  const socials:Social[] =await fetchSocials()

  return (
    <HomeContact socials={socials}/>

  )
}

export default contact