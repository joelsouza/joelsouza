package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Serve static files from the "static" directory
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Serve static pages
	pages := map[string]string{
		"/":     "./index.html",
		"/uses": "./uses.html",
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if file, ok := pages[r.URL.Path]; ok {
			http.ServeFile(w, r, file)
			return
		}
		http.NotFound(w, r)
	})

	fmt.Println("Server starting on port 8090...")
	if err := http.ListenAndServe(":8090", nil); err != nil {
		fmt.Printf("Server error: %v\n", err)
	}
}
