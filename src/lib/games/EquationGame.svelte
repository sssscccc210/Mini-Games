<script>
  import { t } from '../../translations/translations';

  // const symbols = ['+', '-', '*', '/'];// むずすぎ
  const symbols = ['+', '-'];
  const totalQuestions = 10;

  let numbers = [];
  let currentOperators = [];
  let answer = 0;
  let feedback = '';// I18nライブラリに渡すidを格納するので，直接メッセージが入るわけではない
  let currentQuestion = 1;
  let startTime = 0;
  let elapsedTime = 0;
  let isGameOver = false;
  let isGameStarted = false;
  

  function generateQuestion() {
    // 数字の範囲を調整（最初の5問は1~9，後半の5問は1~19）
    const maxNumber = currentQuestion <= 5 ? 9 : 19;

    // ランダムな数字配列を生成
    numbers = Array(5).fill(0).map(() => Math.floor(Math.random() * maxNumber) + 1);
    
    // 正しい答えを計算するためのランダムな演算子配列
    const correctOperators = Array(4).fill(0).map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    
    let expression = `${numbers[0]}${correctOperators[0]}${numbers[1]}${correctOperators[1]}${numbers[2]}${correctOperators[2]}${numbers[3]}${correctOperators[3]}${numbers[4]}`;
    try {
      answer = eval(expression);
      if (!Number.isInteger(answer) || answer < 0 || answer > 1000) {
        // 答えが整数でない，負の数，または1000を超える場合は再生成
        generateQuestion();
      }
    } catch (e) {
      generateQuestion();
    }
  };

  function checkAnswer() {
    let userExpression = `${numbers[0]}${currentOperators[0]}${numbers[1]}${currentOperators[1]}${numbers[2]}${currentOperators[2]}${numbers[3]}${currentOperators[3]}${numbers[4]}`;
    let userResult;
    try {
      userResult = eval(userExpression);
    } catch (e) {
      feedback = "common.invalid_expression";
      return;
    }

    if (userResult === answer) {
      feedback = "common.correct";
      setTimeout(() => {
        currentQuestion++;
        if (currentQuestion > totalQuestions) {
          endGame();
        } else {
          resetForNextQuestion();
          generateQuestion();
        }
      }, 1000);
    } else {
      feedback = "common.incorrect";
      // 0.5秒後にfeedbackをクリア
      setTimeout(() => {
        feedback = '';
      }, 500);
    }
  };

  function resetForNextQuestion() {
    currentOperators = ['', '', '', ''];
    feedback = '';
  }

  function startGame() {
    currentQuestion = 1;
    isGameOver = false;
    startTime = Date.now();
    resetForNextQuestion();
    generateQuestion();

    isGameStarted = true;
  };

  function endGame() {
    isGameOver = true;
    elapsedTime = (Date.now() - startTime) / 1000;
  };
  
  // タップで記号を切り替える関数
  function toggleSymbol(index) {
    const currentIndex = symbols.indexOf(currentOperators[index]);
    currentOperators[index] = symbols[(currentIndex + 1) % symbols.length];
    currentOperators = currentOperators; // Svelteに配列の変更を認識させるための再代入
  };

</script>

<div class="bg-violet-200 w-3xl max-w-full h-fit min-h-50 max-h-full items-center text-center content-center p-6">
  {#if !isGameStarted}
    <h1 class="text-4xl font-bold mb-4">{$t('common.equation_game')}</h1>
    <button on:click={startGame} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {$t('common.start_game')}
    </button>
  {:else if isGameOver}
    <div class="text-2xl font-bold mb-4">
      🎉 Congratulations! 🎉<br>
      {$t('common.clear_time_is')}{elapsedTime.toFixed(2)} {$t('common.seconds')}
    </div>
    <button on:click={startGame} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      {$t('common.play_again')}
    </button>
  {:else}
    <div class="text-xl mb-2">Q {currentQuestion} / {totalQuestions}</div>
    <div class="text-2xl sm:text-3xl font-bold mb-4 flex justify-center items-center">
      <span>{numbers[0]}</span>
      <button on:click={() => toggleSymbol(0)} class="w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center text-3xl font-bold bg-white text-gray-800 rounded-full mx-2 border-2 border-gray-400">
        {currentOperators[0]}
      </button>
      <span>{numbers[1]}</span>
      <button on:click={() => toggleSymbol(1)} class="w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center text-3xl font-bold bg-white text-gray-800 rounded-full mx-2 border-2 border-gray-400">
        {currentOperators[1]}
      </button>
      <span>{numbers[2]}</span>
      <button on:click={() => toggleSymbol(2)} class="w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center text-3xl font-bold bg-white text-gray-800 rounded-full mx-2 border-2 border-gray-400">
        {currentOperators[2]}
      </button>
      <span>{numbers[3]}</span>
      <button on:click={() => toggleSymbol(3)} class="w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center text-3xl font-bold bg-white text-gray-800 rounded-full mx-2 border-2 border-gray-400">
        {currentOperators[3]}
      </button>
      <span>{numbers[4]}</span>
      <span> = {answer}</span>
    </div>

    <button on:click={checkAnswer} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
      {$t('common.check_answer')}
    </button>
    <div class="mt-4 text-lg font-semibold">{$t(feedback)}</div>
  {/if}
</div>

<style>
  /* ボタンのスタイルはTailwind CSSで定義済み */
</style>