import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer : {
    backgroundColor: '#3777f0',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
  },
  badgeText : {
    color: 'white',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  name:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: 'grey',
  },
});

export default styles;