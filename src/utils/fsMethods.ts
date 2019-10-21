import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';

/**
 * Get permissions to access and read a file from the filesystem.
 *
 * @returns {Promise<boolean>}
 */
async function hasFileAccessPermission(): Promise<boolean> {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
  );
  return result === PermissionsAndroid.RESULTS.GRANTED;
}

async function commonFs(path): void {
  if (!path) {
    throw new Error('wrong path');
  }

  // checking read permission
  const grantStatus = await hasFileAccessPermission();
  if (!grantStatus) {
    throw new Error('permision denied');
  }

  // checking if file exists
  const exists = await RNFS.exists(path);
  if (!exists) {
    throw new Error('file does not exist');
  }
}

const readFile = async (): Promise<string> => {
  const result = await RNFS.readFile(`${RNFS.DocumentDirectoryPath}/test.txt`);
  return result;
};

const writeFile = async (text: string): Promise<void> => {
  console.log(text);
  console.log(RNFS.DocumentDirectoryPath);

  // checking read permission
  const grantStatus = await hasFileAccessPermission();
  if (!grantStatus) {
    throw new Error('permision denied');
  }
  try {
    const sucess = await RNFS.writeFile(
      '/storage/emulated/0/Downloads/test.txt',
      text,
      'utf8'
    );
    console.log(sucess);
  } catch (error) {
    throw Error(error.message);
  }
};

export { readFile, writeFile };
