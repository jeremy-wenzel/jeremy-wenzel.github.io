import { PropsWithChildren } from "react";
import "./css/Specialty.css";

interface SpecialtyProps {
  header: string;
}

export function Specialty(props: PropsWithChildren<SpecialtyProps>) {
  return (
    <>
      <div className="text-center">
        <h5 className="specialty-header">{props.header}</h5>
      </div>
      <div className="text-center">
        {props.children}
      </div>
    </>
  );
}