# OnlineTreasureHunt



 The app allows you to play an OnlineTreasureHunt consisting of different levels.Players can only play after loginig up .Each level has one question and has few hints with it .Each question would fetch you 10 points.
 .You can only play one level at a time and leaderboard is updated every minute. 

##  Starting the Project


1. Create a **virtual environment** with venv (install virtualenv, if its not installed).

    mkdir project

    cd project
    ```
    python3 -m venv  treasurehunt
    ```

2. Clone the project in the virtual environment directory.

    git clone https://github.com/nirvikagarwal/OnlineTreasureHunt.git

    ```
3. Activate the virtual environemnt.
    #### For Linux/Mac OSX   
    ```
    source bin/activate

    ```
    #### For Windows
    ```
    .\Scripts\activate

    ```
4. Install the requirements.
    ```
    cd OnlineTreasureHunt
    pip install -r requirements.txt

    ```
5.Go to the path   venv/lob/django/contrib/auth/urls.py.
  change app_name="auth"
   
5. Run the Migrations
    ```
    python manage.py makemigrations

    python manage.py migrate

    ```
6. Run the development server
    ```
    python manage.py runserver

    ```
7. Head to server http://localhost:8000
