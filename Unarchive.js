const confirmation = confirm("Are you sure you want to UNARCHIVE all of your chats?");

if (confirmation) {
  function run() {
    let all = document.querySelectorAll('div[aria-label="Menu"]');
    if (all.length == 0) return;
    let a = all[1];
    a.click();
    let menuitems = document.querySelectorAll('div[role=menuitem]');
    let archiveChatRegex = /Unarchive chat/;
    for (let i = 0; i < menuitems.length; i++) {
      if (archiveChatRegex.test(menuitems[i].innerText)) {
        menuitems[i].click();
      }
    }
    setTimeout(run, 100);
  }
  run();
} else {
  console.log("Code execution cancelled by user.");
}
