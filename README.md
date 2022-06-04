# Next.js + Docker compose + react-env example

## References

* <https://github.com/vercel/next.js/tree/canary/examples/with-docker>
* <https://github.com/andrewmclagan/react-env>

## Versions

```
Windows 10
Docker 20.10.6
yarn 1.22.19
```

## Use .env

```
yarn dev
# access http://localhost:3000/
# access http://localhost:3000/api/hello
```

## Use environment values of the container

```
yarn build
docker compose build
docker compose up
# access http://localhost:3000/
# access http://localhost:3000/api/hello
```
