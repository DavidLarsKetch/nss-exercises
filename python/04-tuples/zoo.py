zoo = ('lizard', 'tiger', 'bat', 'seal')
print(zoo.index('tiger'))
print('dragon' in zoo)
(lizard, tiger, bat, seal) = zoo
zoo_list = list(zoo)
zoo_list.extend(['lion', 'prairie dog', 'gazelle'])
print(zoo_list)
new_zoo = tuple(zoo_list)
print(new_zoo)
