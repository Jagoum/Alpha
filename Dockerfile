FROM postgres:latest AS me

WORKDIR /myapp

COPY . .

FROM ubuntu:latest

WORKDIR /myapp

COPY --from=me /myapp /myapp

CMD ["/myapp"]
