<script>
    import { t } from '../translations/translations';
</script>

<hr class="m-4 mt-20">
<div id="about" class="p-4">
    <h1 class="text-4xl font-bold underline py-2.5 text-center">About</h1>
    <p class="my-4">
        {@html $t('common.about_para1')}
        <br>
        <!--URLに使う記号は16進数に置き換える (ex. 0x12 → %12) -->
        <a href={$t('common.x_share_url')} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
            {$t('common.share_on_x')}
        </a>
    </p>

    {$t('common.this_app_use')}
    <br>
    <ul class="list-disc list-inside my-2 pl-2">
        <li>Svelte</li>
        <li>Vite</li>
        <li>Tailwind CSS</li>
        <li>Tailwind Plus (NOT for commercial use)</li>
        <li>sveltekit-i18n</li>
        <li>flag-icons</li>
        <li>etc...</li>
    </ul>
</div>
