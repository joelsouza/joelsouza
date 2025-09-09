# Use the official Go image as the base image
FROM golang:1.23.3-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod ./

# Copy the source code
COPY . .

# Build the application
RUN go build -o main .

# Use a minimal alpine image for the final stage
FROM alpine:latest

WORKDIR /app

# Copy the binary from builder
COPY --from=builder /app/main .
COPY *.html .
COPY static/ static/

EXPOSE 8090

# Run the binary
CMD ["./main"]
