stockDict = { 'GOOG': 'Google', 'FB': 'Facebook', 'SPT': 'Spotify', 'NTFX': 'Netflix' }
purchases = [ ( 'GOOG', 134, '10-10-2010', 242 ),
        ( 'FB', 21, '20-12-2011', 23 ),
        ( 'SPT', 1, '01-04-2018', 232 ),
        ( 'NTFX', 1000, '01-01-2015', 22 ),
        ( 'SPT', 3, '01-30-2017', 244 )
]

def purchases_by_each():
    '''
    Computes total purchase price for each purchase & provides stock name

    Returns: list
    '''
    totals_each = [{ stockDict[ p[0] ]: p[1] * p[3] for p in purchases }]
    return(totals_each)

def purchases_total_by_stock():
    '''
    Computes total purchase price for all purchases of each stock
    '''
    totals_by_stock = { k : 0 for k in stockDict } 
    for p in purchases:
        totals_by_stock[ p[0] ] += (p[1] * p[3])
    return(totals_by_stock)

print(purchases_by_each())
print(purchases_total_by_stock())
