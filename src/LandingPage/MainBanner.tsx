import { Row, Col } from "react-bootstrap"
import ImageLink from "./ImageLink"
import { Specialty } from "./Specialty"

import "./css/MainBanner.css";

export default function MainBanner() {
  return (
    <>
      <p className="text-center">Jeremy Wenzel</p>
      <p className="text-center">Full stack software developer, Senior Software Engineer @ Microsoft</p>
      <Row>
        <Col>
          <Specialty header="Windows Client">
            <span>My specialty is Windows client (TODO: Elaborate more)</span>
          </Specialty>
        </Col>
        <Col>
          <Specialty header="Web">
            <span>I have built multiple websites using typescript/css utilizing the React Framework</span>
          </Specialty>
        </Col>
        <Col>
          <Specialty header="Backend">
            <span>Using C# or Node.js deploying to Azure</span>
          </Specialty>
        </Col>
      </Row>
      <Row>
        <Col className="center-content">
          <ImageLink imageName="github.svg" linkUrl="https://github.com/jeremy-wenzel" alternativeName="Link to Jeremy Wenzel's GitHub" />
          <ImageLink imageName="linkedin.svg" linkUrl="" alternativeName="Link to Jeremy Wenzel's LinkedIn" />
        </Col>
      </Row>
    </>
  )
}