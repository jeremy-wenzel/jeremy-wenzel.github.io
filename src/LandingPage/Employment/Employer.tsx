export interface EmployerProps {
  companyName: string;
  logoFileName?: string;
}

export default function Employer(props: EmployerProps) {
  const hasLogo = props.logoFileName !== undefined;

  const renderLogo = () => {
    const pathToAsset = `assets/${props.logoFileName}`
    return (
      <div className='logo'>
        <img src={pathToAsset} alt={`${props.companyName} logo`} height="50px" width="50px" />
      </div>
    )
  }

  return (
    <div className='employer-wrapper'>
      {hasLogo && renderLogo()}
      <div className='company-name'>
        <h5>{props.companyName}</h5>
      </div>
    </div>
  )
}