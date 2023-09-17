import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph type="secundario">Lista de tarefas feitas com VueJS</Paragraph>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Project
