# 193. Valid Phone Numbers
# Write a bash script to find all valid phone numbers in a file named file.txt
# Valid formats: (xxx) xxx-xxxx or xxx-xxx-xxxx

# Solution 1: Using grep with regex
# !/bin/bash
# grep -E '^([0-9]{3}-[0-9]{3}-[0-9]{4}|\([0-9]{3}\) [0-9]{3}-[0-9]{4})$' file.txt

# Solution 2: Using sed
# !/bin/bash
# sed -n -E '/^([0-9]{3}-[0-9]{3}-[0-9]{4}|\([0-9]{3}\) [0-9]{3}-[0-9]{4})$/p' file.txt

# Solution 3: Using awk
# !/bin/bash
# awk '/^([0-9]{3}-[0-9]{3}-[0-9]{4}|\([0-9]{3}\) [0-9]{3}-[0-9]{4})$/' file.txt

# Solution 4: Using gawk (GNU awk) with more explicit regex
# !/bin/bash
# gawk '/^([0-9]{3}-[0-9]{3}-[0-9]{4})$/ || /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/' file.txt

# Best one-liner solution for LeetCode submission:
grep -E '^([0-9]{3}-[0-9]{3}-[0-9]{4}|\([0-9]{3}\) [0-9]{3}-[0-9]{4})$' file.txt