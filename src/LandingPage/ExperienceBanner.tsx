import { Container } from 'react-bootstrap';
import './css/ExperienceBanner.css';
import Employer from './Employment/Employer';
import { Employment } from './Employment/Employment';
import EmploymentJobTitleAndDates from './Employment/EmploymentJobTitle';
import EmploymentTenure from './Employment/EmploymentTenure';

export default function ExperienceBanner() {
  return (
    <>
      <Container>
        <Employment>
          <Employer companyName='Microsoft' logoFileName='Microsoft-logo.png' />
          <EmploymentTenure>
            <EmploymentJobTitleAndDates jobTitle='Senior Software Engineer' startDate='September 2023' endDate='Preset'>
              <p>Working on Network UX (primarily Wi-Fi), Wi-Fi direct</p>
            </EmploymentJobTitleAndDates>
            <EmploymentJobTitleAndDates jobTitle='Software Engineer II' startDate='January 2020' endDate='September 2023'>
              <p>Designed an implemented a React/.NET website that allowed Mobile Operators to submit changes to COSA and Mobile Plans. Over a dozen major operators onboarded like Verizon, T-Mobile, and Telus. I also participated in the settings rejuvination that accompanied the Windows 11 launch.</p>
            </EmploymentJobTitleAndDates>
          </EmploymentTenure>
        </Employment>
        <Employment>
          <Employer companyName='Alarm.com' logoFileName='Alarm-com-logo.jpg' />
          <EmploymentTenure>
            <EmploymentJobTitleAndDates jobTitle='Senior Software Engineer' startDate='August 2018' endDate='January 2020'>
              <p>Wanting to explore more Android, I took the opportunity to learn video on mobile, integrating new features into the video side of the Alarm.com android app</p>
            </EmploymentJobTitleAndDates>
            <EmploymentJobTitleAndDates jobTitle='Software Enigneer' startDate='August 2016' endDate='August 2018'>
              <p>Working on the panels and security team, I lead the integration of the Qolsys Gen 2 panel into the alarm.com infrastructure and added substantial automated hardware testing for several other panels. Additionally, I helped maintain and enhance crtiical panel messaging to central station infrastructure.</p>
            </EmploymentJobTitleAndDates>
          </EmploymentTenure>
        </Employment>
        <Employment>
          <Employer companyName='NFP' logoFileName='NFP-logo.png' />
          <EmploymentTenure>
            <EmploymentJobTitleAndDates jobTitle='Software Development Intern' startDate='May 2015' endDate='August 2015'>
              <p>Assisted Support Team to develop solutions to production level bugs and change requests to deliver a satisfactory user experience. Gathered requirements and feature requests from various managers and colleagues to design a user friendly Time Tracking application for internal development and budgetary purposes.</p>
            </EmploymentJobTitleAndDates>
          </EmploymentTenure>
        </Employment>
        <Employment>
          <Employer companyName='The University of Texas at Austin' logoFileName='longhorn-logo.png' />
          <EmploymentTenure>
            <EmploymentJobTitleAndDates jobTitle='Student' startDate='August 2011' endDate='May 2016'>
              <p>Student of Computer Science</p>
              <p>Because of my acceptance into the Polymath Scholars, I created a minor titled <span className='italicized'>"Culture and the Crusades"</span> which focused on the effects of the Crusades on European culture, culminating in the thesis paper <span className='italicized'>"No Crusades, No Columbus: A study of navel development 1100-1400"</span></p>
            </EmploymentJobTitleAndDates>
          </EmploymentTenure>
        </Employment>
      </Container>
    </>
  );
}