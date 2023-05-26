import { Box, Flex, Logo, ThemeSwitcher, Link, Button, LangSelector } from '@pancakeswap/uikit'
import { useTheme as useNextTheme } from 'next-themes'
import { useTranslation, languageList } from '@pancakeswap/localization'
import { useTheme } from '@pancakeswap/hooks'
import NoSSR from 'components/NoSSR'

const Menu = () => {
  // 現在のテーマを取得します
  const theme = useTheme()// テーマを変更する関数を取得します。
  const { setTheme } = useNextTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()// 現在の言語を取得します。
// ナビゲーションバーをレンダリングします。

  return (
    <Flex height="56px" bg="backgroundAlt" px="16px" alignItems="center" justifyContent="space-between" zIndex={9}>
      <Flex>
       
        <Logo href="/" />　
      </Flex>
      <Flex alignItems="center">  // テーマスイッチャーをレンダリングします。
        <NoSSR>
          <Box mr="16px">
            <ThemeSwitcher isDark={theme.isDark} toggleTheme={() => setTheme(theme.isDark ? 'light' : 'dark')} />
          </Box>
        </NoSSR>
        // 言語セレクターをレンダリングします。
        <LangSelector
          buttonScale="xs"
          color="textSubtle"
          hideLanguage
          currentLang={currentLanguage.code}
          langs={languageList}
          setLang={setLanguage}
        />
        // PancakeSwap のアプリを起動するためのリンクをレンダリングします。
        <Link external href="https://pancakeswap.finance/">
          <Button scale="sm">{t('Launch App')}</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Menu
