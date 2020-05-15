const emails = [
  "test.email+alex@kavak.com",
  "test.e.mail+bob.cathy@kavak.com",
  "testemail+david@ka.vak.com",
];
function uniqueEmails(emails) {
  return emails
    .map((item) => {
      const head = item.split("@")[0].split("+")[0].split(".").join("");
      const tail = item.split("@")[1];
      return head.concat("@", tail ? tail : "");
    })
    .filter((item2, index, arr) => {
      return arr.indexOf(item2) === index;
    });
}
console.log(uniqueEmails(emails));
