
local run: 
```Shell
docker-compose -f docker-compose-local.yml --project-name weather-local  build
docker-compose -f docker-compose-local.yml --project-name weather-local  up
```

prod build: 
```
docker-compose --project-name weather build
docker-compose --project-name weather up
```

remove all:

```Shell
docker container rm -f $(docker container ls -qa)
docker image rm -f $(docker image ls -q)
docker volume rm -f $(docker volume ls -q)
```

when install new npm package
```
yarn add $YOUR_NEW_NPM_MODULE

# remove the image where the new module is installed
docker image rm -f $Image_Name

# rebuild, while making sure it doesn't use the internal cache 
docker-compose build --no-cache
docker-compose up
```


# apis used
- Google 
  * https://console.cloud.google.com/iam-admin/settings?project=urbnsample
  * https://developers.google.com/maps/documentation/javascript/overview?hl=en_US
  * https://developers.google.com/maps/documentation/javascript/react-map
- Accuweather
  * https://developer.accuweather.com/user/me/apps
