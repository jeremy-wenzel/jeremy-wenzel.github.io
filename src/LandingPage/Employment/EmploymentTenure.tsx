import { PropsWithChildren } from 'react';
import './css/GlobalEmployment.css';

export default function EmploymentTenure(props: PropsWithChildren) {
  return (
    <div className='experience-wrapper'>
      <span className='list-line'></span>
      <div>
        {props.children}
      </div>
    </div>
  )
}