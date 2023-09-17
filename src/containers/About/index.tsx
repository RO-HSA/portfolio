import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      praesentium suscipit inventore doloremque, dolores, tempore blanditiis
      cumque assumenda molestias rem laborum quasi adipisci voluptas quod in
      error quis, omnis saepe?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=RO-HSA&show_icons=true&theme=dark&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ro-hsa&layout=compact&langs_count=7&theme=dark" />
    </GithubSection>
  </section>
)

export default About
