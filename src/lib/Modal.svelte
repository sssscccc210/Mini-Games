<script>
    import { onMount } from "svelte";
    import showModalStore from "../js/showModalStore";
    import currentGameStore from "../js/currentGameStore";

    let modalContainer;
    let modalContent;

    onMount(()=>{
        showModalStore.subscribe(v =>{
            if(v) showModal();
            else hideModal();
        });
    })

    // モーダルを表示する関数
    const showModal = () => {
        modalContainer.classList.remove('hidden');
        modalContainer.style.opacity = '1';
        modalContent.classList.add('modal-enter-active');

        // 後ろのスクロールを防止
        document.body.style.overflow = 'hidden';
    };

    // モーダルを閉じる関数
    const hideModal = () => {
        modalContent.classList.add('modal-leave-active');
        modalContent.classList.remove('modal-enter-active');
        setTimeout(() => {
            modalContainer.style.opacity = '0';
            modalContainer.classList.add('hidden');
            modalContent.classList.remove('modal-leave-active');

            // 後ろのスクロールを許可
            document.body.style.overflow = 'auto';

            // ゲームコンポーネントをリセット
            currentGameStore.set(null)
        }, 800); // CSSアニメーションの時間と一致させる
    };
</script>

<!-- モーダルコンテナ (非表示状態) -->
<div bind:this={modalContainer} class="hidden fixed h-dvh w-dvw top-0 bg-black/80 flex justify-center items-center p-4 transition-opacity duration-300">
    
    <!-- モーダルコンテンツ -->
    <div bind:this={modalContent} class="bg-white p-8 rounded-2xl shadow-2xl container transform transition-all w-fit min-w-dvw lg:min-w-5xl aspect-video">
        <div class="flex justify-end items-center mb-4">
            <!-- <h2 class="text-2xl font-bold text-gray-800">お知らせ</h2> -->
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button id="close-modal"
                onclick={()=>{showModalStore.set(false)}}
                class="text-gray-400 hover:text-gray-600 transition duration-200"
            >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div class="w-full h-full bg-white text-gray-900 justify-self-center place-content-center place-items-center">
            <svelte:component this={$currentGameStore} />
        </div>
        <!-- <div class="flex justify-end">
            <button onclick={()=>showModalStore.set(false)} class="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
                OK
            </button>
        </div> -->
    </div>
</div>