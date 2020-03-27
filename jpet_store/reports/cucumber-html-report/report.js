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
  "duration": 7078299482,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.register()"
});
formatter.result({
  "duration": 5636236945,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.select_catogory()"
});
formatter.result({
  "duration": 374991582,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.select_product()"
});
formatter.result({
  "duration": 493910234,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.addtocart()"
});
formatter.result({
  "duration": 11192310440,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Register_and_Addtocart_Steps.close()"
});
formatter.result({
  "duration": 229049515,
  "status": "passed"
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
  "duration": 4973967172,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.checkforlink()"
});
formatter.result({
  "duration": 51945882,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.typeaproduct()"
});
formatter.result({
  "duration": 119375648,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.search()"
});
formatter.result({
  "duration": 11447805571,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Searchforlink_and_Searchforproduct_Steps.close()"
});
formatter.result({
  "duration": 125416835,
  "status": "passed"
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
  "duration": 4754218473,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Printproducttable_Steps.selectcategoryprint()"
});
formatter.result({
  "duration": 381649637,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Printproducttable_Steps.printproducttable()"
});
formatter.result({
  "duration": 10944365251,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_App_Printproducttable_Steps.close()"
});
formatter.result({
  "duration": 167179781,
  "status": "passed"
});
});