import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    console.log('TULI GET TOKEN!')
    const _get = await AsyncStorage.getItem(`${this.namespace}:accessToken`,  );
    return _get;
  }

  async setAccessToken(accessToken) {
    console.log('TULI SET ACCESS TOKEN!');
    //await AsyncStorage.setItem(`${this.namespace}:accessToken`, JSON.stringify(accessToken));
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  async removeAccessToken() {
    console.log('TULI REMOVE TOKEN');
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;