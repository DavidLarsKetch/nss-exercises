SELECT * FROM Genre

INSERT INTO "Artist" ("ArtistName", "YearEstablished")
 VALUES ("Big Star", 1971);

INSERT INTO "Album" ("Title", "ReleaseDate", "AlbumLength", "Label", "ArtistId", "GenreId")
 VALUES ("#1 Record", "August 1972", "37:03", "Ardent", (SELECT ArtistId FROM Artist WHERE ArtistName="Big Star"), (SELECT GenreId FROM Genre WHERE Label="Rock"));

INSERT INTO "Song" ("Title", "SongLength", "ReleaseDate", "GenreId", "ArtistId", "AlbumId")
 VALUES ("In the Street", "2:55", "August 1972", (SELECT GenreId FROM Genre WHERE Label="Rock"), (SELECT ArtistId FROM Artist WHERE ArtistName="Big Star"), (SELECT AlbumId FROM Album WHERE Title="#1 Record"));

SELECT ar.ArtistName, al.Title "AlbumTitle", s.Title "SongTitle" 
 FROM Song s LEFT JOIN Album al, Artist ar 
 ON s.ArtistId = al.ArtistId AND s.ArtistId = ar.ArtistId 
 WHERE s.Title="In the Street";

SELECT COUNT(*) "Song Count", Album.Title "Album Title"
 FROM Song 
 JOIN Album
 ON Song.AlbumId = Album.AlbumId
 GROUP BY Song.AlbumId

SELECT COUNT(*) "Song Count", Artist.ArtistName "Artist"
 FROM Song 
 JOIN Artist
 ON Song.ArtistId = Artist.ArtistId
 GROUP BY Song.ArtistId

SELECT COUNT(*) "Song Count", Genre.Label "Genre"
 FROM Song 
 JOIN Genre
 ON Song.GenreId = Genre.GenreId
 GROUP BY Song.GenreId

SELECT Title, MAX(AlbumLength) "AlbumLength" FROM Album

SELECT Title, MAX(SongLength) "SongLength" FROM Song

SELECT a.Title AS AlbumTitle, s.Title AS SongTitle, MAX(s.SongLength) AS SongLength FROM Song s, Album a WHERE s.AlbumId = a.AlbumId
