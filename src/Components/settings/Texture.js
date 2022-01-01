import React, { useContext } from 'react'
import { Store } from '../App/App'
import { Row, Col } from 'reactstrap'

export default function Texture () {
  const store = useContext(Store)
  const Texturas = ['http://findmyquote.local/wp-content/uploads/2021/08/terrazo.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/img9.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/grey-washed-wall.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/basketball.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/argyle.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/3px-tile.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/45-degree-fabric-light.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/honey.png',
    'http://findmyquote.local/wp-content/uploads/2021/08/descarga.png']
  const Current = store.Current
  const textureSetter = (texture) => {
    console.log(texture)
    switch (Current) {
      case 'laces':
        return store.setTextureLaces(texture)

      case 'mesh':
        return store.setTextureMesh(texture)

      case 'caps':
        return store.setTextureCaps(texture)

      case 'inner':
        return store.setTextureInner(texture)

      case 'sole':
        return store.setTextureSole(texture)

      case 'stripes':
        return store.setTextureStripes(texture)

      case 'band':
        return store.setTextureBand(texture)

      case 'patch':
        return store.setTexturePatch(texture)

      default:
        store.setTextureLaces(texture)
    }
  }

  return (
    <Row>
      <Col md={12}>
        <div style={{ display: store.Current ? 'block' : 'none' }}>
          <h1>{store.Current}</h1>
        </div>
      </Col>
      <Col md={12}>
        {
        Texturas.map((x, y) => (

          <div key={y} className='color mt-2 mb-2' onClick={(e) => textureSetter(x)} style={{ backgroundImage: `url(${x})` }} />
        )

        )
    }
      </Col>
    </Row>
  )
}
