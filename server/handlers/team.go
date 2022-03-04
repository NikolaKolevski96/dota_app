package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jasonodonnell/go-opendota"
)

var (
	queryInsertTeam = "INSERT INTO team(team_id, rating, wins, losses, name, tag, metadata, last_match ) VALUES (?, ? , ? , ?, ? , ? )"
)

func GetTeam(c *gin.Context) {
	httpClient := http.Client{Timeout: time.Duration(1) * time.Second}
	client := opendota.NewClient(&httpClient)
	// 8131728
	team_info, _, err := client.TeamService.Team(8131728)

	if err != nil {
		panic("HAFHAADGS")
	}

	fmt.Println(">>>>>>>>>>>", team_info)
	if err := c.ShouldBindJSON(&team_info); err != nil {

	}
	// team_db.Client.Prepare(queryInsertTeam)

	matches, err := GetTeamMatches(team_info.TeamID, httpClient)

	fmt.Println(">:::::", matches)
	c.JSON(http.StatusOK, matches)

}

func GetTeamMatches(team_id int, httpClient http.Client) ([]opendota.TeamMatch, error) {

	var url = "https://api.opendota.com/api/teams/" + strconv.Itoa(team_id) + "/matches"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error is req: ", err)
	}

	res, getErr := httpClient.Do(req)
	if getErr != nil {
		log.Fatal(getErr)
	}
	body, readErr := ioutil.ReadAll(res.Body)
	if readErr != nil {
		log.Fatal(readErr)
	}

	team_matches := []opendota.TeamMatch{}
	jsonErr := json.Unmarshal(body, &team_matches)
	if jsonErr != nil {
		log.Fatal(jsonErr)
	}

	fmt.Println("<<<<<<<<<<<", len(team_matches))

	return team_matches, err
}

func TeamStats(team opendota.Team) {

}
