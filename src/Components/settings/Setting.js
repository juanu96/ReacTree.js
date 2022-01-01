import React from 'react'
import { Row, Col } from 'reactstrap'
import Color from './Color'
import Texture from './Texture'

export default function Setting () {
  return (
    <Row>
      <Col md={12}>
        <Color />
      </Col>
      <Col md={12}>
        <Texture />
      </Col>
    </Row>
  )
}
