docker build -t better-youtube-sub:prod .

docker build -t better-youtube-sub:dev --build-arg env=dev .

docker run -p 4200:4200 --env-file ../dockerEnvVars.txt better-youtube-sub:prod

docker run -p 4200:4200 --env-file ../dockerEnvVars.txt my-angular-project:dev