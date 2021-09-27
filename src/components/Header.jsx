import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to ="/">
        <h1>Alchemy 🥲 Lab</h1>
      </Link>
    </div>
  );
}
