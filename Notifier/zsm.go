package main

import (
	"eat"
    "log"
    "gopkg.in/toast.v1"
)

func main() {

	go eat.Reminder()

    notification := toast.Notification{
		AppID: "Health Genie",
        Message: "Good morning! How are you feeling today?",
        Icon: "C:/Go/bin/notifier/Icon/doc.png",
        Actions: []toast.Action{
			//{"protocol", "", "",""},
			{"background", "Energized", "","C:/Go/bin/notifier/Icon/2.png"},
            {"background", "Happy", "dismiss","C:/Go/bin/notifier/Icon/1.png"},
			{"background", "Sad", "dismiss","C:/Go/bin/notifier/Icon/sad.png"},
			{"background", "Down", "dismiss","C:/Go/bin/notifier/Icon/4.png"},
			
        },
		ActivationArguments: "https://www.psychologytoday.com/us/blog/hide-and-seek/201701/10-simple-ways-improve-your-mood-when-youre-feeling-down",
    }

    err := notification.Push()
    if err != nil {
        log.Fatalln(err)
    }
}