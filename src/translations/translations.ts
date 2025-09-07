import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },
    {
      locale: 'ja',
      key: 'common',
      loader: async () => (
        await import('./ja/common.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loadTranslations, setLocale } = new i18n(config);
