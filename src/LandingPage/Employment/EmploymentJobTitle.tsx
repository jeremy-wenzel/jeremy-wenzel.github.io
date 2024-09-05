import { PropsWithChildren } from 'react';
import './css/GlobalEmployment.css';

interface EmploymentJobTitleAndDatesProps {
  jobTitle: string;
  startDate: string;
  endDate: string;
}

export default function EmploymentJobTitleAndDates(props: PropsWithChildren<EmploymentJobTitleAndDatesProps>) {
  return (
    <div className='list-item'>
      <span className='list-item-bullet'></span>
      <div className='list-content'>
        <h5 className='job-title'>{props.jobTitle}</h5>
        <p className='start-date'>{props.startDate} - {props.endDate}</p>
        <div>
          {props.children}
        </div>
      </div>

    </div>
  );
}