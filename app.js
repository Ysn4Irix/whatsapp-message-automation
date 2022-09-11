/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 11-09-2022
 * @modify date 11-09-2022
 * @website https://ysnirix.live
 */

const puppeteer = require("puppeteer")

/**
 *
 * @param {string} contactName
 */
const bomber = async (contactName) => {
  try {
    // launch the chromium browser instance
    const browser = await puppeteer.launch({ headless: false })
    // creating a new tab
    const page = await browser.newPage()
    // go to the specified url
    await page.goto("https://web.whatsapp.com", {
      waitUntil: "load",
      timeout: 0,
    })
    // creating the selector to find the contact name
    const user = "span[title='" + contactName + "']"
    // wait for the element to be find
    await page.waitForSelector(user, {
      waitUntil: "load",
      timeout: 0,
    })
    // selecting the element
    const target = await page.$(user, {
      waitUntil: "load",
      timeout: 0,
    })
    // click on the element
    await target.click()
    // find the message box element
    const message = await page.$("p[class='selectable-text copyable-text']")

    // specify how many message will be send to the contact
    for (let i = 0; i < 100; i++) {
      await message.type("🤖 Powered by YsnIrix") // type the message
      await page.keyboard.press("Enter") // and pressing Enter for sending
    }
  } catch (error) {
    console.log(error.message)
  }
}

;(async () => {
  await bomber("ContactName")
})()
