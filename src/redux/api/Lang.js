const  Langcode = async ()=> {
  try {
    const value = await AsyncStorage.getItem('lang')
    if(value !== null) {
      console.log('====================================');
      console.log(value);
      console.log('====================================');
      return value
    }
  } catch(e) {
    return 'vn'
    // error reading value
  }
  
}
export const Lang = {Langcode}
