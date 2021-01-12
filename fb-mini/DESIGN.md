Tables: Users, Posts, PostLikes, Friends


Table 1: Users
Columns:
- user_id (number)
- first_name (string)
- last_name (string)
- dob (date)
- password (string)
- bio (string)
- online (boolean)
- last_seen (date)

Table 2: Posts -- keeps track of all posts made by users; one row per post
Columns:
- post_id (number)
- poster_id (number)
- post_text (string)
- date_posted (date)
- likes (number)

Table 3: PostLikes -- keeps track of all the users who liked a post; one row per like
Columns:
- post_id (number)
- liker_id (number)

Table 4: Friends -- keeps track of all friendships
Columns:
- requestor_id (number)
- requested_id (number)
- date_requested (date)
- friendship_status (enum --> CREATE TYPE status AS ENUM ('accepted', 'declined', 'requested'))