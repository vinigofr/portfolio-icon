import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Teste de comportamentos esperados', () => {
  render(<App />);

  const createButton = screen.getByRole('button', { name: 'Criar' });
  const insertTitle = screen.getByRole('textbox', { name: 'Título' });
  const insertTextColor = screen.getByRole('textbox', { name: 'Cor do texto' });
  const insertBackgroundColor = screen.getByRole('textbox', { name: 'Cor de fundo' });
  const insertIcon = screen.getByRole('textbox', { name: 'Ícone' });
  
  
  it('Verifica se todos os inputs podem ser preenchidos.', () => {
    fireEvent.change(insertTitle, { target: { value: 'javascript' } }); // Título
    fireEvent.change(insertTextColor, { target: { value: '000000' } }); // Black
    fireEvent.change(insertBackgroundColor, { target: { value: 'F7DF1E' } }); // Yellow
    fireEvent.change(insertIcon, { target: { value: 'javascript' } }); // Icon

    expect(insertTitle.value).toBe('javascript');
    expect(insertTextColor.value).toBe('000000');
    expect(insertBackgroundColor.value).toBe('F7DF1E');
    expect(insertIcon.value).toBe('javascript');
  });
  
  it('Verifica se ao clicar no botão "Criar", um link aparece na tela.', () => {
    fireEvent.click(createButton);

    const linkIcon = screen.getByRole('link', { name: 'javascript' });
    expect(linkIcon).toBeInTheDocument();
  });
  
  it('Verifica se ao clicar em "Criar", o conteúdo dos inputs será removido', () => {
    fireEvent.click(createButton);

    expect(insertTitle.value).toBe('');
    expect(insertTextColor.value).toBe('');
    expect(insertBackgroundColor.value).toBe('');
    expect(insertIcon.value).toBe('');
  });

  it('Verifica se ao clicar no botão de criar com os campos vazios, uma mensagem de alerta é exibida na tela.', () => {
    fireEvent.click(createButton);

    const alertMessage = screen.getByRole('alert');
    expect(alertMessage).toBeInTheDocument();
    expect(alertMessage).toHaveTextContent('Preencha todos os campos!');
  });
});