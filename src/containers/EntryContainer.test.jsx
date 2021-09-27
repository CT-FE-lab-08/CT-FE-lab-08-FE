/* eslint-disable max-len */
import React from 'react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import EntryContainer from './EntryContainer';

const server = setupServer(
  rest.get('https://still-journey-26608.herokuapp.com/api/v1/alchemy-cry-lab/24',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          date: '2021-09-27', 
          event: true, 
          id: '24', 
          name: 'test name',
          note: 'test note'
        }));
    }
  ));

describe('Entries Container Test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should enter an existing id and render an edit entry form', async () => {
    const container = render(
      <MemoryRouter>
        <EntryContainer />
      </MemoryRouter>
    );


    const idInput = await screen.findByPlaceholderText('entry id');

    const submitButton = await screen.findByRole(
      'button',
      { name: 'submit-id' }
    );
    
    userEvent.type(idInput, '24');
    
    act(() => {
      fireEvent.click(submitButton);
    });
    
    return waitFor(() => {
      const nameInput = screen.getByPlaceholderText('test name');
      const noteInput = screen.getByPlaceholderText('test note');
      
      expect(nameInput).toBeInTheDocument();
      expect(noteInput).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
