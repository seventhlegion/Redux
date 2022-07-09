import React from 'react'
import { StyledFilter } from './Style/Filter.style'

export default function Filter() {
  return (
    <StyledFilter>
        <p>
            Filter
        </p>
        <div>
            <input type={'button'} value={'All'} />
            <input type={'button'} value={'Appetiziers'} />
            <input type={'button'} value={'Soups'} />
            <input type={'button'} value={'Salads'} />
            <input type={'button'} value={'Warps'} />
            <input type={'button'} value={'Entrees'} />
            <input type={'button'} value={'Desserts'} />
        </div>
    </StyledFilter>
  )
}
