Model: Listing
1. title -> String
2. description -> string
3. image->URL
4. price-> number
5. location-> string
6. country-> string

Request------------>Middleware------------------->Response

Common Middlewae FUnction
methodOverride
Bodyparser
express.static
express.urlencoded

Function that perform by Middleware:-
1. Execute anycode
2. Make changes to the request and the respose'
3. End the request-response cycle
4. Call the next middleware function in the stack