

$Body = @'
{
    "tweet": "Vanessa Bryant on Kobe Bryant being inducted into the Basketball Hall of Fame today. We wish that he was here with us to celebrate but it is definitely the peak of his NBA career. #basketball #kobe #mamba"
}
'@

Invoke-RestMethod -Uri "http://localhost:3000/api/tweet" -Method POST -ContentType "application/json" -Body $Body


$Body = @'
{
    "tweet": "Kobe Bryant, Tim Duncan and Kevin Garnett are going to be inducted into the Naismith Basketball @Hoophall class of 2020, with the formal announcement coming Saturday, per @ShamsCharania #hoophall #basketball"
}
'@

Invoke-RestMethod -Uri "http://localhost:3000/api/tweet" -Method POST -ContentType "application/json" -Body $Body


$Body = @'
{
    "tweet": "Greatness coming soon Zipper-mouth face Double exclamation mark #unsigned #classof2021 #basketball"
}
'@

Invoke-RestMethod -Uri "http://localhost:3000/api/tweet" -Method POST -ContentType "application/json" -Body $Body



$Body = @'
{
    "tweet": "Today is the 30 year anniversary of UNLV winning the national championship. Vegas was still a small town back then and as a kid growing up there nothing was bigger than the Runnin`' Rebels. Still think this is the best college basketball team ever. #UNLV #Basketball"
}
'@

Invoke-RestMethod -Uri "http://localhost:3000/api/tweet" -Method POST -ContentType "application/json" -Body $Body