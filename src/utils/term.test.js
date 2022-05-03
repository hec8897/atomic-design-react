import {stringReturn} from './term'

it('test',()=>{
    const value = 'test'
    expect(stringReturn(value)).toBe(value)
})