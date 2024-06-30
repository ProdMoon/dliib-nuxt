import moment from 'moment';

export default function (date: string | undefined) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}