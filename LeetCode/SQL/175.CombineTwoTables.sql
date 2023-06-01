# Write your MySQL query statement below
SELECT firstName,lastName,city,state 
From Person p 
LEFT JOIN Address A
ON p.personId = A.personId;