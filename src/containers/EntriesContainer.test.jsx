/* eslint-disable max-len */
import React from 'react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import listData from '../components/fixtures/listData.json';
import EntriesContainer from './EntriesContainer';

const server = setupServer(
  rest.get('https://still-journey-26608.herokuapp.com/api/v1/alchemy-cry-lab',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(listData)
      );
    }),

  rest.post('https://still-journey-26608.herokuapp.com/api/v1/alchemy-cry-lab',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          date: '2021-09-27', 
          event: true, 
          id: '24', 
          name: 'test test',
          note: 'aaaaaah'
        }));
    }
  ));

describe('Entries Container Test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should enter a new cry and re-render the DOM with the new entry', async () => {
  
    render(
      <MemoryRouter>
        <EntriesContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const nameInput = await screen.findByPlaceholderText('your name');
    const noteInput = await screen.findByPlaceholderText('tell me about it');
    const submitButton = await screen.findByRole(
      'button',
      { name: 'submit' }
    );
      
    userEvent.type(nameInput, 'test test');
    userEvent.type(noteInput, 'aaaaaah');

    act(() => {
      fireEvent.click(submitButton);
    });

    return waitFor(() => {
      const response = screen.getByText(
        'Your entry was successfully posted. If you think you\'ll want to modify this entry in the future, store this id to access the entry:'
      );
  
      expect(response).toBeInTheDocument();

    });
  });
});
