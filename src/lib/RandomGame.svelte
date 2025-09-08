<script>
  let count = 0;
  let clear = false;

  //setInterval(()=>{if(!clear)increment()}, 10);

  function increment() {
    count += 1;

    // 10000分の1の確率でゲームクリア
    const n = Math.floor(Math.random() * 1000); // 0〜999
    clear = n === 0;
  }
</script>


<div class="bg-violet-200 w-3xl max-w-full h-50 items-center text-center content-center p-6">
  {#if clear}
    <h1 class="text-4xl font-bold mb-4 text-green-600">🎉 Congratulations! You Win! 🎉</h1>
    <p class="text-lg mb-4">You clicked the button {count} times.</p>
  {:else}
    <h1 class="text-3xl mb-4">CLICK!</h1>
    <button onclick={increment} class="w-fit h-fit text-xl font-bold text-white bg-pink-400 rounded-lg px-4 py-1 hover:bg-pink-500 duration-200">
      Try: {count}
    </button>
  {/if}
  
</div>
