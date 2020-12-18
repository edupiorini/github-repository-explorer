import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header } from './styles';

import logoImg from '../../assets/github-logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <Header>
      <img src={logoImg} alt="GitHub Explorer" />
      <Link to="/dashbord">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};
/**
 * Poderiamos também utilizar a componentização em uma função,
 * mas seria muito mais complicado para adicionar a tipagem, então
 * utilizamos a constante com uma arrow functionality
 * */

export default Repository;
