import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeConatiner: {
    flex: 1,
    display: 'flex',
    padding: 12,
    height: '100%',
  },
  defaultConatiner: {
    padding: 12,
    display: 'flex',
  },
  centrConatiner: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'silver',
    color: 'black',
    marginTop: 36,
    borderRadius: 3,
    height: 40,
  },
  disabledBtn: {
    height: 40,
    backgroundColor: 'silver',
    borderRadius: 3,
    marginTop: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 3,
    marginTop: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeLogo: {
    width: 200,
    height: 200,
    borderRadius: 1000,
    borderColor: '#d69e2e',
    borderWidth: 1,
  },
  defaultBtn: {
    backgroundColor: '#2195f2',
    borderRadius: 6,
    padding: 12,
  },
  bigText: {
    fontSize: 18,
    color: 'white',
  },
  defaultText: {
    color: 'white',
  },
  kakaoBtn: {
    backgroundColor: '#F9E000',
    padding: 12,
    width: 300,
    marginTop: 15,
    borderRadius: 3,
  },
  boldCenterText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
