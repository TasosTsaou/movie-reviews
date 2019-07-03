import { AsyncStorage } from 'react-native';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
}

const retrieveData = async key => {

        try {
            const value = await AsyncStorage.getItem(key);
            return new Promise( (resolve, reject) => resolve(value) );
        } catch (error) {
            console.log(error);
        }

}

const deleteData = async key => {

    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }

}

const paginate = (array, pageSize, pageNum) => {
    pageNum--;
    return array.slice(0, (pageNum + 1) * pageSize);
}

const validateString = value => value !== null && value !== undefined && value !== '';

export default { storeData, retrieveData, deleteData, validateString, paginate };