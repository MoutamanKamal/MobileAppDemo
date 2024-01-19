import React, {useEffect} from 'react';
import {Container} from '@components';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const Details = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: t('signin.title')});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container.Flex>
      <Text>{t('details.title')}</Text>
    </Container.Flex>
  );
};

export default Details;
