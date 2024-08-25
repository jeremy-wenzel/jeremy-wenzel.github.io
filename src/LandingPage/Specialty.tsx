import { PropsWithChildren } from "react";
import "./css/Specialty.css";

interface SpecialtyProps {
  header: string;
}

export function Specialty(props: PropsWithChildren<SpecialtyProps>) {
  return (
    <>
      <div className="text-center">
        <span>{props.header}</span>
      </div>
      <div className="text-center">
        {props.children}
      </div>
    </>
  );
}