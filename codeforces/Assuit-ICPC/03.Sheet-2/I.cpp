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
#define scan(v)        \
    for (auto &it : v) \
        cin >> it;
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
// TODO::declare and define helper functions and variables
void solution()
{
    // *declare our variables..
    int num, reversedNum = 0, digit, temp;
    // *input
    cin >> num;
    // *proccessing...
    temp = num;
    while (temp)
    {
        digit = temp % 10;
        reversedNum = reversedNum * 10 + digit;
        temp /= 10;
    };
    // *Output....
    cout << reversedNum << endl;
    cout << (reversedNum == num ? "YES" : "NO") << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}