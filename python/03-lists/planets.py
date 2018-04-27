planet_list = ["Mercury", "Mars"]
planet_list.append('Jupiter')
planet_list.append('Saturn')
planet_list.extend(['Uranus', 'Neptune'])
planet_list.insert(1, 'Venus')
planet_list.insert(2, 'Earth')
planet_list.append('Pluto')

rocky_planets = planet_list[0:4] 
del planet_list[-1]

spacecraft = []
spacecraft.append(('Cassini', 'Saturn', 'Jupiter', 'Mars'))
spacecraft.append(('Galileo', 'Jupiter'))
spacecraft.append(('Curiosity', 'Mars'))

for planet in planet_list:
    print(planet + ':')
    for s in spacecraft:
        for i in s:
            if i == planet:
                print(' ' + s[0])
                break
