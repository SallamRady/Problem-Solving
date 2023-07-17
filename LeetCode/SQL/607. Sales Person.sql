# Write your MySQL query statement below
SELECT s.name  from SalesPerson s
WHERE s.name not in (
  SELECT sp.name from SalesPerson sp
  inner join Orders ord
  on ord.sales_id  = sp.sales_id
  inner join  Company  cp
  on cp.com_id = ord.com_id 
  where cp.name = 'RED'
);