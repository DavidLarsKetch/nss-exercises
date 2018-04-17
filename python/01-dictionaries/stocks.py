stockDict = { 'GOOG': 'Google', 'FB': 'Facebook', 'SPT': 'Spotify', 'NTFX': 'Netflix' }
purchases = [ ( 'GOOG', 134, '10-10-2010', 242 ),
        ( 'FB', 21, '20-12-2011', 23 ),
        ( 'SPT', 1, '01-04-2018', 232 ),
        ( 'NTFX', 1000, '01-01-2015', 22 )
]

def purchases_by_each():
    '''Computes total purchase price for each purchase & provides stock name

    Returns: list
    '''
    totals_each = []
    for p in purchases:
        totals_each.append( { stockDict[ p[0] ]: p[1] * p[3] } )

    return(totals_each)

def purchases_total_by_stock():
    '''Computes total purchase price for all purchases of each stock
    '''

print(purchases_by_each())
