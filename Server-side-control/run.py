import pyrebase
import serial
from time import sleep
from datetime import datetime as dt


def get_message():
    firebase_config = {
        # Replace with firebase api
    }

    firebase = pyrebase.initialize_app(firebase_config)
    db = firebase.database()

    message = db.child().get().val().get("message").get("message")
    return message


def show_display(arduino, message):
    print(message)
    arduino.write(bytes(message, 'utf-8'))


def main():
    message_inicial = ""
    arduino = serial.Serial(port="com_port", baudrate=115200, timeout=.1)
    while True:
        message = get_message()
        if message != message_inicial:
            data_now = dt.now()

            with open("log_msg.txt", "a", encoding="utf-8") as file:
                file.write(f"{message} : {data_now}\n")

            show_display(arduino, message)
            message_inicial = message

        sleep(1)


if __name__ == '__main__':
    main()
