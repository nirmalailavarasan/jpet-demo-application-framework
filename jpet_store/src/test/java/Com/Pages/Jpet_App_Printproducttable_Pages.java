package Com.Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Jpet_App_Printproducttable_Pages {
	WebDriver driver;
	public void launchapplication(String browser,String url) {
	// To launch Chrome browser
		
		try {
			//To launch firefox Browser
	if (browser.equalsIgnoreCase("firefox")) {
		System.setProperty("webdriver.gecko.driver","C:\\Users\\Lenovo\\Desktop\\FrameWorkDemo-master\\jpet_store\\src\\test\\resources\\Driver\\geckodriver.exe");
		driver = new FirefoxDriver();
	}
			// To launch chrome Browser
	else if (browser.equalsIgnoreCase("chrome")) {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Lenovo\\Desktop\\FrameWorkDemo-master\\jpet_store\\src\\test\\resources\\Driver\\chromedriver.exe");
		driver=new ChromeDriver();
	}
			// To launch InternetExplorer
	else if (browser.equalsIgnoreCase("Internet Explore")) {
			System.setProperty("webdriver.ie.driver","C:\\Users\\Lenovo\\Desktop\\FrameWorkDemo-master\\jpet_store\\src\\test\\resources\\Driver\\IEDriverServer.exe");
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
		//to select category from category list
		public void selectcategorytoprint()
		{
			driver.findElement(By.xpath("//*[@id=\"SidebarContent\"]/a[1]/img")).click();
		}
		//to print product table
		public void printproducttable() {
						String s = driver.findElement(By.xpath("//*[@id=\"Catalog\"]/table/tbody")).getText();
						System.out.println(s+" ");
						driver.findElement(By.xpath("//*[@id=\"BackLink\"]/a")).click();
					}
		// to close browser
		public void quit() {
			//close browser
			driver.close();
}
		
		
}
