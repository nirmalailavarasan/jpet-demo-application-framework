$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/JpetStore.feature");
formatter.feature({
  "line": 1,
  "name": "jpet_app",
  "description": "",
  "id": "jpet-app",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "To check register and add to cart operation",
  "description": "",
  "id": "jpet-app;to-check-register-and-add-to-cart-operation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Register_and_Addtocart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch application home page for register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "To check for registeration",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "select product category",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "select product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "To check for add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.launchapplicationforregister()"
});
formatter.result({
  "duration": 6117582620,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.register()"
});
formatter.result({
  "duration": 6206947674,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.select_catogory()"
});
formatter.result({
  "duration": 1228377130,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//*[@id\u003d\"SidebarContent\"]/a[1]/img\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IKGN2NK\u0027, ip: \u0027192.168.43.117\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Com.Pages.Jpet_App_Register_and_Addtocart_Pages.selectcategory(Jpet_App_Register_and_Addtocart_Pages.java:93)\r\n\tat Com.Stepdefinition.Jpet_App_Register_and_Addtocart_Steps.select_catogory(Jpet_App_Register_and_Addtocart_Steps.java:24)\r\n\tat ✽.Then select product category(src/main/resources/features/JpetStore.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.addtocart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.close()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "To search for link and search for product",
  "description": "",
  "id": "jpet-app;to-search-for-link-and-search-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TC02_Searchforlink_and_Product"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Launch application home page search options",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "To check for link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "to enter a product name",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "To check for search",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser for search",
  "keyword": "And "
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.launchapplicationforregister()"
});
formatter.result({
  "duration": 4392488509,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.checkforlink()"
});
formatter.result({
  "duration": 1394120,
  "error_message": "java.lang.NullPointerException\r\n\tat Com.Pages.Jpet_App_Searchforlink_and_Searchforproduct_Pages.Checkforlink(Jpet_App_Searchforlink_and_Searchforproduct_Pages.java:54)\r\n\tat Com.Stepdefinition.Jpet_App_Searchforlink_and_Searchforproduct_Steps.checkforlink(Jpet_App_Searchforlink_and_Searchforproduct_Steps.java:20)\r\n\tat ✽.Then To check for link(src/main/resources/features/JpetStore.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.typeaproduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.close()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "To print a product category table",
  "description": "",
  "id": "jpet-app;to-print-a-product-category-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@TC03_Printproducttable"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch application home page for print product table",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "To select category",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "To check for print table",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close browser for print",
  "keyword": "And "
});
formatter.match({
  "location": "Jpet_App_Printproducttable_Steps.launchapplicationforregister()"
});
formatter.result({
  "duration": 18337116444,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Printproducttable_Steps.selectcategoryprint()"
});
formatter.result({
  "duration": 6035923267,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IKGN2NK\u0027, ip: \u0027192.168.43.117\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54621}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88824b29cd59a1e8974e77051dc75e40\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"SidebarContent\"]/a[1]/img}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Com.Pages.Jpet_App_Printproducttable_Pages.selectcategorytoprint(Jpet_App_Printproducttable_Pages.java:45)\r\n\tat Com.Stepdefinition.Jpet_App_Printproducttable_Steps.selectcategoryprint(Jpet_App_Printproducttable_Steps.java:17)\r\n\tat ✽.Then To select category(src/main/resources/features/JpetStore.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jpet_App_Printproducttable_Steps.printproducttable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jpet_App_Printproducttable_Steps.close()"
});
formatter.result({
  "status": "skipped"
});
});