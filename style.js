import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  dateTouch: {
    width: 142
  },
  activeDateTouch: {
    backgroundColor: '#ffce54'
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateIcon: {
    width: 32,
    height: 32,
    marginLeft: 5,
    marginRight: 5
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    color: '#333'
  },
  placeholderText: {
    color: '#c9c9c9'
  },
  activeText: {
    fontWeight: 'bold',
    color: '#000'
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  datePickerHeader: {
    position: 'absolute',
    top: 0,
    height: 42,
    width: 375,
    backgroundColor: '#E9F7FD',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnText: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF'
  },
  btnTextCancel: {
    fontWeight: 'normal'
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'normal',
    color: '#000000'
  },
  datePicker: {
    marginTop: 42
  },
  disabled: {
    backgroundColor: '#eee'
  }
});

export default style;
