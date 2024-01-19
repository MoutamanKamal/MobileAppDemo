import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

const setValue = (key: string, value: any): Promise<any> => {
  return RNSecureStorage.setItem(key, value, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });
};

const getValue = (key: string): Promise<any> => {
  return RNSecureStorage.getItem(key);
};

const removeKey = (key: string): Promise<any> => {
  return RNSecureStorage.removeItem(key);
};

const keyExist = (key: string): Promise<any> => {
  return RNSecureStorage.exist(key);
};
const setMultiValue = (items: any): Promise<any> => {
  return RNSecureStorage.multiSet(items, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });
};
const getMultiValue = (keys: string[]): Promise<any> => {
  return RNSecureStorage.multiGet(keys);
};
export default {
  setValue,
  getValue,
  removeKey,
  keyExist,
  setMultiValue,
  getMultiValue,
};
