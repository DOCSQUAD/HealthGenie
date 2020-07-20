package main
import (
    "gopkg.in/toast.v1"
    "time"
    "log"
    // "fmt"
)

func main() {

	for {
        notification := toast.Notification{
            AppID: "Health Genie",
            Title: "Have some water",
            Message: "It's good to keep yourself hydrated!",
            Actions: []toast.Action{
            //{"protocol", "", "",""},
                {"background", "Remind me later", "remindlater&amp;contentId=351",""},   
                {"background", "Roger!", "remindlater&amp;contentId=351",""},  
            },
            Icon: "C:/Go/bin/notifier/Icon/doc.png",
        }
        err3 := notification.Push()
        if err3 != nil {
            log.Fatalln(err3)
        }   
        // fmt.Println("Going to sleep")
        time.Sleep(2 * time.Hour)
        // fmt.Println("Now up")  
    	
		
    }
}