# Write your MySQL query statement below
SELECT MAX(num) AS num FROM (
    SELECT COUNT(num) AS counts, num 
    FROM MyNumbers 
    GROUP BY num
) t
    WHERE t.counts=1;