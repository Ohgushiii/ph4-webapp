export const FormatDate = ({ date }: { date: Date }) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateOfMonth = date.getDate();
  const day = date.getDay();
  const week = ["日", "月", "火", "水", "木", "金", "土"][day];

  return `${year}年${month}月${dateOfMonth}日 (${week})`;
};