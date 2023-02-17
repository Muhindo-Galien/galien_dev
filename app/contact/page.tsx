import React from 'react'
import HomeContact from '../../components/HomeContact'
import { Social } from '../../typings'
import { fetchSocials } from '../../utils/fetchSocials '

const contact = async() => {
  const socials:Social[] =await fetchSocials()

  return (
    <HomeContact socials={socials}/>

  )
}

export default contact