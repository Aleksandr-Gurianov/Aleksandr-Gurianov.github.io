import './tooltip.scss';

function Tooltip({children,classcomponent}) {
  return (
    <div className={`tooltip ${classcomponent}`}>
        {children}
    </div>
  )
}

export default Tooltip