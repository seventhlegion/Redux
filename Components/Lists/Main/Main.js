import { CallMain } from "./Call-Main";
import React from "react";
import { useDispatch } from "react-redux";
import Foods from "../../../public/Data/Foods";
import { dropIn } from "../../Backdrop/dropIn";

export default function Main() {
  const dispatch = useDispatch();
  return <CallMain food={Foods} dropIn={dropIn} dispatch={dispatch} />;
}
