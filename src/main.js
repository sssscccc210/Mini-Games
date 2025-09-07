import { mount } from 'svelte'
import App from './App.svelte'

import './app.css'
import "flag-icons/css/flag-icons.min.css";
import '@tailwindplus/elements';

// 言語読み込み設定を追加
import { loadTranslations } from "./translations/translations";
let lang = ("lang" in localStorage) ? localStorage.lang : "ja";
loadTranslations(lang, "/");

// テーマ（light/dark）の設定
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
