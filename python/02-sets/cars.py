showroom = set()
showroom.add('Beetle')
showroom.add('Camaro')
showroom.add('Mustang')
showroom.add('Civic')
print(len(showroom))

showroom.add('Mustang')
print(showroom)

new_showroom = set()
new_showroom.add('Explorer')
new_showroom.add('Cruze')
showroom.update(new_showroom)
showroom.discard('Camaro')

junkyard = set()
junkyard.add('Beetle')
junkyard.add('Accord')
junkyard.add('Lexus')
junkyard.add('Camry')
print(showroom.intersection(junkyard))

showroom = showroom.union(junkyard)
print(showroom)

showroom.discard('Lexus')
print(showroom)

