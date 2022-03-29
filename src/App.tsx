import { Component, lazy } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { invoke } from '@tauri-apps/api/tauri'

const HelloP = lazy(async () => {
  const str = await invoke('hello_world');

  return {
    default: < div >
      {str as string}
    </div> as Component,
  }
});

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
          <HelloP />
      </header>
    </div>
  );
};

export default App;
