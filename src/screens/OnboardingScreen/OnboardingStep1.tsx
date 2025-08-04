import { View, StyleSheet, LayoutAnimation } from 'react-native';
import { useTranslation } from 'react-i18next';
import languageManager from '../../utils/i18next/languageManager';
import {
  SelectLanguage,
  UIButton,
  UIScreenContainer,
  UIText,
} from '../../components';

export const OnboardingStep1 = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = async (language: 'en' | 'ru') => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    await languageManager.changeLanguage(language);
  };

  return (
    <UIScreenContainer style={styles.container}>
      <View style={styles.selectLangContainer}>
        <UIText style={styles.title} size={24} weight="600">
          {t('chooseLanguage')}
        </UIText>
        <SelectLanguage
          onSelect={handleChangeLanguage}
          selected={languageManager.getCurrentLanguage()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton title={t('next')} onPress={() => {}} />
      </View>
    </UIScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 40,
  },
  selectLangContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});
