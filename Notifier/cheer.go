package main

import (
    "log"
    "gopkg.in/toast.v1"
)

func main() {


    notification := toast.Notification{
		AppID: "Health Genie",
        Message: "Here is something to refresh your mood",
        Icon: "C:/Go/bin/notifier/Icon/doc.png",
        
		ActivationArguments: "https://www.youtube.com/watch?v=yZpaIoZYI0o",
    }

    err := notification.Push()
    if err != nil {
        log.Fatalln(err)
    }
}