import React, { useContext } from 'react'
import { Store } from '../App/App'
import { HexColorPicker } from 'react-colorful'

export default function Picker () {
  const store = useContext(Store)
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

  const colorGetter = () => {
    switch (Current) {
      case 'laces':
        return store.Laces

      case 'mesh':
        return store.Mesh

      case 'caps':
        return store.Caps

      case 'inner':
        return store.Inner

      case 'sole':
        return store.Sole

      case 'stripes':
        return store.Stripes

      case 'band':
        return store.Band

      case 'patch':
        return store.Patch
      default:
        store.setLaces('ffffff')
    }
  }

  console.log(Store.Current)

  return (
    <div style={{ display: store.Current ? 'block' : 'none' }}>
      <HexColorPicker className='picker' color={colorGetter()} onChange={(color) => colorSetter(color)} />
      <h1>{store.Current}</h1>
    </div>
  )
}
