function getTimeKor(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60,
  );
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}

function empty(value) {
  if (
    value == '' ||
    value == null ||
    value == undefined ||
    (value != null && typeof value == 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
}

function getPositionKor(position) {
  let name = {
    TOP: '탑',
    JUNGLE: '정글',
    MIDDLE: '미드',
    ADC: '원딜',
    SUPPORT: '서포터',
  };

  return name[position] || position;
}

export {getTimeKor, empty, getPositionKor};
