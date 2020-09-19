I. Tools Used: 

    - $ npm install 
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0
    - $ npm install --save mysql2

    - https://www.mysql.com/
        MySQL Community Server
        https://dev.mysql.com/downloads/mysql/
        > download DMG file

        MySQL Workbench: 
        https://dev.mysql.com/downloads/workbench/
        
        Go to /Desktop/Trung/Programs > open workbench

        setup video > video 138


II. Core Concepts: 

    1. Database Introduction: 
     - Go to https://docs.google.com/document/d/1fW7WSCaD98QZvdSwpHJEw5zn_TnahGeR5L_FRu__XnM/edit?usp=sharing
     - Search for "Basic of Databases" > Read
    
    2. What is SQL Database ?
     - Go to https://docs.google.com/document/d/1fW7WSCaD98QZvdSwpHJEw5zn_TnahGeR5L_FRu__XnM/edit?usp=sharing
     - Search for it > Read

    3. What is NoSQL Database ?
     - Go to https://docs.google.com/document/d/1fW7WSCaD98QZvdSwpHJEw5zn_TnahGeR5L_FRu__XnM/edit?usp=sharing
     - Search for it > Read
    
    4. What is Horizontal and Vertical Scaling: 
     - Go to https://docs.google.com/document/d/1fW7WSCaD98QZvdSwpHJEw5zn_TnahGeR5L_FRu__XnM/edit?usp=sharing
     - Search for it > Read

    5. SQL and NoSQL comparation: 
     - Go to https://docs.google.com/document/d/1fW7WSCaD98QZvdSwpHJEw5zn_TnahGeR5L_FRu__XnM/edit?usp=sharing
     - Search for "Comparing SQL and NoSQL" > Read

III. Module Notes: 

    1. Set up and import database in Node: 
        - 2nd Commit
        - Setting up database in ./util/database.js
        - importing database and use it in app.js
    
    2. Retrieving data and fetching products: 
        a. Retrieving data: 
            - 3rd Commit
            - See code in app.js
        
        b. Fetching data: 
            - 5th Commit
            - ./models/product.js: retrieving data
            - ./controller/shop.js: in getIndex() and getProducts()
            , fetching data

IV. Other Notes: 
    This module contain: 
        - Different Kinds of Databases (SQL vs NoSQL)
        - Using SQL in a Node.js App 