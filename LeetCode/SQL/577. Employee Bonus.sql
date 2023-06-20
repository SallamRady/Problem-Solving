# Write your MySQL query statement below
SELECT e.name,b.bonus 
FROM Employee e
lEFT JOIN Bonus b
ON e.empId = b.empId
WHERE (b.bonus < 1000) OR (e.empId NOT IN (SELECT empId FROM Bonus)); 
