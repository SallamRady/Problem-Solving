#include <iostream>
#include <iomanip>
#include <cmath>
#include <bitset>
#include <string>
#include <algorithm>
#include <set>
#include <map>
#include <climits>
#include <stack>
#include <vector>
#include <deque>
#include <queue>
#include <unordered_set>
#define endl "\n"
#define ll long long
#define fast                          \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);
#define all(a) a.begin(), a.end()
using namespace std;

// * Check given number is prime or not ??
bool IsPrime(int n)
{
    if (n <= 1)
        return false;
    for (int i = 2; i <= sqrt(n); i++)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}

// * Get number divisors
vector<int> NumberDivisors(ll n)
{
    // * Declare and define variables....
    vector<int> divisors;
    // * Proccessing....
    for (int i = 1; i <= sqrt(n); i++)
    {
        if (n % i == 0)
        {
            divisors.push_back(i);

            if (n / i != i)
                divisors.push_back(n / i);
        }
    }
    sort(divisors.begin(), divisors.end());
    return divisors;
}

// * Calc Greatest Common Divisor (GCD) of two numbers
ll GCD(ll n, ll m)
{
    return __gcd(n, m);
}

// * Check if Given number is lucky
bool IsLuckyNumber(ll n)
{
    // Lucky number is any positive number that its decimal representation contains only 4 and 7.
    int digit = 0;

    while (n)
    {
        digit = n % 10;
        if (digit != 4 && digit != 7)
            return false;
        n /= 10;
    }
    return true;
}

// * Get Summation of digits of number
int SumOfDigits(int n)
{
    int sum = 0;
    while (n)
    {
        sum += (n % 10);
        n /= 10;
    }
    return sum;
};

// * Convert number(decimal) to string
string toBinary(ll n)
{
    string result;
    while (n != 0)
    {
        result = (n % 2 == 0 ? "0" : "1") + result;
        n /= 2;
    }

    return result;
}

// * Get first n elements in Fibonacci
void Fibonacci(int n)
{
    ll base0 = 0, base1 = 1, temp, result = 0;
    for (int i = 0; i < n; i++)
    {
        switch (i)
        {
        case 0:
            // cout << base0 << " ";
            result = base0;
            break;
        case 1:
            // cout << base1 << " ";
            result = base1;
            break;

        default:
            temp = base0 + base1;
            // cout << temp << " ";
            result = temp;
            base0 = base1;
            base1 = temp;
            break;
        }
    }

    cout << result << endl;
}

// * Get index of char in string
int charIndex(string str, char ch)
{
    int index = str.find(ch);

    if (index != string::npos)
        return index;

    return -1;
}

// * Get subarrays of array.
void SubArraysOperation(vector<int> arr)
{
    int n = arr.size(), counter = 0;
    bool valid = true;

    for (int start = 0; start < n; start++)
    {
        for (int end = start; end < n; end++)
        {
            valid = true;
            // for (int i = start; i <= end; ++i) - original
            for (int i = start; i < end; ++i)
            {
                // * This is sub array....
                if (arr[i] > arr[i + 1])
                {
                    valid = false;
                    break;
                }
            }
            if (valid)
                counter++;
        }
    }

    cout << counter << endl;
}

// * Check is B is sub sequence from A ?
bool IsSubSequence(vector<int> a, vector<int> b)
{
    int aPointer = a.size() - 1, bPointer = b.size() - 1;
    for (; aPointer >= 0; aPointer--)
    {
        if (a[aPointer] == b[bPointer])
        {
            bPointer--;
            if (bPointer < 0)
                return true;
        }
    }
    return false;
}

// * Generate Prefix sum vector of incommening vector
vector<ll> generatePrefixSum1D(vector<ll> arr)
{
    int n = arr.size();
    vector<ll> s(n + 1);

    s[0] = 0;
    for (int i = 0; i < n; i++)
    {
        s[i + 1] += (s[i] + arr[i]);
    }

    return s;
}

// * return sum between l,r range
ll calcRangeInPrefixSum1D(vector<ll> s, int l, int r)
{
    if (l > r)
        swap(l, r);
    return s[r] - s[l - 1];
}

/**
 * !! Important Like Indexer to dont repeat code again
 * * Custom methods which I buid
 * * IsPrime , NumberDivisors , IsLuckyNumber
 * * SumOfDigits , toBinary , Fibonacci
 * * charIndex , SubArraysOperation , IsSubSequence
 * * generatePrefixSum1D
 */
// TODO::declare and define helper functions and variables
void solution()
{
    // *declare our variables..
    int n, q, x;
    map<int, int> frq;
    // *input
    cin >> n >> q;
    for (int i = 0; i < n; i++)
    {
        cin >> x;
        if (frq.count(x) == 0)
            frq[x] = 1;
    }
    // *proccessing...

    for (int i = 0; i < q; i++)
    {
        cin >> x;
        cout << (frq.count(x) ? "found" : "not found") << endl;
    }

    // *Output....
};

int main()
{
    //* prepare...code...
    fast;
    // declaration
    solution();

    return 0;
}