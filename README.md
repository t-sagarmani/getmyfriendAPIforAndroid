# Get My Friend
Name: Sagar Lamsal

CollegeID: 160348

CUID:9638800

Batch: Jan19D

This project is a platform inspired from socal networking sites. My aim to work on this project is to develope community based, liked platform where everything is clear in timeline. The project right now is not that much capable to linked all location information . But the future work is aimed that, it will link to the people who are nearby in phycally to show socially. 

## List of Main Features
1. The user can add post. 
2. Everytime, in insert update, delete of post, the authentication is checked. 
3. Un Authenticated user can not access timeline. 
4. Authenticated user can access all timeline info. 
5. User can like to other post
6. The post contain user information, description of post. 
7. Admin can delete post of everyone while users are able to remove their post.
## API Documentation

/login:It is the main gateway to enter. It respont token and user information i.e. user type, username. 
/register: It stores the authentic data of user i.e primary information.
/gettimeline:It responds the information of posts different user done and the particular information of post i.e who did the post.
/post:It post the data that user want to post in networking sites with description. It also store the user information
/getprofile:It returs all user information i.e. primary and secondary information. 
/updateprofile. It updates all user data like job, institute and multiple other secondary information. 

#List of API
    #GET Methods
 - /users/me
 To know the user 
 - /profiledata/:id 
 :to obtain personal data
 - /gettimeline 
 :to get timeline
 - /getadmintimeline 
 :To get all post that all userdid.
 - /gettimelineandroid 
 :For timeline in android
 - /getpersonaltimeline 
 :to get all post that particular logged in use did
 
#POST Methods
 - /login
 :To get token of authenticated user

 - /register", 
 :To register self
  
 - /profiledata/:id'
 :for profiling data

 - /addpost',
 :to creat post
 
 #PUT Methods
- '/updateprofile',
:changing personal profile data
- '/like'
:to like post
  #Delete methods
- /deletepost/:id',
:for admin,deleting post

- /deletemypost:id'
:for user to delete post

