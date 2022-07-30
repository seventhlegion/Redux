import React from "react";
import { useDispatch } from "react-redux";
import { dropIn } from "../../Backdrop/dropIn";
import Foods from "../../../public/Data/Foods";
import CallAll from "./Call-All";

export default function All() {
  const dispatch = useDispatch();

  return <CallAll food={Foods} dropIn={dropIn} dispatch={dispatch} />;
}
