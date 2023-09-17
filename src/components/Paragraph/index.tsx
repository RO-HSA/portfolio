import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
  type?: 'principal' | 'secundario'
}

const Paragraph = ({ children, fontSize, type = 'principal' }: Props) => (
  <P type={type} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragraph
