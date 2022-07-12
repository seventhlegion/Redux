import Link from "next/link";
import { lastId } from "./Shopping/Shopping.reducer";
import { StyledNav } from "./Style/Nav.style";

export default function Nav() {
  return (
    <StyledNav>
      <div className="logo-container">
        <Link href={"/"}>
          <input
            className={"logo"}
            type={"image"}
            src={"/pics/carrot-fill.png"}
            alt={""}
          />
        </Link>
        <h1>Carrot Marrot</h1>
      </div>
      <div className="button-container">
        <input className="button" type={"button"} value={"Log In"} />
        <Link href={"/Posts/ShopCart"}>
          <input
            className="shop-button"
            type={"image"}
            src={"/svgs/shopping.svg"}
            alt={""}
          />
        </Link>
        <p>{lastId}</p>
      </div>
    </StyledNav>
  );
}
