import React from "react";
import { useDispatch } from "react-redux";
import Foods from "../../../public/Data/Foods";
import { dropIn } from "../../Backdrop/dropIn";
import CallAppetiziers from "./Call-Appetiziers";

export default function Appetiziers() {
  const dispatch = useDispatch();

  return <CallAppetiziers food={Foods} dropIn={dropIn} dispatch={dispatch} />;
}
