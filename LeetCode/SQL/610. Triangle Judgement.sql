/* Write your T-SQL query statement below */
SELECT x,y,z,
      CASE WHEN (
        ((y+z) > x) AND
        ((y+x) > z) AND
        ((x+z) > y)
        )
      THEN 'Yes' 
      ELSE 'No' END AS triangle
FROM Triangle;