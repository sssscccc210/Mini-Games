import { writable } from "svelte/store";
const currentGameStore = writable(null);
export default currentGameStore;
