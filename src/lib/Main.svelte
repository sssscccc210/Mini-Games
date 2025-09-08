<script>
    import { t } from '../translations/translations';
    import showModalStore from '../js/showModalStore';
    import currentGameStore from '../js/currentGameStore';
    import RandomGame from './games/RandomGame.svelte';
    import EquationGame from './games/EquationGame.svelte';

    const GAME_COMPONENTS = [
        {
            component: RandomGame,
            titleId: 'common.random_completely',
            descId: 'common.random_completely_desc'
        },
        {
            component: EquationGame,
            titleId: 'common.equation_game',
            descId: 'common.equation_game_desc'
        }
        // 他のゲームコンポーネントをここに追加できます
    ]
</script>

<div class="text-center">
    <h1 class="text-5xl font-bold underline py-2.5 my-5">Mini Games!</h1>
    <h2>{$t('common.welcome')}</h2>

    {#each GAME_COMPONENTS as game}
        <div class="mx-4 md:mx-8 lg:mx-16 my-4 p-4 rounded-md border-gray-600 dark:border-gray-300 border-1 shadow-game-panel">
            <h1 class="text-2xl font-bold underline">{$t(game.titleId)}</h1>
            <p class="m-4">{@html $t(game.descId)}</p>
            <button class="text-lg px-6 py-2 bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-md text-white cursor-pointer duration-300"
                onclick={()=>{showModalStore.set(true); currentGameStore.set(game.component)}}>
                START!
            </button>
        </div>
    {/each}
</div>
