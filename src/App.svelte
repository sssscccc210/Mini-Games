<script>
  import Main from './lib/Main.svelte';
  import TopNavigation from './lib/TopNavigation.svelte';
  import About from './lib/About.svelte';
  import BottomNavigation from './lib/BottomNavigation.svelte';
</script>

<main>
  <div class="sticky top-0">
    <TopNavigation />
  </div>
  <Main />
  <About />
  <BottomNavigation />
</main>
