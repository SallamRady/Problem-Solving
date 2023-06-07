class Solution
{
public:
    bool isUgly(int n)
    {
        for (int i = 2; i <= n; i++)
        {
            while (n % i == 0)
            {
                if (i != 2 && i != 3 && i != 5)
                    return false;
                n /= i;
            }
        }
        return true;
    }
};