import { backEnd, database, frontEnd, versionControl } from '@/configs/stacks';
import StackList from './components/stack-list';

const Stacks = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Tecnologias e Ferramentas</h2>
        <p className="opacity-60 text-base">
          Estas são as tecnologias e ferramentas que aprendi ao longo da minha
          carreira, durante a faculdade, cursos e projetos pessoais. Fique à
          vontade para explorar e conhecer as tecnologias que aprimoraram minha
          expertise em desenvolvimento.
        </p>
      </div>

      <StackList title="Front-end" stack={frontEnd} />

      <StackList title="Back-end" stack={backEnd} />

      <StackList title="Banco de Dados" stack={database} />

      <StackList title="Versionamento" stack={versionControl} />
    </div>
  );
};

export default Stacks;
