import { Link } from 'react-router-dom';
import { Tabela } from '../../components/Tabela';

export function Home() {
  const recados = [
    {
      itemCol1: 'estudar react',
      itemCol2: 'praticar muito no fim de semana',
    },
    {
      itemCol1: 'estudar mais react',
      itemCol2: 'praticar no feriado',
    },
    {
      itemCol1: 'estudar react de novo',
      itemCol2: 'praticar muito na semana que vem',
    },
    {
      itemCol1: 'estudar react mais uma vez',
      itemCol2: 'praticar muito',
    },
  ];

  return (
    <>
      <h1 className="text-center">Lista de recados</h1>
      <Tabela
        titleCol1="Descrição"
        titleCol2="Detalhamento"
        tableBody={recados}
      />

      <Link to="/mercado">ir para lista de mercado</Link>
    </>
  );
}
