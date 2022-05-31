const
  dayjs = require('dayjs');

dayjs.extend(require('dayjs/plugin/localizedFormat'));

// require('dayjs/locale/en');
require('dayjs/locale/th');

module.exports = {

  dateFormat: function (date, format = 'LLL', locale = this.ctx.section.appliedLocale) {
    return dayjs(date).locale(locale).format(format);
  },

  dateISO: (date) => dayjs(date).toISOString()
};
