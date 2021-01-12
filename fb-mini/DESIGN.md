Tables: Users, Posts, PostLikes, Friends


Table 1: Users
Columns:
- id (uuid)
- email (string)
- password (string)
- first_name (string)
- last_name (string)
- dob (date)
- bio (text)
- online (boolean)
- last_seen (timestamp)

Table 2: Posts -- keeps track of all posts made by users; one row per post
Columns:
- post_id (uuid)
- user_id (uuid)
- post (text)
- date_posted (date)
- likes (number)

Table 3: PostLikes -- keeps track of all the users who liked a post; one row per like
Columns:
- post_id (uuid)
- liker_id (uuid)

Table 4: Friends -- keeps track of all friendships
Columns:
- friendship_id (uuid)
- requestor_id (uuid)
- requested_id (uuid)
- date_requested (timestamp)
- friendship_status (enum --> ['accepted', 'declined', 'requested'])