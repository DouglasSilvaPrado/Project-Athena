import React from 'react'
import MenuFooter from '../MenuFooter'
import SocialFooter from '../SocialFooter'
import Forms from '../Forms'

export default function index() {
  return (
    <>
      <Forms />
      <MenuFooter />
      <SocialFooter />
      <center style={{ fontSize: '16px', color: 'rgba(0,0,0,0.3)' }}>
        Imagens e cursos são meramente ilustrativas. Site feito para fins educativos.
      </center>
    </>
  )
}
