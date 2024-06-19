import datetime
today = datetime.date.today()
endday = datetime.date(2024, 8 ,31)
currenttickets = int(input("How many tickets do you have currently?"))
daysleft = endday - today
cost = int(input("What is the total cost of the prizes you want"))
choice = input("Do you want to express how many days you can work as how many you are missing or what percentage? provide any input for a percentage")
if choice != '':
#23 days
    daysMultiplier = float(input("Expressed as a multiplier e.g 0.5 = half, what percentage of your holiday can you work"))
    newDaysleft = daysleft.days * daysMultiplier
else:
    daysMissed = int(input("How many days can't you work"))
    newDaysleft = daysleft.days - daysMissed

ticketsneeded = cost - currenttickets
print(f"tickets needed {ticketsneeded}")
print(f"{newDaysleft} days left to code")
print(f"{newDaysleft*24} hours left to code")
hours = newDaysleft * 24
# New days left * 24 is the number of hours you have
# The hours needed = tickets needed
hoursToWork = ticketsneeded / newDaysleft  # Potential hours
print(f"You need to work {hoursToWork} a day")