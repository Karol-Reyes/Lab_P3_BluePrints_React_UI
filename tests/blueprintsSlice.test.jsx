import { describe, it, expect } from 'vitest'
import reducer, { fetchBlueprint } from '../src/features/blueprints/blueprintsSlice.js'

describe('blueprints slice', () => {
  it('should initialize correctly', () => {
    const state = reducer(undefined, { type: '@@INIT' })
    expect(state.authors).toEqual([])
  })

  it('guarda el blueprint actual cuando fetchBlueprint termina', () => {
    const blueprint = {
      author: 'JohnConnor',
      name: 'house',
      points: [{ x: 1, y: 2 }],
    }

    const state = reducer(undefined, {
      type: fetchBlueprint.fulfilled.type,
      payload: blueprint,
    })

    expect(state.current).toEqual(blueprint)
  })
})
