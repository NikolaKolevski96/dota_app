package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Match struct {
	radiantHeroId []int `json:"radiantTeam"`
	direHeroId    []int `json:"direTeam"`
}

func helloHandler(w http.ResponseWriter, req *http.Request) {
	decoder := json.NewDecoder(req.Body)
	var t Match
	err := decoder.Decode(&t)
	if err != nil {
		panic(err)
	}
	log.Println(t)
}

func main() {
	http.HandleFunc("/match", helloHandler) // Update this line of code

	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
