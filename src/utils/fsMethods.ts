import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';

/**
 * Get permissions to access and read a file from the filesystem.
 *
 * @returns {Promise<boolean>}
 */
const path = `${RNFS.DocumentDirectoryPath}/test.txt`;

async function hasFileAccessPermission(): Promise<boolean> {
  if (Platform.OS === 'android') {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    return result === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
}

const readFile = async (): Promise<string> => {
  const grantStatus = await hasFileAccessPermission();
  if (!grantStatus) {
    throw new Error('permision denied');
  }
  const result = await RNFS.readFile(path);
  return result;
};

const writeFile = async (text: string): Promise<void> => {
  // checking read permission
  const grantStatus = await hasFileAccessPermission();
  if (!grantStatus) {
    throw new Error('permision denied');
  }
  try {
    await RNFS.writeFile(path, text, 'utf8');
  } catch (error) {
    throw Error(error.message);
  }
};

export { readFile, writeFile };
