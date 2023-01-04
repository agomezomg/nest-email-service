## Observations

1. Mongo credentials were left hard-coded but have limited permissions to a single resource that was intended for this project.
2. Authentication/JWT/Passports are implemented but not fully functional. Any email service should ideally have authentication logic, but given a time constraint, I decided to prioritise work with websockets.
3. Users service was made to support authentication logic and is fully functional.
4. Mail service works over websockets. This can be tested through Postman by running the project normally and creating a websocket request (a Beta feature on Postman) to both emit and subscribe to new messages.
5. Mail service has partial implementation for deleting and retrieving deleted messages, but aren't functional yet.
