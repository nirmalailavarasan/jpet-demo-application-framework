package Com.Pages;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Jpet_App_Searchforlink_and_Searchforproduct_Pages {
	WebDriver driver;
	List<WebElement> link;
	
	public void launchapplication(String browser,String url) {
		// To launch Chrome browser
			
			try {
				//To launch firefox Browser
		if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver","src/test/resources/Driver/geckodriver.exe");
			driver = new FirefoxDriver();
		}
				// To launch chrome Browser
		else if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
			driver=new ChromeDriver();
		}
				// To launch InternetExplorer
		else if (browser.equalsIgnoreCase("Internet Explore")) {
				System.setProperty("webdriver.ie.driver","src/test/resources/Driver/IEDriverServer.exe");
			driver=new InternetExplorerDriver();  
		}
				//to maximize the window
		driver.manage().window().maximize(); 
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(url);
	// Exception handling command
	} catch (WebDriverException e) {
		System.out.println("Browser could not be launched");
	}
	}
	
	public int Checkforlink() {
			// To check for link
				 link = driver.findElements(By.linkText("www.mybatis.org"));
				int a=link.size();
					System.out.println("Checking link Persent :"+link.size());
					return a;
	}
	// to enter a product name
	public void type_a_product() {
		driver.findElement(By.xpath("//*[@id=\"SearchContent\"]/form/input[1]")).sendKeys("Angelfish");
	}
	public void search() 
	{
		// To search for products
			driver.findElement(By.name("searchProducts")).click();
	}
		public void takescreenshot3(String path) throws IOException, InterruptedException 
		{
			// To take screenshot for search function
			TakesScreenshot image=  ((TakesScreenshot)driver);
			Thread.sleep(5000);
			File source=image.getScreenshotAs(OutputType.FILE);
			Thread.sleep(5000);
			FileUtils.copyFile(source, new File(path));
			driver.findElement(By.xpath("//*[@id=\"BackLink\"]/a")).click();
		}
	
	public void quit() {
		//close browser
		driver.close();
	}



}
