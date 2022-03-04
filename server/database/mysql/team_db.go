package team_db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var (
	Client *sql.DB
)

func init() {

	var err error

	Client, err = sql.Open("mysql", "root:1234@tcp(127.0.0.1:3306)/dota_app")

	if err != nil {
		panic(err)
	}

	if err := Client.Ping(); err != nil {
		panic(err)
	}

}
