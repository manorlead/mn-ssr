import styles from '../../styles/variables.module.css'

export const AnimatedIcon = (props: { open: boolean; onClick: () => void }) => {
  const { open, onClick } = props
  return (
    <>
      <style jsx>
        {`
          #nav-icon1,
          #nav-icon2,
          #nav-icon3,
          #nav-icon4 {
            width: 25px;
            height: 15px;
            position: relative;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.5s ease-in-out;
            -moz-transition: 0.5s ease-in-out;
            -o-transition: 0.5s ease-in-out;
            transition: 0.5s ease-in-out;
            cursor: pointer;
          }

          #nav-icon1 span,
          #nav-icon3 span,
          #nav-icon4 span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.25s ease-in-out;
            -moz-transition: 0.25s ease-in-out;
            -o-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
          }

          #nav-icon1 span:nth-child(1) {
            top: 0px;
          }

          #nav-icon1 span:nth-child(2) {
            top: 8px;
          }

          #nav-icon1 span:nth-child(3) {
            top: 16px;
          }

          #nav-icon1.open span:nth-child(1) {
            top: 8px;
            -webkit-transform: rotate(135deg);
            -moz-transform: rotate(135deg);
            -o-transform: rotate(135deg);
            transform: rotate(135deg);
          }

          #nav-icon1.open span:nth-child(2) {
            opacity: 0;
            left: -60px;
          }

          #nav-icon1.open span:nth-child(3) {
            top: 8px;
            -webkit-transform: rotate(-135deg);
            -moz-transform: rotate(-135deg);
            -o-transform: rotate(-135deg);
            transform: rotate(-135deg);
          }
        `}
      </style>
      <div id="nav-icon1" className={open ? 'open' : ''} onClick={onClick}>
        <span className={styles.bg_primary}></span>
        <span className={styles.bg_primary}></span>
        <span className={styles.bg_primary}></span>
      </div>
    </>
  )
}
