<script>
    import { t } from '../translations/translations';

    let modalContainer;
    let modalContent;

    // モーダルを表示する関数
    const showModal = () => {
        modalContainer.classList.remove('hidden');
        modalContainer.style.opacity = '1';
        modalContent.classList.add('modal-enter-active');
    };

    // モーダルを閉じる関数
    const hideModal = () => {
        modalContent.classList.add('modal-leave-active');
        modalContent.classList.remove('modal-enter-active');
        setTimeout(() => {
            modalContainer.style.opacity = '0';
            modalContainer.classList.add('hidden');
            modalContent.classList.remove('modal-leave-active');
            
        }, 800); // CSSアニメーションの時間と一致させる
    };
</script>

<div class="text-center">
    <h1 class="text-5xl font-bold underline py-2.5 my-5">Mini Games!</h1>
    <h2>{$t('common.welcome')}</h2>

    <div class="mx-4 md:mx-8 lg:mx-16 my-4 p-4 rounded-md border-gray-600 dark:border-gray-300 border-1 shadow-game-panel">
        <h1 class="text-2xl font-bold underline">{$t('common.random_completely')}</h1>
        <p class="m-4">{@html $t('common.random_completely_desc')}</p>
        <button class="text-lg px-6 py-2 bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-md text-white cursor-pointer duration-300"
            on:click={showModal}>
            START!
        </button>
    </div>



    <!-- モーダルコンテナ (非表示状態) -->
    <div bind:this={modalContainer} class="hidden fixed h-full w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 transition-opacity duration-300">
        
        <!-- モーダルコンテンツ -->
        <div bind:this={modalContent} class="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full transform transition-all">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold text-gray-800">お知らせ</h2>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button id="close-modal" class="text-gray-400 hover:text-gray-600 transition duration-200">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p class="text-gray-600 mb-6">
                これはアニメーション付きのポップアップモーダルです。ふわっと浮き上がって表示されます。
            </p>
            <div class="flex justify-end">
                <button on:click={hideModal} class="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
                    OK
                </button>
            </div>
        </div>
    </div>
</div>
