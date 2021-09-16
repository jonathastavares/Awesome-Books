/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

class DateLoader {
  static getDate() {
    const dt = luxon.DateTime.now();
    const time = dt.toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
    return time;
  }
}