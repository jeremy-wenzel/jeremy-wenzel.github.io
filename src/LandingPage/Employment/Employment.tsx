import { PropsWithChildren } from "react";
import './css/GlobalEmployment.css';

export function Employment(props: PropsWithChildren) {
  return (
    <div className="company-wrapper">
      {props.children}
    </div>
  )
}