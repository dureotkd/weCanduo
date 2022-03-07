import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeConatiner: {
    flex: 1,
    display: 'flex',
    height: '100%',
    padding: 6,
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
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
    backgroundColor: '#303f9f',
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
  kakaoImg: {
    width: 32,
    height: 32,
    zIndex: 10,
  },
  spaceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    height: 50,
    marginTop: 15,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
  },
  boldCenterText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default styles;
