package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Serve static files from the "static" directory
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Serve index.html
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			http.ServeFile(w, r, "./index.html")
			return
		}
		http.NotFound(w, r)
	})

	fmt.Println("Server starting on port 8090...")
	if err := http.ListenAndServe(":8090", nil); err != nil {
		fmt.Printf("Server error: %v\n", err)
	}
}
