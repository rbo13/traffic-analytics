package utils

import (
	"os"
)

// GetEnvWithDefault returns a string from
// the env var passed, returns the default
// value if none given
func GetEnvWithDefault(envKey string, def string) string {
	value := os.Getenv(envKey)

	if value == "" {
		return def
	}

	return value
}
