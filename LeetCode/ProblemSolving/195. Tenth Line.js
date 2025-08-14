/*
195. Tenth Line
Easy
Topics
premium lock icon
Companies
Given a text file file.txt, print just the 10th line of the file.

Example:

Assume that file.txt has the following content:

Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10
Your script should output the tenth line, which is:

Line 10
Note:
1. If the file contains less than 10 lines, what should you output?
2. There's at least three different solutions. Try to explore all possibilities.
*/

// SOLUTION 1: Using sed
// This prints only the 10th line. If fewer than 10 lines, it prints nothing.
// sed -n '10p' file.txt

// SOLUTION 2: Using awk
// This prints only when the line number equals 10. If fewer than 10 lines, it prints nothing.
// awk 'NR==10' file.txt

// SOLUTION 3: Using head and tail
// Gets first 10 lines, then takes the last line. If fewer than 10 lines, it prints the last line.
// head -n 10 file.txt | tail -n 1

// SOLUTION 4: Using tail with + option and head
// Starts from the 10th line and prints the first line from there. If fewer than 10 lines, it prints nothing.
// tail -n +10 file.txt | head -n 1

// SOLUTION 5: Handling the case where file has fewer than 10 lines
// For LeetCode, we should NOT print a message if there are fewer than 10 lines,
// we should just output nothing. Here's the correct version:
/*
#!/bin/bash
if [ $(wc -l < file.txt) -ge 10 ]; then
    sed -n '10p' file.txt
fi
*/

// BEST SOLUTION FOR LEETCODE (simplest):
/*
#!/bin/bash
sed -n '10p' file.txt
*/


// solution accepted
// sed -n '10p' file.txt