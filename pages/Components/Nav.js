import { StyledNav } from '../Components/Style/Nav.style';

export default function Nav() {
  return (
    <StyledNav>
        <div className="logo-container">
            <input className={'logo'} type={'image'} src={'/pics/carrot-fill.png'} alt={''} />
            <p>
                Carrot Marrot
            </p>
        </div>
        <div className="button-container">
            <input className='button' type={'button'} value={'Log In'} />
            <input className='shop-button' type={'image'} src={'/svgs/shopping.svg'} alt={''} />
        </div>
    </StyledNav>
  )
}
