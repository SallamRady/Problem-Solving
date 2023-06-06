# Write your MySQL query statement below

SELECT t1.id
FROM Weather t1, Weather t2
WHERE t1.recordDate = DATE_ADD(t2.recordDate, INTERVAL 1 DAY) AND t1.temperature > t2.temperature