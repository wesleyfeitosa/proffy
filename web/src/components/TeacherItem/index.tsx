import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://nationalinterest.org/sites/default/files/main_images/Fritz_pd.jpg"
          alt="Frederic the Great"
        />
        <div>
          <strong>Frederic the Great</strong>
          <span>Arte da Guerra</span>
        </div>
      </header>

      <p>
        Mestre das mais avançadas técnicas da guerra.
        <br />
        <br />
        Astuto e muito experiente, já passou por diversas batalhas sangrentas,
        saindo vencedor na maioria delas. Graças as suas conquistas militares a
        Prússia tornou-se um verdadeiro Império.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
