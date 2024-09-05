import './css/Footer.css';

export default function Footer() {
  const currentDate = new Date();
  return (
    <>
      <p className='footer-text'>&#169; {currentDate.getFullYear()} Jeremy Wenzel</p>
    </>
  )
}