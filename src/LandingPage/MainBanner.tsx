import { Row, Col } from "react-bootstrap"
import ImageLink from "./ImageLink"
import { Specialty } from "./Specialty"

import "./css/MainBanner.css";

export default function MainBanner() {
  return (
    <div>
      <h1 className="text-center">Jeremy Wenzel</h1>
      <h5 className="text-center">Full stack software developer, Senior Software Engineer @ Microsoft</h5>
      <div className="links center-content">
        <ImageLink className="first-link" imageName="github.svg" linkUrl="https://github.com/jeremy-wenzel" alternativeName="Link to Jeremy Wenzel's GitHub" />
        <ImageLink imageName="linkedin.svg" linkUrl="https://www.linkedin.com/in/wenzeljeremy/" alternativeName="Link to Jeremy Wenzel's LinkedIn" />
      </div>
      <Row>
        <Col>
          <Specialty header="Windows Client">
            <span>My specialty is Windows client developing Win32 aps and WinRT APIs</span>
          </Specialty>
        </Col>
        <Col>
          <Specialty header="Web">
            <span>I have built multiple websites using typescript/css utilizing the React Framework</span>
          </Specialty>
        </Col>
        <Col>
          <Specialty header="Backend">
            <span>Using C# webservices/apis or Node.js deployed to Azure</span>
          </Specialty>
        </Col>
      </Row>
    </div>
  )
}