package main
import (
    "gopkg.in/toast.v1"
    "time"
    "log"
    "fmt"
)

func main() {

	for {
        fmt.Println("Going to sleep")
        time.Sleep(1 * time.Minute)
        fmt.Println("Now up")
		currentTime := time.Now()        
    	timeStampString := currentTime.Format("2006-01-02 15:04:05")    
    	layOut := "2006-01-02 15:04:05"    
    	timeStamp, _ := time.Parse(layOut, timeStampString)
    
    	hr, min, _ := timeStamp.Clock()
      
    	if(hr == 21 && min == 11) {
    		notification := toast.Notification{
				AppID: "Health Genie",
				Title: "Lunch Time",
		        Message: "Hey you deserve a fullfilling meal",
		        Icon: "C:/Go/bin/notifier/Icon/doc.png",
	    	}
		err3 := notification.Push()
		if err3 != nil {
    		log.Fatalln(err3)
		}
		break
			
		}
    }
}	
