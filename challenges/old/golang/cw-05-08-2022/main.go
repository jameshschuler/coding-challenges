/**
* You went on a vacation with friends. Each of you paid for certain meals on the trip for the group.
* Write a function that determines who owes money to whom so that everyone pays equally.
 */

package main

import "fmt"

type Receipt struct {
	Name string
	Paid int16
}

func main() {
	receipts := []Receipt{
		{Name: "Ximena", Paid: 45},
		{Name: "Clara", Paid: 130},
		{Name: "Ximena", Paid: 100},
		{Name: "Cassidy", Paid: 140},
		{Name: "Cassidy", Paid: 76},
		{Name: "Clara", Paid: 29},
		{Name: "Ximena", Paid: 20},
	}

	fmt.Print(receipts)
}
