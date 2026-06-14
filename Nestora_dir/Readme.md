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
<!-- -------------------------------------------------- -->
Joi is used for validate data
-joi is an npm package
it help the develper to validate the all model automatically insted of writing the if condition again
            if(!newListing.title){
            throw new ExpressError(404,"Title is missing")
        }
        if(!newListing.description){
            throw new ExpressError(404,"Description is missing")
        }
        if(!newListing.location){
            throw new ExpressError(404,"Location is missing")
        }
        if(!newListing.country){
            throw new ExpressError(404,"Country is missing")
        }...... aise likhne ki jarurt nahi pdti sare model joi handle kr leta hai
___________________________________________________________        