--1.
SELECT FirstName, LastName, CustomerId, Country 
FROM Customer
WHERE Country IS NOT "USA"

--2.
SELECT *
FROM CUSTOMER
WHERE Country IS "Brazil"

--3.
SELECT c.FirstName, c.LastName, i.InvoiceId, i.InvoiceDate, i.BillingCountry
FROM Invoice i
JOIN Customer c
ON i.CustomerId=c.CustomerId
WHERE c.Country="Brazil"

--4.
SELECT *
FROM Employee
WHERE Title="Sales Support Agent"

--5.
SELECT BillingCountry
FROM Invoice
GROUP BY BillingCountry

--6.
SELECT i.*, e.FirstName AS "RepFirst", e.LastName AS "RepLast"
FROM Invoice i
JOIN Customer c, Employee e
ON i.CustomerId=c.CustomerId
WHERE c.SupportRepId=e.EmployeeId

--7.
SELECT i.Total,
c.FirstName AS CustomerFirst,
c.LastName AS CustomerLast,
c.Country,
e.FirstName AS EmpFirst,
e.LastName AS EmpLast
FROM Invoice i
JOIN Customer c, Employee e
ON i.CustomerId=c.CustomerId
WHERE c.SupportRepId=e.EmployeeID

--8.
SELECT strftime('%Y', InvoiceDate) "Year", 
count(InvoiceDate) "# of Sales", 
sum(Total) "Sales Total"
FROM Invoice
WHERE strftime('%Y', InvoiceDate) = "2009" OR strftime('%Y', InvoiceDate) = "2011"
GROUP BY strftime('%Y', InvoiceDate)

--9.
SELECT COUNT(*) "# Line Items for Invoice 37"
FROM InvoiceLine
WHERE InvoiceId=37

--10.
SELECT InvoiceId, COUNT(*) "# Line Items"
FROM InvoiceLine
GROUP BY InvoiceId

--11.
SELECT i.*, t.Name "TrackName"
FROM InvoiceLine i
JOIN Track t
ON i.TrackId=t.TrackId

--12.
SELECT i.*, t.Name "TrackName", a.Name "ArtistName"
FROM InvoiceLine i
JOIN Track t, Album al, Artist a
ON i.TrackId=t.TrackId AND al.ArtistId=a.ArtistId
WHERE t.AlbumId=al.AlbumId

--13.
SELECT BillingCountry, COUNT(*) "#OfInvoices"
FROM Invoice
GROUP BY BillingCountry

--14.
SELECT p.Name, COUNT(pt.TrackId) "#OfTracks"
FROM PlaylistTrack pt 
JOIN Playlist p
ON pt.PlaylistId=p.PlaylistId
GROUP BY pt.PlaylistId

--15.
SELECT t.Name "Track",
 al.Title "Album",
 g.Name "Genre",
 t.Composer,
 t.Milliseconds,
 m.Name "MediaType",
 t.Bytes,
 t.UnitPrice
FROM Track t
JOIN Album al, MediaType m, Genre g
ON t.AlbumId=al.AlbumId AND t.MediaTypeId=m.MediaTypeId AND t.GenreId=g.GenreId

--16.
SELECT i.*, COUNT(il.InvoiceId) "#OfLineItems"
FROM Invoice i
JOIN InvoiceLine il
ON i.InvoiceId=il.InvoiceId
GROUP BY il.InvoiceId

--17.
SELECT e.FirstName, e.LastName, SUM(i.Total) "TotalSales"
FROM Employee e
JOIN Invoice i, Customer c
ON e.EmployeeId=c.SupportRepId AND i.CustomerId=c.CustomerId
GROUP BY e.EmployeeId

--18.
-- Returns total sales, from most to least, not just the topmost sales
SELECT e.FirstName, e.LastName, SUM(i.Total) "TotalSales2009"
FROM Employee e
JOIN Invoice i, Customer c
ON e.EmployeeId=c.SupportRepId AND i.CustomerId=c.CustomerID
WHERE strftime('%Y', i.InvoiceDate)='2009'
GROUP BY e.EmployeeId
ORDER BY i.Total DESC
LIMIT 1

--19.
SELECT (e.FirstName || " " || e.LastName) "SalesRep", ROUND(SUM(i.Total), 2) "TotalSales2010"
FROM Employee e
JOIN Invoice i, Customer c
ON e.EmployeeId=c.SupportRepId AND i.CustomerId=c.CustomerID
WHERE strftime('%Y', i.InvoiceDate)='2010'
GROUP BY e.EmployeeId
ORDER BY i.Total DESC
LIMIT 1

--20.
SELECT (e.FirstName || " " || e.LastName) "SalesRep", ROUND(SUM(i.Total), 2) "TotalSales"
FROM Employee e
JOIN Invoice i, Customer c
ON e.EmployeeId=c.SupportRepId AND i.CustomerId=c.CustomerId
GROUP BY e.EmployeeId
ORDER BY i.Total ASC
LIMIT 1

--21.
SELECT (e.FirstName || " " || e.LastName) "SalesRep", COUNT(c.SupportRepId) "#Customers"
FROM Employee e
JOIN Customer c
ON e.EmployeeId=c.SupportRepId
GROUP BY c.SupportRepId

--22.
SELECT c.Country, ROUND(SUM(i.Total), 2) "Total"
FROM Invoice i
JOIN Customer c
ON i.CustomerId=c.CustomerId
GROUP BY c.Country
ORDER BY SUM(i.Total) DESC

--23.
-- Returns highest by track name independent of whether appears on same album
SELECT t.Name, COUNT(il.InvoiceLineId) "#Sold"
FROM InvoiceLine il
JOIN Track t, Invoice i
ON il.TrackId=t.TrackId AND il.InvoiceId=i.InvoiceId
WHERE strftime('%Y', i.InvoiceDate)='2013'
GROUP BY t.Name
ORDER BY COUNT(il.InvoiceLineId) DESC

--24.
SELECT t.Name, COUNT(il.InvoiceLineId) "#Sold"
FROM InvoiceLine il
JOIN Track t
ON il.TrackId=t.TrackId
GROUP BY t.Name
ORDER BY COUNT(il.InvoiceLineId) DESC
LIMIT 5

--25.
ELECT ar.Name, COUNT(il.InvoiceLineId) "#ofTrackSales"
FROM InvoiceLine il
JOIN Track t, Album a, Artist ar
ON il.TrackId=t.TrackId AND t.AlbumId=a.AlbumId AND a.ArtistId=ar.ArtistId
GROUP BY ar.Name
ORDER BY COUNT(il.InvoiceLineId) DESC
LIMIT 3

--26.
SELECT m.Name, COUNT(il.InvoiceLineId) "#ofTrackSales"
FROM InvoiceLine il
JOIN Track t, MediaType m
ON il.TrackId=t.TrackId AND t.MediaTypeId=m.MediaTypeId
GROUP BY m.MediaTypeId
ORDER BY COUNT(il.InvoiceLineId) DESC

--27.
SELECT i.InvoiceId, COUNT(DISTINCT g.GenreId) "#OfDistinctGenres"
FROM Invoice i
JOIN InvoiceLine il, Track t, Genre g
ON i.InvoiceId=il.InvoiceId AND il.TrackId=t.TrackId AND t.GenreId=g.GenreId
GROUP BY i.InvoiceId
HAVING COUNT(DISTINCT g.GenreId) > 1

