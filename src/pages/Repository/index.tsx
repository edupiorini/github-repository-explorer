import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/github-logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/42455128?s=460&u=c73dd082df56232ef9cb3bdaa7459e221b866d9e&v=4"
            alt="edupiorini"
          />
          <div>
            <strong>edupiorini/conceitos-nodejs</strong>
            <p>descrição do respositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="kkjhg">
          <div>
            <strong>kjdshfksjdfhksj</strong>
            <p>ksjfkjsdfh</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
/**
 * Poderiamos também utilizar a componentização em uma função,
 * mas seria muito mais complicado para adicionar a tipagem, então
 * utilizamos a constante com uma arrow functionality
 * */

export default Repository;
