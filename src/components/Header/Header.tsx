import React from 'react';
import { A11yHidden, GlobalNav, Logo, SearchBar, SvgIcon } from '..';

export function Header() {
  return (
    <header>
      <A11yHidden as="h1">GIFT</A11yHidden>
      <div style={{ height: 100 }}>
        <Logo />
      </div>
      <GlobalNav />
      <button>Upload</button>
      <button>Create</button>
      <div>
        {/* toggle */}
        <ul>
          <li>Settings</li>
          <li>Favorites</li>
          <li>LogOut</li>
        </ul>
      </div>
      <SearchBar />
    </header>
  );
}
