import moment from "jalali-moment";
const m = moment();

const listOfDays = [
   {
      date: m.locale("fa").format("DD"),
      day: m.locale("fa").format("dddd"),
      id: Math.floor(Math.random() * 100000000000),
   },
];
export function getTenDays() {
   for (let i = 1; i <= 9; i++) {
      const newDay = {
         date: m.add(1, "day").locale("fa").format("DD"),
         day: m.locale("fa").format("dddd"),
         id: Math.floor(Math.random() * 100000000000),
      };
      listOfDays.push(newDay);
   }
   listOfDays.length = 10;

   return listOfDays;
}
