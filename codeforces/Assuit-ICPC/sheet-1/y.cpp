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
bool isNumeric(string const &str)
{
    return !str.empty() && str.find_first_not_of("0123456789") == string::npos;
}
 
int bubblesort(int a[], int n)
{
    bool swapped = false;
    int numSwaps = 0;
 
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                swap(a[j], a[j + 1]);
                numSwaps++;
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
 
    return numSwaps;
}
 
template <typename T>
void printArray(vector<T> ar)
{
    for (auto a : ar)
        cout << a << endl;
}
 
int main()
{
    // prepare..code
    fast;
    // declaration
    ll a, b, c, d, mod = 1e9, half1, half2, result;
    cin >> a >> b >> c >> d;
 
    half1 = ((a % mod) * (b % mod)) % mod;
    half2 = ((c % mod) * (d % mod)) % mod;
    result = ((half1 % mod) * (half2 % mod)) % mod;
    result %= 100;
 
    if (result <= 9)
        cout << "0" << result << endl;
    else
        cout << result << endl;
 
    return 0;
}