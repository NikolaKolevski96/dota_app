package app

import (
	"github.com/nikolakolevski96/dota_app/server/handlers/team"
)

func mapUrls() {
	router.POST("/api/register", team.GetTeam)
}
