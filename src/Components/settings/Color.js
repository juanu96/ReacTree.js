import React, { useContext } from 'react'
import { Store } from '../App/App'
import { Row, Col } from 'reactstrap'

export default function Color () {
  const store = useContext(Store)
  const Colores = ['#F93A1F', '#FA7E1F', '#F8C91E', '#25F3CD', '#1EAAF8', '#6D6AFB', '#51575C', '#2D2F31']
  const Current = store.Current
  const colorSetter = (color) => {
    switch (Current) {
      case 'laces':
        return store.setLaces(color)

      case 'mesh':
        return store.setMesh(color)

      case 'caps':
        return store.setCaps(color)

      case 'inner':
        return store.setInner(color)

      case 'sole':
        return store.setSole(color)

      case 'stripes':
        return store.setStripes(color)

      case 'band':
        return store.setBand(color)

      case 'patch':
        return store.setPatch(color)

      default:
        store.setLaces(color)
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
        Colores.map((x, y) => (

          <div key={y} className='color mt-2 mb-2' onClick={(e) => colorSetter(x)} style={{ backgroundColor: x }} />
        )

        )
    }
      </Col>
    </Row>
  )
}
