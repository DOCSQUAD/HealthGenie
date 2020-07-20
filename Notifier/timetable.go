package main

import (
	"fyne.io/fyne/widget"
	"fyne.io/fyne/app"
	"github.com/fyne-io/examples/img/icon"
)

func main() {
	app := app.New()

	w := app.NewWindow("Hello")
	w.SetContent(widget.NewHBox(
		widget.NewIcon(icon.ClockBitmap),
		widget.NewLabel("Hello Fyne!"),
		widget.NewButton("Quit", func()		{
			app.Quit()
		}),
	))

	w.ShowAndRun()
}