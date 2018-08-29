package RxJava;

import io.reactivex.Observable;

public class DefaultIfEmpty {

	static String result = "";
	public static void main(String[] args) {
		
		Observable.empty()
		  .defaultIfEmpty("Observable is empty")
		  .subscribe(s -> result += s);
		System.out.println(result);
	}
}