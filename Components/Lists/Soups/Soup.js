import { CallSoup } from "./Call-Soup";
import React from "react";
import { useDispatch } from "react-redux";
import Foods from "../../../public/Data/Foods";
import { dropIn } from "../../Backdrop/dropIn";

export default function Soup() {
  const dispatch = useDispatch();
  return <CallSoup food={Foods} dropIn={dropIn} dispatch={dispatch} />;
}
