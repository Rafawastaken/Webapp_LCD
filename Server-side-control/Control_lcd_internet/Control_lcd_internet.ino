#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x3f, 16, 2);

String x = "";

void setup() {
  Serial.begin(115200);
  Serial.setTimeout(1);
 lcd.begin();
}

void loop() {
  while (!Serial.available());
  x = Serial.readString();
  lcd.setBacklight(HIGH);
  lcd.setCursor(0, 0);
  lcd.print("MSG:");
  lcd.setCursor(0, 1);
  lcd.print(x);
  delay(1000);
  lcd.setBacklight(HIGH);
  delay(1000);
}
