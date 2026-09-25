import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import BlueprintCanvas from '../src/components/BlueprintCanvas.jsx'

describe('BlueprintCanvas', () => {
  it('renderiza un canvas con identificador y dimensiones configurables', () => {
    const spy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext')
    const { container } = render(
      <BlueprintCanvas
        id="custom-blueprint-canvas"
        width={640}
        height={420}
        points={[
          { x: 10, y: 10 },
          { x: 50, y: 60 },
        ]}
      />,
    )
    const canvas = container.querySelector('canvas')
    expect(canvas).toBeInTheDocument()
    expect(canvas).toHaveAttribute('id', 'custom-blueprint-canvas')
    expect(canvas).toHaveAttribute('width', '640')
    expect(canvas).toHaveAttribute('height', '420')
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
