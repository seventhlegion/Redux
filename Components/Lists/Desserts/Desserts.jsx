import { useDispatch } from "react-redux";
import CallDesserts from "./Call-Desserts";
import Foods from "../../../public/Data/Foods";
import dropIn from "../../Backdrop/dropIn";

export default function Desserts() {
  const dispatch = useDispatch();

  return <CallDesserts food={Foods} dropIn={dropIn} dispatch={dispatch} />;
}
