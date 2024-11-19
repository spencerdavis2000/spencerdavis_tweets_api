# Twitter Trending Hashtags

## Programming Assignment

### Spencer Davis

I am running this on node version 20.11.1

```
npm install

npm run start
```

It should start on localhost 3000

If you are on linux you can

```
./tweets.sh
```

If you are on windows you can run powershell script

```
.\tweets.ps1
```

### Endpoints

POST Create Tweet

```
http://localhost:3000/api/tweet

```

GET Get All Tweets

```
http://localhost:3000/api/getAllTweets

```

GET Get All Hash Tags (for debugging output)

```
http://localhost:3000/api/getAllHashTags

```

GET Get Trending Hash Tags

```
http://localhost:3000/api/trending-hashtags

```

returns array in order of highest count at front of array to lowest count towards end of array. If the count is the same it uses alphebetical order
