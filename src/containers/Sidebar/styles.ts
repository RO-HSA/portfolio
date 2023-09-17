import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ThemeButton = styled.button`
  font-size: 10px;
  color: ${(props) => props.theme.bgColor};
  border-radius: 12px;
  padding: 8px;
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 48px;
    text-align: center;
  }
`
