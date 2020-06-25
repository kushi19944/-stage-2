import RPA from 'ts-rpa';

async function Start() {
  await RPA.WebBrowser.get('http://example.selenium.jp/reserveApp/'); // RPA.WebBrowser.get('') の中に飛びたいURLを入れる
  await RPA.sleep(3000); // 3秒待機。 10秒待機させる場合は、10000 にする。
  const DayInput = await RPA.WebBrowser.findElementById('reserve_day'); // 日入力欄を DayInput と定義。
  await DayInput.clear(); // 最初に文字が入っていたので、消す
  await RPA.WebBrowser.sendKeys(DayInput, ['26']); // RPA.WebBrowser.sendKeys(,) の左側に入力したい要素を入れる。 右側の['']の中に文字を入れる
  const NameInput = await RPA.WebBrowser.findElementById('guestname');
  await RPA.WebBrowser.sendKeys(NameInput, ['田中']);
  const NextButton = await RPA.WebBrowser.findElementById('goto_next');
  await RPA.WebBrowser.mouseClick(NextButton); // NextButton をクリックする
}

Start();
