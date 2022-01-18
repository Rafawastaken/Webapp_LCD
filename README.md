# WebApp Control a LCD Over the Internet With Firebase

## About Project
This project makes possible to send a message to a LCD connected to an arduino through a webpage - CheckOut the previous project about to control an LED over the internet with firebase - https://github.com/Rafawastaken/Control_Led_Firebase

## How to use
1. Need a Firabase Account
2. Replace the commented lines in app.js and run.py for your firebase api creds and your arduino COM port.
3. Install requirements.txt - python3 -m pip install -r requirements.txt

## How does it work
The webpage has a input box, when a message is sent, it's stored in firebase realtime database.
The python script is always checking for updates, when it recieves the new message sends it to arduino with Serial Communication which displays it on the LCD.
