import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Robert Santos</Title>
      <Paragraph type="secundario" fontSize={16}>
        ro-hsa
      </Paragraph>
      <Description fontSize={12} type="principal">
        Dev front-end
      </Description>
      <ThemeButton onClick={props.changeTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
