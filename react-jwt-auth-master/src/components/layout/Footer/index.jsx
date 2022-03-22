import React from 'react'
import MenuFooter from '../MenuFooter'
import SocialFooter from '../SocialFooter'
import Forms from '../Forms'
import "./style.css"

export default function index() {
  return (
    <>
      <footer class="pt-5 mt-5">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2  ">
            <div class="imput col ">
              <Forms />
            </div>
            <div class="row row-cols-sm-2 justify-content-between ">
              <div class="link col d-flex flex-column align-items-center ">
                <MenuFooter />
              </div>
              <div class="rede col">
                <SocialFooter />
              </div>
            </div>
          </div>
        </div>

      </footer>
      <center style={{ fontSize: '16px', color: 'rgba(0,0,0,0.3)' }}>
        Imagens e cursos são meramente ilustrativas. Site feito para fins educativos.
      </center>
    </>
  )
}
