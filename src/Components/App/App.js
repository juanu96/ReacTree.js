import React, { createContext, useState } from 'react'
import Scene from '../scene/Scene'
import { Container, Row, Col } from 'reactstrap'
import Settings from '../settings/Setting'

export const Store = createContext(null)

function App () {
  const [Current, setCurrent] = useState(null)
  const [Hovered, setHovered] = useState(null)
  const [Laces, setLaces] = useState('#ffffff')
  const [Mesh, setMesh] = useState('#ffffff')
  const [Caps, setCaps] = useState('#ffffff')
  const [Inner, setInner] = useState('#ffffff')
  const [Sole, setSole] = useState('#ffffff')
  const [Stripes, setStripes] = useState('#ffffff')
  const [Band, setBand] = useState('#ffffff')
  const [Patch, setPatch] = useState('#ffffff')
  const [TextureLaces, setTextureLaces] = useState('')
  const [TextureMesh, setTextureMesh] = useState('http://findmyquote.local/wp-content/uploads/2021/08/descarga.png')
  const [TextureCaps, setTextureCaps] = useState('')
  const [TextureInner, setTextureInner] = useState('')
  const [TextureSole, setTextureSole] = useState('')
  const [TextureStripes, setTextureStripes] = useState('')
  const [TextureBand, setTextureBand] = useState('')
  const [TexturePatch, setTexturePatch] = useState('')

  return (
    <Store.Provider value={{
      Current,
      setCurrent,
      Hovered,
      setHovered,
      Laces,
      setLaces,
      Mesh,
      setMesh,
      Caps,
      setCaps,
      Inner,
      setInner,
      Sole,
      setSole,
      Stripes,
      setStripes,
      Band,
      setBand,
      Patch,
      setPatch,
      TextureLaces,
      setTextureLaces,
      TextureMesh,
      setTextureMesh,
      TextureCaps,
      setTextureCaps,
      TextureInner,
      setTextureInner,
      TextureSole,
      setTextureSole,
      TextureStripes,
      setTextureStripes,
      TextureBand,
      setTextureBand,
      TexturePatch,
      setTexturePatch
    }}
    >
      <Container fluid>
        <Row>
          <Col md={8}>
            <Scene />
          </Col>
          <Col md={4}>
            <Settings />
          </Col>
        </Row>
      </Container>
    </Store.Provider>
  )
}

export default App
