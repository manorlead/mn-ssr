import styled from 'styled-components'

export const Line = (props: { className?: string }) => {
  const { className } = props
  return <StyledLine className={`bg_primary ${className || ''}`} />
}

const StyledLine = styled.div`
  height: 5px;
  width: 130px;
`
