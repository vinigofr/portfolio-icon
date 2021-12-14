import { render, screen } from '@testing-library/react';
import App from '../App';

// TDD da página!
describe('Ao renderizar a página:', () => {
  render(<App />);

  it('É esperado que hajam quatro inputs', () => {
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(4);
  });

  it('É esperado que haja um botão com o texto "Criar"', () => {
    const createButton = screen.getByRole('button', { name: 'Criar' });
    expect(createButton).toBeInTheDocument();
  });

  it('É esperado que haja um input que permita inserir um título ao ícone', () => {
    const insertTitle = screen.getByRole('textbox', { name: 'Título' });
    expect(insertTitle).toBeInTheDocument();
  });

  it('É esperado que haja um input que permita inserir a cor do texto no ícone.', () => {
    const insertTextColor = screen.getByRole('textbox', { name: 'Cor do texto' });
    expect(insertTextColor).toBeInTheDocument();
  })

  it('É esperado que haja um input que permita a escolha da cor de fundo do ícone', () => {
    const insertBackgroundColor = screen.getByRole('textbox', { name: 'Cor de fundo' });
    expect(insertBackgroundColor).toBeInTheDocument();
  })

  it('É esperado que haja um input que permita escolher um ícone', () => {
  const insertIcon = screen.getByRole('textbox', { name: 'Ícone' });
  expect(insertIcon).toBeInTheDocument();
  })

});