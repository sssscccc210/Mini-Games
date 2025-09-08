<script>
    import { get } from 'svelte/store';
    import { onMount } from 'svelte';
    import { locale, setLocale } from '../translations/translations';

    let currentLang;

    const currentLangGetter = setInterval(()=>{
        currentLang = get(locale);
        if(currentLang) clearInterval(currentLangGetter);
    }, 100);

    function toggleTheme() {
        const htmlEl = document.documentElement;
        if (htmlEl.classList.contains('dark')) {
            htmlEl.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlEl.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    function toggleLanguage(){
        if(currentLang === "ja"){
            currentLang = "en";
        } else {
            currentLang = "ja";
        }
        setLocale(currentLang);
        localStorage.setItem("lang", currentLang);
    }

</script>


<!-- Code from: https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars -->

<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<nav class="relative bg-sky-500 dark:bg-sky-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button
                    type="button"
                    command="--toggle"
                    commandfor="mobile-menu"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        class="size-6 in-aria-expanded:hidden stroke-black dark:stroke-white"
                    >
                        <path
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        class="size-6 not-in-aria-expanded:hidden stroke-black dark:stroke-white"
                    >
                        <path
                            d="M6 18 18 6M6 6l12 12"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div
                class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
                <div class="flex shrink-0 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                    </svg>

                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
                        <a
                            href="#"
                            aria-current="page"
                            class="rounded-md px-3 py-2 text-sm font-medium text-white dark:text-white bg-gray-900"
                            >Games</a
                        >
                        <a
                            href="#about"
                            class="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-white/5"
                            >About</a
                        >
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
                <button
                    type="button"
                    class="relative rounded-full p-1 m-4 text-gray-400"
                    onclick={toggleTheme}
                >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Theme</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-6 dark:hidden">
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6 hidden dark:inline">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                    </svg>

                </button>


                <button
                    type="button"
                    class="relative rounded-full p-1 text-gray-400"
                    onclick={toggleLanguage}
                >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">language</span>
                    <span class="fi" class:fi-us={currentLang === "en"} class:fi-jp={currentLang === "ja"}></span>

                </button>
            </div>
        </div>
    </div>

    <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
            <a
                href="#"
                aria-current="page"
                class="rounded-md px-3 py-2 text-sm font-medium text-white dark:text-white bg-gray-900"
                >Games</a
            >
            <a
                href="#about"
                class="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-white/5"
                >About</a
            >
        </div>
    </el-disclosure>
</nav>
