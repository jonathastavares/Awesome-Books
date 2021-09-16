class DateLoader {
  static getDate() {
    const dt = luxon.DateTime.now();
    let time = dt.toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
    return time;
  }
}