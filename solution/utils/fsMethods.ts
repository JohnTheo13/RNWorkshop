import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';

/**
 * Get permissions to access and read a file from the filesystem.
 *
 * @returns {Promise<boolean>}
 */
const path = '/storage/emulated/0/DCIM/test.txt';

async function hasFileAccessPermission(): Promise<boolean> {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
  );
  return result === PermissionsAndroid.RESULTS.GRANTED;
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
