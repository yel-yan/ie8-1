/**
 * 时间戳转字符串
 * @param str
 * @param time
 * @param addZero
 * @returns {string|*}
 * @constructor
 */
export function timeStampToStr(time, str, addZero = true) {
  // console.log(time,time instanceof Date)
  // if (!(time instanceof Date)) {
  //   time = new Date(time).getTime();
  //   console.log(time)
  // }
  str = str ? str.toLowerCase() : 'y-m-d h:i:s';
  let weeks = ['日', '一', '二', '三', '四', '五', '六'];
  let t = new Date(time * 1000);
  let year = t.getFullYear();
  let month, day, hour, minute, second;
  if (addZero) {
    month = t.getMonth() + 1 < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1;
    day = t.getDate() < 10 ? '0' + t.getDate() : t.getDate();
    hour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours();
    minute = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();
    second = t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds();
  } else {
    month = t.getMonth() + 1;
    day = t.getDate();
    hour = t.getHours();
    minute = t.getMinutes();
    second = t.getSeconds();
  }
  let week = weeks[t.getDay()];

  return str
    .replace('y', year)
    .replace('m', month)
    .replace('d', day)
    .replace('h', hour)
    .replace('i', minute)
    .replace('s', second)
    .replace('w', week);
}

/* 格式化日期 */
export function  formatDate(datetime, simple = false) {
  const tempDate = (new Date()).getTime();
  // 今天 00:00
  const todayDate = stringifyDate(tempDate, true).thatDay
  const result = stringifyDate(datetime, simple);
  const thatDay = result.thatDay;
  const deltaTime = (datetime - todayDate) / 1000;

  if (deltaTime > 0) {
    return result.withHour;
  } else if (deltaTime > - 3600 * 24) {
    return result.withLastDay;
  } else if (deltaTime > - 3600 * 24 * 7) {
    return result.withDay;
  } else if (deltaTime > - 3600 * 24 * 30) {
    return result.withMonth;
  }
  return result.withYear;
};

function stringifyDate(datetime, simple = false) {
  // let weekMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  datetime = new Date(datetime);
  const year = datetime.getFullYear();
  const simpleYear = datetime.getYear() - 100;
  let month = datetime.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  let day = datetime.getDate();
  day = day > 9 ? day : `0${day}`;
  let hour = datetime.getHours();
  hour = hour > 9 ? hour : `0${hour}`;
  let min = datetime.getMinutes();
  min = min > 9 ? min : `0${min}`;
  let week = datetime.getDay();
  week = weekMap[week];
  const thatDay = (new Date(year, month - 1, day, 0, 0, 0)).getTime();

  if (simple) {
    return {
      withYear: `${day}/${month}/${simpleYear}`,
      withMonth: `${month}-${day}`,
      withDay: `${week}`,
      withLastDay: '昨天',
      withHour: `${hour}:${min}`,
      thatDay,
    };
  }
  return {
    withYear: `${year}-${month}-${day} ${hour}:${min}`,
    withMonth: `${month}-${day} ${hour}:${min}`,
    withDay: `${week} ${hour}:${min}`,
    withLastDay: `昨天 ${hour}:${min}`,
    withHour: `${hour}:${min}`,
    thatDay,
  };
};