import styled from 'styled-components'
import styles from '../../styles/variables.module.css'

export const Line = () => <StyledLine className={styles.bg_primary} />

const StyledLine = styled.div`
  height: 5px;
  width: 130px;
`
