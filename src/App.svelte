<script>
  import Main from './lib/Main.svelte';
  import TopNavigation from './lib/TopNavigation.svelte';
  import About from './lib/About.svelte';
  import BottomNavigation from './lib/BottomNavigation.svelte';
  import Modal from './lib/Modal.svelte';
</script>

<main class="initial-drop-anim-area initial-drop-anim">
  <div class="sticky top-0">
    <TopNavigation />
  </div>
  <Main />
  <About />
  <BottomNavigation />
</main>
<Modal />