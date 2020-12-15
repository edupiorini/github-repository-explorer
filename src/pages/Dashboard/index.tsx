import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/github-logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42455128?s=460&u=c73dd082df56232ef9cb3bdaa7459e221b866d9e&v=4"
            alt="Eduardo Piorini"
          />
          <div>
            <strong>edupiorini/conceitos-nodejs</strong>
            <p>
              Repositório criado para desenvolvimento do desafio sobre os
              conceitos de Node.JS
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42455128?s=460&u=c73dd082df56232ef9cb3bdaa7459e221b866d9e&v=4"
            alt="Eduardo Piorini"
          />
          <div>
            <strong>edupiorini/conceitos-nodejs</strong>
            <p>
              Repositório criado para desenvolvimento do desafio sobre os
              conceitos de Node.JS
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42455128?s=460&u=c73dd082df56232ef9cb3bdaa7459e221b866d9e&v=4"
            alt="Eduardo Piorini"
          />
          <div>
            <strong>edupiorini/conceitos-nodejs</strong>
            <p>
              Repositório criado para desenvolvimento do desafio sobre os
              conceitos de Node.JS
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
/**
 * Poderiamos também utilizar a componentização em uma função,
 * mas seria muito mais complicado para adicionar a tipagem, então
 * utilizamos a constante com uma arrow functionality
 * */

export default Dashboard;
